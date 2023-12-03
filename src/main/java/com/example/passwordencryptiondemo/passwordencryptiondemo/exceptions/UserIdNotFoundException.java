package com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions;

public class UserIdNotFoundException extends RuntimeException{

    public UserIdNotFoundException(String message)
    {
        super(message);
    }

}
