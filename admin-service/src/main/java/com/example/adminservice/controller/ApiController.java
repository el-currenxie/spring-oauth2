package com.example.adminservice.controller;


import com.example.adminservice.client.CoreServiceClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ApiController {
    @Autowired
    private CoreServiceClient coreServiceClient;

    @RequestMapping(value = "/accountinfo")
    public ResponseEntity<?> companyInfo(){
        List accounts = coreServiceClient.getAccounts();
        return new ResponseEntity<>(accounts, HttpStatus.OK);
    }
}