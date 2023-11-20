import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userRole, setUserRole] = useState('');
  const [userData, setUserData] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      email,
      password,
      userRole,
    };

    const url ;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Response', result);
        setUserData(result); 
      } else {
        console.log('Something Went Wrong');
      }
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  return (
    <div>
      
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto justify-center text-center">
          <a href="#" className="text-white font-bold text-xl">User Registration</a>
        </div>
      </nav>

      
      <div className="bg-blue-500 p-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Sign Up</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-[50px]">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-bold mb-2">Username:</label>
            <input
              type="text"
              id="username"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-[40px]">Password:</label>
            <input
              type="password"
              id="password"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="userRole" className="block text-sm font-bold mb-2 mt-[40px]">User Role:</label>
            <input
              type="text"
              id="userRole"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={userRole}
              onChange={(e) => setUserRole(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up
          </button>

          
          {userData && (
            <div className="mt-4">
              <p>User ID: {userData.userId}</p>
              <p>Username: {userData.username}</p>
              <p>Email: {userData.email}</p>
              <p>User Role: {userData.userRole}</p>
            </div>
          )}

          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Home
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
