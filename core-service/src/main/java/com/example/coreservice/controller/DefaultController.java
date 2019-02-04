package com.example.coreservice.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class DefaultController {

    @RequestMapping({"/","index"})
    public String index() {
        return "index";
    }

    @RequestMapping("/private")
    public String privatePage() {
        return "private";
    }
    @RequestMapping("/public")
    public String loginpub() {
        return "public";
    }
    @RequestMapping("/admin")
    public String admin() {
        return "admin";
    }
    @RequestMapping("/login")
    public String login() {
        return "login";
    }
}