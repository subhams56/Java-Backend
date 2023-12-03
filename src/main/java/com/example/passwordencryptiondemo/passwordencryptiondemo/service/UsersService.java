package com.example.passwordencryptiondemo.passwordencryptiondemo.service;

import com.example.passwordencryptiondemo.passwordencryptiondemo.entity.Users;
import com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions.UserCreationException;
import com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions.UserIdNotFoundException;
import com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions.UserNotFoundException;
import com.example.passwordencryptiondemo.passwordencryptiondemo.repositories.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
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
        if(savedUser!= null)
            return savedUser.getUsername()+"added to databse Successfully";
        else
            throw new UserCreationException("There is Some Problem Creating the User");

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

    public String updateUser(Users user, int userId) {
        if(usersRepository.existsById(user.getUsername()))
        {
            Users userDB = usersRepository.save(user);
            if(userDB != null)
            {
                return "Updated User Successfully";
            }
            else {
                throw new UserNotFoundException("Error Updating User");
            }
        }
        throw new UserIdNotFoundException("No Records found for user with id: "+userId);
    }

    public List<Users> fetchUsers() {
        return usersRepository.findAll();
    }

//    public Users fetchUserById(int userId) {
//        Optional<Users> op = usersRepository.findById()
//    }

    public Users fetchUserByName(String username) {
        Optional<Users> op = usersRepository.findById(username);
        if(op.isPresent())
            return op.get();
        else
            throw new UserNotFoundException("No Record found for the user: " +username);
    }

    public String deleteuser(String username) {
        if(usersRepository.existsById(username))
        {
            usersRepository.deleteById(username);
            return "user Successfully Deleted";
        }
        else
            throw new UserIdNotFoundException("No Record found for user: "+username);
    }
}
