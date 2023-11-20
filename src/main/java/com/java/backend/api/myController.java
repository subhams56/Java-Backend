package com.java.backend.api;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class myController {
    @RequestMapping("/")
    public String Hello(){
        return "Hello From Intelli J Idea API";

    }

}
