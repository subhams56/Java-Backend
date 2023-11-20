

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SignIn = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const userData = {
      email,
      password,
    };

    
    const url;

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
        
      } else {
        
        console.log('SOmething Went Wrong');
      }
    } catch (error) {
      console.error('Error', error.message);
    }
  };

  return (
    <div>
      
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto justify-center text-center">
          <a href="#" className="text-white font-bold text-xl">User Log In</a>
        </div>
      </nav>

      
      <div className="bg-blue-500 p-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Sign In</h1>

        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-[50px]">
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
            <div> 
            
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign In
          </button>
          <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Home
          </Link>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default SignIn;
