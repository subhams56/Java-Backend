package com.example.passwordencryptiondemo.passwordencryptiondemo.exceptions;

import org.springframework.web.bind.annotation.ExceptionHandler;

public class GlobalExceptionHandler {
    @ExceptionHandler(UserNotFoundException.class)
            public String exceptionHandler(UserNotFoundException unfe)
    {
        return "UserNotFoundException:"+unfe.getMessage();
    }
}
