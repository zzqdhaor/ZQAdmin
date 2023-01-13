package zq.admin.json.filemanager;

import com.fasterxml.jackson.annotation.JsonInclude;

@JsonInclude(JsonInclude.Include.NON_NULL)
public class JsonFileRequest {

    public String filePath;
    public String from;
    public String to;
}
