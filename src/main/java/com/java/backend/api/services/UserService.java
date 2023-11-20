package com.java.backend.api.services;

import com.java.backend.api.models.User;
import com.java.backend.api.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public List<User> fetchAllUsers(){
        return userRepository.findAll();

    }

    public User fetchUserByName( String username) {
        User existing = userRepository.findByUsername(username);

        if (existing == null) {
            throw new RuntimeException("User not found");
        }

        return existing;

    }


    public ResponseEntity<String> addUser( User user){
        User existing = userRepository.findByEmail(user.getEmail());

        if(existing!=null){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User with this Email Already Exists");
        }
        User newUser = userRepository.save(user);

        return ResponseEntity.status(HttpStatus.CREATED).body("User added successfully");
    }

   public ResponseEntity<String> loginUser(String email , String password){
        String userEmail = email;
        String userPassword = password;
        User existing = userRepository.findByEmail(userEmail);

        if(existing!=null && existing.getPassword().equals(userPassword)){
            return ResponseEntity.ok().body("Logged in Successfully.");
        }else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Wrong credentials. Please try again.");
        }


   }

   public ResponseEntity<String> deleteUser(String username){
        String name = username;
        User existing = userRepository.findByUsername(name);

        if(existing==null){
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not Found");
        }
        userRepository.deleteById(existing.getUserId());

        return ResponseEntity.ok().body("User Deleted Successfully");

   }
}


