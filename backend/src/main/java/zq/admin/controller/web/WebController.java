package zq.admin.controller.web;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class WebController {
    @Value("/process-login")
    public String publicPath;
    @GetMapping({"/login", "/login/"})
    public ModelAndView redirectLogin() {
        ModelAndView modelAndView = new ModelAndView();
        modelAndView.addObject("login", publicPath);
        modelAndView.setViewName("login");
        return modelAndView;
    }

    @GetMapping({"/xterm", "/file", "/status", "/about", "/", ""})
    public String redirect() {
        return "forward:/index.html";
    }
}