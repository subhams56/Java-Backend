import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';

const UpdateEmployee = () => {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const[userEmail,setUserEmail]=useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getUserByUserId(userId);
        setUser(response.data);
        console.log('User data:', response.data);
        setUserEmail(response.data.email);
        
        
      } catch (error) {
        console.error('Error fetching user data:', error.message);
        alert('Error fetching user data');
      }
    };

    fetchData();
  }, [userId]);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      // Prepare the user data from the form fields
      const userData = {
        username: event.target.username.value,
        role: event.target.role.value,
        mobileNumber: event.target.mobileNumber.value,
        gender: event.target.gender.value,
        email:setUserEmail.email
       
        // Add more fields based on your form structure
      };

      // Use the updateUserByUsername service to send a request to update the user data
      const response = await apiService.updateUserById(userId, userData);
      console.log('Update response:', response.data);
      alert('User data updated successfully');

      // Redirect to /employees on successful form submission
      navigate('/employees');
    } catch (error) {
      console.error('Error updating user data:', error.message);
      alert('Error updating user data');
    }
  };

  const handleInputChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar2 />
      <div className="max-w-2xl mx-auto p-8 bg-white shadow-lg mt-8">
        <h1 className="text-2xl font-bold mb-4">Update Employee</h1>
        {user && (
          <form onSubmit={handleFormSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Username:</label>
              <input
                type="text"
                name="username"
                value={user.username}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">User ID:</label>
              <input
                type="text"
                name="userId"
                value={user.userId}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div> */}
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Role:</label>
              <input
                type="text"
                name="role"
                value={user.role}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Mobile Number:</label>
              <input
                type="text"
                name="mobileNumber"
                value={user.mobileNumber}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Gender:</label>
              <input
                type="text"
                name="gender"
                value={user.gender}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div>
            {/* <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password || ''}
                onChange={handleInputChange}
                className="w-full p-2 border rounded"
              />
            </div> */}
           
            <Link
              to="/employees"
              className="bg-blue-400 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Go Back
            </Link>
            <button
              type="submit"
              className="bg-blue-500 ml-[50px] text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Update User
            </button>
           
          </form>
        )}
      </div>
    </div>
  );
};

export default UpdateEmployee;