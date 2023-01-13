package zq.admin.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import zq.admin.jdbc.Mapper;

@Service
public class AccountService {
    private Mapper mapper;

    @Autowired
    public void setMapper(Mapper mapper) {
        this.mapper = mapper;
    }

    @Transactional
    public void register(String username, String password) {
        mapper.addUser(username, password);
    }

}
