package zq.admin;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import zq.admin.jdbc.Mapper;

@SpringBootApplication
public class ZQAdminApplication {

    public static ApplicationContext context;

    public static void main(String[] args) {
        context = SpringApplication.run(ZQAdminApplication.class, args);
        Mapper mapper = (Mapper) context.getBean("mapper");
        if (mapper.tableExists().equals("NULL")) mapper.createTable();
    }

}
