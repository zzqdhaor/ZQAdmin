package zq.admin.filemanager.exception;

public class FileNotExistsException extends RuntimeException {
    public FileNotExistsException() {
    }

    public FileNotExistsException(String msg) {
        super(msg);
    }
}
