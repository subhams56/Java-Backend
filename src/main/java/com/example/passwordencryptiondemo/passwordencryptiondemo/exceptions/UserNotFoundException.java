package com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions;

public class UserNotFoundException extends RuntimeException
{
    public UserNotFoundException(String message)
    {
        super(message);
    }
}
