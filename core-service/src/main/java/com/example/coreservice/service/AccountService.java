package com.example.coreservice.service;

import com.example.coreservice.model.Account;

import java.util.List;

public interface AccountService {

    Account save(Account account);
    List<Account> findAll();
    void delete(long id);

}
