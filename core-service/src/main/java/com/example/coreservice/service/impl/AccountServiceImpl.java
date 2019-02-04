package com.example.coreservice.service.impl;

import com.example.coreservice.model.Account;
import com.example.coreservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;


@Service(value = "accountService")
public class AccountServiceImpl implements AccountService {

    List<Account> accounts = Arrays.asList(
            new Account(1, "abc"),
            new Account(2, "abc"),
            new Account(3, "abc")
    );


    public List<Account> findAll() {
        return accounts;
    }

    @Override
    public void delete(long id) {
//        userDao.delete(id);
    }

    @Override
    public Account save(Account account) {
//        return userDao.save(user);
        return null;
    }
}