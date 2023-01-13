package zq.admin.controller.api;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import zq.admin.json.filemanager.JsonFileRequest;
import zq.admin.json.filemanager.JsonFileResult;
import zq.admin.json.universial.BinaryJsonResult;
import zq.admin.service.FileManagerService;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/api/file")
public class FileManagerController {

    private FileManagerService service;

    @Autowired
    public void setService(FileManagerService service) {
        this.service = service;
    }

    @GetMapping("/mkdir")
    public BinaryJsonResult mkdir(String to, String name) {
        return service.mkdir(to, name);
    }

    @PostMapping("/upload")
    public void upload(MultipartFile file, String to) throws IOException {
        File localFile = new File(to + (file.getOriginalFilename() != null ? file.getOriginalFilename() : "file"));
        service.upload(file, localFile);
    }

    @RequestMapping("/list")
    public JsonFileResult list(@RequestBody JsonFileRequest request) {
        return service.list(request.filePath);
    }

    @PostMapping("/delete")
    public BinaryJsonResult delete(@RequestBody JsonFileRequest request) {
        return service.delete(request.filePath);
    }

    @PostMapping("/cut")
    public BinaryJsonResult cut(@RequestBody JsonFileRequest request) {
        return service.cut(request.from, request.to);
    }

    @PostMapping("/copy")
    public BinaryJsonResult copy(@RequestBody JsonFileRequest request) {
        return service.copy(request.from, request.to);
    }

    @PostMapping("/rename")
    public BinaryJsonResult rename(@RequestBody JsonFileRequest request) {
        return service.rename(request.from, request.to);
    }

    @GetMapping("/get-file")
    public void getFile(HttpServletRequest request, HttpServletResponse response) {
        service.getFile(request, response);
    }

}
