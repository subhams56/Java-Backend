package com.example.passwordencryptiondemo.passwordencryptiondemo.service;

import com.example.passwordencryptiondemo.passwordencryptiondemo.entity.Users;
import com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions.UserNotFoundException;
import com.example.passwordencryptiondemo.passwordencryptiondemo.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UsersService {

    @Autowired
    UsersRepository usersRepository;

    public String addUser(Users user) {
        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();
        String encryptedPwd = bcrypt.encode(user.getPwd());
        user.setPwd(encryptedPwd);
        Users savedUser = usersRepository.save(user);
        return savedUser.getUsername()+"added to databse Successfully";

    }

    public String authenticateUser(Users user) {

        BCryptPasswordEncoder bcrypt = new BCryptPasswordEncoder();

        Optional<Users> opUser = usersRepository.findById(user.getUsername());
        if (opUser.isPresent()) {
            Users dbUser = opUser.get();
            if(bcrypt.matches(user.getPwd(),dbUser.getPwd()))
            {
                return "Authenticated User";
            } else {
                return "Incorrect Password";
            }
        } else
            throw new UserNotFoundException("No User is found for this username");
    }
}
