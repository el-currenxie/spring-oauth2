package com.example.coreservice.controller;

import com.example.coreservice.model.Account;
import com.example.coreservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @RequestMapping(value="/account", method = RequestMethod.GET)
    public List listUser(){
        return accountService.findAll();
    }

    @RequestMapping(value = "/account", method = RequestMethod.POST)
    public Account create(@RequestBody Account account){
        return accountService.save(account);
    }

    @RequestMapping(value = "/account/{id}", method = RequestMethod.DELETE)
    public String delete(@PathVariable(value = "id") Long id){
        accountService.delete(id);
        return "success";
    }

}