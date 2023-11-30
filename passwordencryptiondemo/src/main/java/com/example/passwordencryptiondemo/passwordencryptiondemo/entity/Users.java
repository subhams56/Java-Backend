package com.example.passwordencryptiondemo.passwordencryptiondemo.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Users {

    @Id
    private String username;
    private String pwd;


    @Override
    public String toString() {
        return "Users{" +
                "username='" + username + '\'' +
                ", pwd='" + pwd + '\'' +
                '}';
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPwd() {
        return pwd;
    }

    public void setPwd(String pwd) {
        this.pwd = pwd;
    }
}
