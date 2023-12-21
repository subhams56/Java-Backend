import React, { useState, useEffect } from 'react';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';
import { Link } from 'react-router-dom';

const Godowns = () => {
  const [godowns, setGodowns] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getGodowns();
        setGodowns(response.data);
        
      } catch (error) {
        console.error('Error fetching godown data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleDeleteGodown = async (godownId) => {
    try {
      await apiService.deleteGodownById(godownId);
      const response = await apiService.getGodowns();
      alert("Godown Deleted Successfully");
      setGodowns(response.data);
    } catch (error) {
      console.error('Error deleting godown:', error.message);
    }
  };

  return (
    <div>
      <Navbar2 />
      <h1 className="text-center">Godowns</h1>
      <table className="border-collapse border border-gray-800 mx-auto mt-10">
        <thead>
          <tr>
            <th className="border border-gray-800 p-2">ID</th>
            <th className="border border-gray-800 p-2">Location</th>
            <th className="border border-gray-800 p-2">Capacity (Quintals)</th>
            <th className="border border-gray-800 p-2">Start Date</th>
            <th className="border border-gray-800 p-2">Godown Manager</th>
            <th className="border border-gray-800 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {godowns.map((godown) => (
            <tr key={godown.id}>
              <td className="border border-gray-800 p-2">{godown.id}</td>
              <td className="border border-gray-800 p-2">{godown.location}</td>
              <td className="border border-gray-800 p-2">{godown.capacityInQuintals}</td>
              <td className="border border-gray-800 p-2">{godown.startDate.join('/')}</td>
              <td className="border border-gray-800 p-2">{godown.users && godown.users.username}</td>
              <td className="border border-gray-800 p-2">
                <button className="bg-red-400 rounded-full px-3 py-1" onClick={() => handleDeleteGodown(godown.id)}>
                  Delete
                </button>
                {/* Add an update button and its functionality if needed */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Link to="/adminAccount" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Account
        </Link>
        <Link to="/addGodown" className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-4">
          Add New Godown
        </Link>
      </div>
    </div>
  );
};

export default Godowns;
