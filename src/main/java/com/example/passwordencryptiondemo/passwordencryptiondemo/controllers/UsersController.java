package com.example.passwordencryptiondemo.passwordencryptiondemo.controllers;

import com.example.passwordencryptiondemo.passwordencryptiondemo.entity.Users;
import com.example.passwordencryptiondemo.passwordencryptiondemo.service.UsersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UsersController {

    @Autowired
    UsersService usersService;

    @PostMapping("users")
    public String addUser(@RequestBody Users user)
    {

        return usersService.addUser(user);
    }

    @PostMapping("/authenticateUsers")
    public String authenticateUser(@RequestBody Users user)
    {
        return usersService.authenticateUser(user);
    }
}

