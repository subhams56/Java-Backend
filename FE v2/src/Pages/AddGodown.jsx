import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';

const AddGodown = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState('');
  const [capacityInQuintals, setCapacityInQuintals] = useState('');
  const [startDate, setStartDate] = useState('');
  const [userId, setUserId] = useState('');
  const [username, setUsername] = useState('');
  const [userSuggestions, setUserSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [uId, setUId] = useState(null);

  useEffect(() => {
    const fetchUserSuggestions = async () => {
      try {
        const response = await apiService.getUserByUsername(username);
        setUserSuggestions(response.data); 
      } catch (error) {
        console.error('API Request failed:', error.message);
      }
    };

    if (username.length >= 2) {
      fetchUserSuggestions();
    } else {
      setUserSuggestions([]);
    }
  }, [username]);

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
    setShowSuggestions(true);
  };

  const handleUsernameSelection = async (selectedUsername) => {
    try {
      const response = await apiService.getUserByUsername(selectedUsername);
      const selectedUserData = response.data[0];
      
      console.log('Selected User Data:', selectedUserData.userId);
      setSelectedUser(selectedUserData);
      setUId(selectedUserData.userId);
    } catch (error) {
      console.error('API Request failed:', error.message);
    }

    setUsername(selectedUsername);
    setShowSuggestions(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const godownData = {
      location,
      capacityInQuintals: Number(capacityInQuintals),
      startDate,
      users: {
        userId: Number(uId),
        
      },
    };

    try {
      const response = await apiService.addGodown(godownData);

      
      console.log('API Response:', response.data);
      alert('Godown added successfully!');
      navigate('/godowns');
    } catch (error) {
      
      console.error('API Request failed:', error.message);
      alert('Error: Something went wrong while adding the godown.');
    }
  };

  return (
    <div>
      <Navbar2 />
      <h1 className="text-center">Add New Godown</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5">
        <div className="mb-4">
          <label htmlFor="location" className="block text-sm font-bold mb-2">Location:</label>
          <input
            type="text"
            id="location"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="capacityInQuintals" className="block text-sm font-bold mb-2">Capacity in Quintals:</label>
          <input
            type="number"
            id="capacityInQuintals"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={capacityInQuintals}
            onChange={(e) => setCapacityInQuintals(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="startDate" className="block text-sm font-bold mb-2">Start Date:</label>
          <input
            type="date"
            id="startDate"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-bold mb-2">Username:</label>
          <input
            type="text"
            id="username"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={username}
            onChange={handleUsernameChange}
            required
          />
          {showSuggestions && (
            <ul className="suggestions-list">
              {userSuggestions.map((user) => (
                <li key={user.userId} onClick={() => handleUsernameSelection(user.username)}>
                  {user.username}
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Add Godown
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddGodown;
