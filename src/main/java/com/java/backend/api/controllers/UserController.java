package com.java.backend.api.controllers;

import com.java.backend.api.models.User;
import com.java.backend.api.services.UserService;
import org.apache.coyote.Response;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController

public class UserController {

    @Autowired
    UserService userService;

    @GetMapping("/users")  //View All Users
    public List<User> findAllUsers(){
        return userService.fetchAllUsers();
    }

    @GetMapping("/users/{username}")
    public User getUserByName(@PathVariable String username){
        return userService.fetchUserByName(username);
    }

    @PostMapping("/addUser")
    public ResponseEntity<String> addUser(@RequestBody User user){
        return userService.addUser(user);
    }

    @PostMapping("/loginUser")
    public ResponseEntity<String> loginUser(@RequestBody Map<String , String> loginRequest) {
        String email = loginRequest.get("email");
        String password = loginRequest.get("password");



        return userService.loginUser(email, password);
    }

    @DeleteMapping("/users/{username}")
    public ResponseEntity<String> deleteUser(@PathVariable String username){
        return userService.deleteUser(username);

    }



}
