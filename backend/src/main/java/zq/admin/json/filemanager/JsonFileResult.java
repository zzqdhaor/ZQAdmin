package zq.admin.json.filemanager;

import com.fasterxml.jackson.annotation.JsonInclude;
import zq.admin.wrapper.FileJsonWrapper;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class JsonFileResult {

    public boolean success;
    public FileJsonWrapper[] files;

}
