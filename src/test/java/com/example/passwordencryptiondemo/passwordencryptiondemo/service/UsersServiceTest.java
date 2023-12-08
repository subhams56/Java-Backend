//package com.example.passwordencryptiondemo.passwordencryptiondemo.service;
//
//import com.example.passwordencryptiondemo.passwordencryptiondemo.entity.Users;
//import com.example.passwordencryptiondemo.passwordencryptiondemo.repositories.UsersRepository;
//import org.junit.jupiter.api.Test;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.MockitoJUnitRunner;
//
//import static org.junit.jupiter.api.Assertions.assertEquals;
//import static org.junit.jupiter.api.Assertions.assertNotNull;
//import static org.mockito.Mockito.*;
//
//
//public class UsersServiceTest {
//
//    @Mock
//    private UsersRepository usersRepository;
//
//    @InjectMocks
//    private UsersService usersService;
//
//
//    @Test
//    public void testCreateUser()
//    {
//        Users user = new Users();
//        user.setUserId(1);
//        user.setUsername("Akshay");
//        user.setPwd("1234");
//        user.setGender("Male");
//        user.setRole("ROLE_ADMIN");
//
//
//        when(usersRepository.save(user)).thenReturn(user);
//
//        // Users createdUser = new Users();
//        String createdUser = usersService.addUser(user);
//
//        verify(usersRepository, times(1)).save(user);
//
//        //assertNotNull(createdUser);
//        assertEquals(user.getUsername()+"added to databse Successfully", createdUser);
//    }
//
//}
