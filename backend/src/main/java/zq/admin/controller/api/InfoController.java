package zq.admin.controller.api;

import com.sun.management.OperatingSystemMXBean;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zq.admin.json.info.JsonInfoResult;

import java.io.File;
import java.lang.management.ManagementFactory;

@RestController
public class InfoController {

    @RequestMapping("/api/info")
    public JsonInfoResult systemInfo() {
        JsonInfoResult result = new JsonInfoResult();
        File file = new File("/");
        result.totalDisk = (double) file.getTotalSpace() / 1024 / 1024;
        result.availableDisk = (double) file.getFreeSpace() / 1024 / 1024;
        var bean = (OperatingSystemMXBean) ManagementFactory.getOperatingSystemMXBean();
        result.totalMem = (double) bean.getTotalMemorySize() / 1024 / 1024;
        result.availableMem = (double) bean.getFreeMemorySize() / 1024 / 1024;
        return result;
    }
}
