import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Account = () => {
  const [userData, setUserData] = useState(null);
  

  
  useEffect(() => {
    
    
    
  , []);

 

  return (
    <div>
     
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto justify-center text-center">
          <a href="#" className="text-white font-bold text-xl">User Account</a>
          <Link
          to="/"
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-[20px] ml-[20px]"
        >
          Logout
        </Link>
        </div>
       
      </nav>

      
      <div className="bg-blue-500 p-10 text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome User</h1>

       
        {userData && (
          <div className="max-w-md mx-auto">
            <p className="text-lg">
              <span className="font-bold">User ID:</span> {userData.userId}
            </p>
            <p className="text-lg">
              <span className="font-bold">Username:</span> {userData.username}
            </p>
            <p className="text-lg">
              <span className="font-bold">Email:</span> {userData.email}
            </p>
            <p className="text-lg">
              <span className="font-bold">User Role:</span> {userData.userRole}
            </p>
          </div>
        )}

        
       
      </div>
      
    </div>
  );
};

export default Account;
