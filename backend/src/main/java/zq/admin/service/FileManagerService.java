package zq.admin.service;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import zq.admin.filemanager.FileManager;
import zq.admin.filemanager.exception.NoPermissionException;
import zq.admin.filemanager.exception.NotADirectoryException;
import zq.admin.json.filemanager.JsonFileResult;
import zq.admin.json.universial.BinaryJsonResult;
import zq.admin.utils.FileWrapUtils;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.URLDecoder;
import java.nio.charset.Charset;
import java.nio.file.Files;

@Service
public class FileManagerService {

    public JsonFileResult list(String filePath) {
        JsonFileResult result = new JsonFileResult();
        try {
            result.files = FileWrapUtils.wrap(FileManager.listFilesAt(filePath));
            result.success = true;
        } catch (NoPermissionException | NotADirectoryException e) {
            result.success = false;
        }
        return result;
    }

    public BinaryJsonResult delete(String filePath) {
        BinaryJsonResult result = new BinaryJsonResult();
        try {
            FileManager.deleteFileAt(filePath);
            result.success = true;
        } catch (RuntimeException e) {
            result.success = false;
        }
        return result;
    }

    public void upload(MultipartFile file, File localFile) throws IOException {
        if (localFile.exists()) localFile.delete();
        localFile.createNewFile();
        OutputStream os = Files.newOutputStream(localFile.toPath());
        InputStream is = file.getInputStream();
        os.write(is.readAllBytes());
        os.close();
        is.close();
    }

    public BinaryJsonResult mkdir(String to, String name) {
        to = URLDecoder.decode(to, Charset.defaultCharset());
        File file = new File(to + name);
        if (file.exists()) return new BinaryJsonResult(false);
        boolean success = file.mkdir();
        return new BinaryJsonResult(success);
    }

    public void getFile(HttpServletRequest request, HttpServletResponse response) {
        String path = request.getParameter("path");
        byte[] b = new byte[1024 * 1024];
        int len;
        File file = new File(path);
        if (!file.exists()) return;
        response.setContentLengthLong(file.length());
        response.setContentType("application/octet-stream");
        response.setHeader("Content-Disposition", "attachment; filename= \"" + file.getName() + "\"");
        try (InputStream is = Files.newInputStream(file.toPath());
             OutputStream os = response.getOutputStream()) {
            while ((len = is.read(b)) != -1) {
                os.write(b, 0, len);
            }
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    public BinaryJsonResult cut(String from, String to) {
        BinaryJsonResult result = new BinaryJsonResult();
        try {
            FileManager.cutOverride(from, to);
            result.success = true;
        } catch (IOException | RuntimeException e) {
            result.success = false;
        }
        return result;
    }

    public BinaryJsonResult copy(String from, String to) {
        BinaryJsonResult result = new BinaryJsonResult();
        try {
            FileManager.copyOverride(from, to);
            result.success = true;
        } catch (IOException | RuntimeException e) {
            result.success = false;
        }
        return result;
    }

    public BinaryJsonResult rename(String from, String to) {
        BinaryJsonResult result = new BinaryJsonResult();
        try {
            FileManager.renameOverride(from, to);
            result.success = true;
        } catch (RuntimeException e) {
            result.success = false;
        }
        return result;
    }
}
