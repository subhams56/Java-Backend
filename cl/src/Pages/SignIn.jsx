

import React, { useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import apiService from '../layers/Service'; 

const SignIn = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username: username, 
      pwd: password,
    };

    try {
      const response = await apiService.signIn(userData);

      if (response.status === 200) {
        const result = response.data;
        console.log('API Response:', result);
        alert('Sign In Successful');
        navigate('/account');
      } else {
        console.error('API Request failed:', response.status, response.statusText);
        alert('Sign In Failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during fetch:', error.message);
      alert('Sign In Failed. Please try again.');
    }
  };

  return (
    <div>
      
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto justify-center text-center">
          <a href="#" className="text- font-bold text-xl">User Log In</a>
        </div>
      </nav>

      
      <div className="bg-blue-500 p-10 text-black text-center">
        <h1 className="text-4xl text-white font-bold mb-4">Sign In</h1>

        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-[50px]">
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm  text-white font-bold mb-2">Username:</label>
            <input
              type="username"
              id="username"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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
            <div> 
            
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-blackfont-bold py-2 px-4 rounded">
            Sign In
          </button>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Home
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignIn;
