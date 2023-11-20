package com.java.backend.api.repositories;

import com.java.backend.api.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User , Integer> {
    User findByEmail(String email);
    User findByUsername(String username);
}
