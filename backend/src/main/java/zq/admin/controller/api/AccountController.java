package zq.admin.controller.api;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import zq.admin.json.universial.BinaryJsonResult;
import zq.admin.service.AccountService;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    private AccountService service;

    @Autowired
    public void setService(AccountService service) {
        this.service = service;
    }

    @PostMapping("/register")
    public BinaryJsonResult register(String username, String password) {
        service.register(username, password);
        return new BinaryJsonResult(true);
    }

}
