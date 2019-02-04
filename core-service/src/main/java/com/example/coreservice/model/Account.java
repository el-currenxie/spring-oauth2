package com.example.coreservice.model;


public class Account {

    private long id;
    private String accountName;

    public Account(long id, String accountName){
        this.id =  id;
        this.accountName = accountName;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getAccountName() {
        return accountName;
    }

    public void setAccountName(String accountName) {
        this.accountName = accountName;
    }

}