
import React, { useState } from 'react';
import apiService from '../layers/Service'; 
import { useNavigate, Link } from 'react-router-dom';
import { Navbar } from '../Components/Navbar';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [userId, setUserId] = useState('');
  const [role, setRole] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [gender, setGender] = useState('');
  const [email,setEmail]= useState('');

  const handleSignUp = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      pwd: password,
      role,
      mobileNumber,
      gender,
      email
    };

    try {
      const response = await apiService.signUp(userData);

     
      console.log('API Response:', response.data);
      alert(` Registration Successfull , Kindly Sign In`); 
      navigate('/signin');


    } catch (error) {
      
      console.error('API Request failed:', error.message);
      alert('Error: Something went wrong!'); 
    }
  };

  return (
    <>
    <Navbar/>
    <div>
     
        
      

      <div className="bg-blue-400 p-10 text-black text-center">
        <h1 className="text-4xl font-bold mb-4">Register Now !</h1>

        <form onSubmit={handleSignUp} className="max-w-md mx-auto mt-[50px]">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">Username:</label>
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
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-[40px]">Role:</label>
            <input
              type="text"
              id="role"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-[40px]">Mobile:</label>
            <input
              type="number"
              id="mobile"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-[40px]">Gender:</label>
            <input
              type="text"
              id="gender"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-bold mb-2 mt-[40px]">Email:</label>
            <input
              type="email"
              id="email"
              className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
              Sign Up
            </button>
            <Link to="/" className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
              Home
            </Link>
          </div>
        </form>
      </div>
    </div>
    </>
  );
};

export default SignUp;

