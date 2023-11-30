package com.example.passwordencryptiondemo.passwordencryptiondemo.repositories;

import com.example.passwordencryptiondemo.passwordencryptiondemo.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsersRepository extends JpaRepository <Users, String> {
}
