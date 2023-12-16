// Account.jsx

import React from 'react';
import { Navbar2 } from '../Components/Navbar2';
import { Link } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

const Account = ({ user }) => {
  return (
    <div className='bg-blue-200 h-screen'>
     
      <Navbar2 />

      
      <header className="bg-gray-800 text-white text-center py-4">
        <h1 className="text-3xl font-bold">Smart Inventory System</h1>
      </header>

      
      <div className="container mx-auto mt-2  p-4">
        <h1 className="text-4xl font-bold mb-4 mx-auto text-center py-2">Welcome, {user} to your Account</h1>
        <div className=' ml-[650px]'> <Dashboard/></div>
        

        
        <div className="flex flex-col space-y-10 mt-4">
          <Link to="/" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
            Home
          </Link>
          <Link to="/godowns" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
            Godowns
          </Link>
          <Link to="/employees" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
            Employees
          </Link>
          <Link to="/inwards" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
            Inwards
          </Link>
          <Link to="/outwards" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
            Outwards
          </Link>
          <Link to="/deliveries" className="bg-blue-500 text-white text-center px-4 py-2 rounded-md hover:bg-blue-600">
           Deliveries
          </Link>

          
        </div>
      </div>
    </div>
  );
};

export default Account;
