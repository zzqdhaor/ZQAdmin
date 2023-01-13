package zq.admin.system;

import com.jcraft.jsch.ChannelShell;
import com.jcraft.jsch.JSch;
import com.jcraft.jsch.JSchException;
import com.jcraft.jsch.Session;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.*;

import java.io.*;
import java.util.HashMap;
import java.util.Map;

@Component
class MyHandler implements WebSocketHandler {
    private static class SealedSshObjects {
        Session session;
        InputStream is;
        OutputStream os;

        ChannelShell shell;

        StringBuffer passwordBuffer = new StringBuffer();
        boolean login = false;

        String firstSize;

        public void close() throws IOException {
            if (is != null) is.close();
            if (os != null) os.close();
            session.disconnect();
        }
    }

    private final Map<String, SealedSshObjects> map = new HashMap<>();
    @Value("${zq.admin.ssh-username}")
    public String username;
    public String password;

    @Override
    public void afterConnectionEstablished(WebSocketSession mSession) throws Exception {
        SealedSshObjects obj = new SealedSshObjects();
        map.put(mSession.getId(), obj);
        if (password == null)
            mSession.sendMessage(new TextMessage("Password for" + " " + username + ": "));
    }

    private void startServe(WebSocketSession mSession, Session session, InputStream is) {
        new Thread(() -> {
            BufferedReader reader = new BufferedReader(new InputStreamReader(is));
            while (session.isConnected()) {
                try {
                    mSession.sendMessage(new TextMessage(String.valueOf((char) reader.read())));
                } catch (RuntimeException | IOException e) {
                    try {
                        mSession.close();
                    } catch (IOException ex) {
                        throw new RuntimeException(ex);
                    }
                }
            }
        }).start();
    }

    private boolean tryLogin(SealedSshObjects objects, WebSocketSession session) throws IOException {
        try {
            objects.session = new JSch().getSession(username, "localhost");
            objects.session.setConfig("StrictHostKeyChecking", "no");
            String password = this.password == null ? objects.passwordBuffer.toString() : this.password;
            objects.session.setPassword(password);
            objects.passwordBuffer = new StringBuffer();
            objects.session.connect();
            this.password = password;
            objects.shell = (ChannelShell) objects.session.openChannel("shell");
            objects.shell.connect();
            objects.shell.setPty(true);
            String col = objects.firstSize.split(" ")[1];
            String row = objects.firstSize.split(" ")[2];
            objects.shell.setPtySize(Integer.parseInt(col), Integer.parseInt(row), 640, 480);
            objects.is = objects.shell.getInputStream();
            objects.os = objects.shell.getOutputStream();
            session.sendMessage(new TextMessage("\n"));
            startServe(session, objects.session, objects.is);
            return true;
        } catch (JSchException | IOException e) {
            session.sendMessage(new TextMessage("\nWrong Password!\n"));
            session.sendMessage(new TextMessage("Password for" + " " + username + ": "));
            return false;
        }
    }
    @Override
    public void handleMessage(WebSocketSession session, WebSocketMessage<?> message) throws Exception {
        SealedSshObjects objects = map.get(session.getId());
        String msg = message.getPayload().toString();
        if (msg.startsWith("##$$RSZ") && objects.login) {
            String col = msg.split(" ")[1];
            String row = msg.split(" ")[2];
            objects.shell.setPtySize(Integer.parseInt(col), Integer.parseInt(row), 640, 480);
        } else if (!msg.startsWith("##$$RSZ") && !objects.login) {
            if (msg.equals("\r")) objects.login = tryLogin(objects, session);
            else objects.passwordBuffer.append(msg);
        } else if (msg.startsWith("##$$RSZ") && !objects.login) {
            objects.firstSize = msg;
            if (password != null) {
                objects.login = tryLogin(objects, session);
            }
        } else if (objects.login) {
            objects.os.write(msg.getBytes());
            objects.os.flush();
        }

    }

    @Override
    public void handleTransportError(WebSocketSession session, Throwable exception) throws Exception {
        map.get(session.getId()).close();
        map.remove(session.getId());
        throw new RuntimeException("handle transport error!", exception);
    }

    @Override
    public void afterConnectionClosed(WebSocketSession mSession, CloseStatus closeStatus) throws Exception {
        map.get(mSession.getId()).close();
        map.remove(mSession.getId());
    }

    @Override
    public boolean supportsPartialMessages() {
        return false;
    }
}
