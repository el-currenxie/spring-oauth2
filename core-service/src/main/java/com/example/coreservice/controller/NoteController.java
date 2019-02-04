package com.example.coreservice.controller;

import com.example.coreservice.model.Account;
import com.example.coreservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/notes")
public class NoteController {

    @RequestMapping(value="/note", method = RequestMethod.GET)
    public List listUser(){
        return Arrays.asList("A", "B", "C");
    }

}