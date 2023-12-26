import React, { useState, useEffect } from 'react';
import apiService from '../layers/Service';

const updateEmployee = ({ match }) => {
  const { username } = match.params;
  const [employee, setEmployee] = useState({
    username: '',
    userId: '',
    role: '',
    mobileNumber: '',
    gender: '',
  });

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        const response = await apiService.getUserByUsername(username);
        setEmployee(response.data);
      } catch (error) {
        console.error('Error fetching employee data:', error.message);
      }
    };

    fetchEmployeeData();
  }, [username]);

  const handleUpdate = async () => {
    // Implement the logic to update the employee data
    // You can use the update service from the API
    // Example: await apiService.updateEmployeeByUsername(username, updatedEmployeeData);
  };

  // You can customize the form fields based on your employee data structure
  return (
    <div>
      <h1 className="text-center">Update Employee</h1>
      <form className="mx-auto mt-10">
        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={employee.username}
            className="border border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="userId" className="block text-sm font-medium text-gray-700">
            User ID
          </label>
          <input
            type="text"
            id="userId"
            name="userId"
            value={employee.userId}
            className="border border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">
            Role
          </label>
          <input
            type="text"
            id="role"
            name="role"
            value={employee.role}
            className="border border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700">
            Mobile Number
          </label>
          <input
            type="text"
            id="mobileNumber"
            name="mobileNumber"
            value={employee.mobileNumber}
            className="border border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
            Gender
          </label>
          <input
            type="text"
            id="gender"
            name="gender"
            value={employee.gender}
            className="border border-gray-300 p-2 w-full"
            readOnly
          />
        </div>
        <div>
          <button
            type="button"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            onClick={handleUpdate}
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default updateEmployee;
