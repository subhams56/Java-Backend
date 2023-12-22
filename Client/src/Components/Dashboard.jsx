import React from 'react';

const Dashboard = () => {
  const username = localStorage.getItem('username');
  const role = localStorage.getItem('role');
  const mobileNumber = localStorage.getItem('mobileNumber');
  const userId = localStorage.getItem('userId');
  const gender = localStorage.getItem('gender');

  return (
    <div className="bg-gray-100 rounded-md p-4 shadow-md text h-[220px] w-[250px]">
      <h1 className="text-2xl font-bold mb-2 text-gray-800 text-center mx-auto ">User Info</h1>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <p className="text-sm font-semibold mb-1 text-gray-600">Username:</p>
          <p className="text-gray-800">{username}</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1 text-gray-600">Role:</p>
          <p className="text-gray-800">{role}</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1 text-gray-600">Mobile Number:</p>
          <p className="text-gray-800">{mobileNumber}</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1 text-gray-600">User ID:</p>
          <p className="text-gray-800">{userId}</p>
        </div>
        <div>
          <p className="text-sm font-semibold mb-1 text-gray-600">Gender:</p>
          <p className="text-gray-800">{gender}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
