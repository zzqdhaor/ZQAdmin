package zq.admin.utils;

import zq.admin.wrapper.FileJsonWrapper;

import java.io.File;
import java.util.Arrays;

public class FileWrapUtils {
    public static FileJsonWrapper[] wrap(File[] files) {
        if (files == null) return new FileJsonWrapper[]{};
        Arrays.sort(files, (o1, o2) -> {
            if (o1.isDirectory() && o2.isDirectory()) return o1.getName().compareTo(o2.getName());
            if (o1.isDirectory() && !o2.isDirectory()) return -1;
            if (!o1.isDirectory() && o2.isDirectory()) return 1;
            return o1.getName().compareTo(o2.getName());
        });
        FileJsonWrapper[] wrappers = new FileJsonWrapper[files.length];
        for (int i = 0; i < files.length; i++) {
            wrappers[i] = new FileJsonWrapper();
            wrappers[i].setFilename(files[i].getName());
            wrappers[i].setDirectory(files[i].isDirectory());
        }
        return wrappers;
    }
}
