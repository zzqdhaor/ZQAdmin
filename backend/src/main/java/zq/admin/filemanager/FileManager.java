package zq.admin.filemanager;

import zq.admin.filemanager.exception.FileNotExistsException;
import zq.admin.filemanager.exception.NoPermissionException;
import zq.admin.filemanager.exception.NotADirectoryException;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;

public class FileManager {

    public static File[] listFilesAt(String path) {
        File directory = new File(path);
        if (!directory.canRead()) {
            throw new NoPermissionException();
        }
        if (!directory.isDirectory()) {
            throw new NotADirectoryException();
        }
        return directory.listFiles();
    }

    public static void cutOverride(String from, String to) throws IOException {
        if (Files.isSameFile(new File(from).toPath(), new File(to + new File(from).getName()).toPath())) return;
        copyOverride(from, to);
        deleteDirectory(new File(from));
    }

    public static void deleteFileAt(String path) {
        File toDelete = new File(path);
        if (!toDelete.exists()) throw new FileNotExistsException(toDelete.getAbsolutePath() + " not exist!");
        deleteDirectory(toDelete);
    }

    private static void deleteDirectory(File file) {
        if (file.isDirectory()) {
            File[] fs = file.listFiles();
            if (fs != null) {
                for (File s : fs) {
                    deleteDirectory(s);
                }
            }
        }
        file.delete();
    }

    public static void copyOverride(String from, String to) throws IOException {
        File f = new File(from);
        File t = new File(to + f.getName());
        if (f.equals(t)) return;
        if (t.exists()) deleteDirectory(t);
        Files.copy(f.toPath(), t.toPath());
    }

    public static void renameOverride(String path, String newName) {
        File toRename = new File(path);
        if (!toRename.exists()) throw new FileNotExistsException();
        toRename.renameTo(new File(toRename.getParentFile().getAbsolutePath() + "/" + newName));
    }


}
