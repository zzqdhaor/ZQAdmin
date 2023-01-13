package zq.admin.jdbc;

@org.apache.ibatis.annotations.Mapper
public interface Mapper {
    int addUser(String username, String password);

    String selectPassword(String username);

    String tableExists();

    void createTable();
}
