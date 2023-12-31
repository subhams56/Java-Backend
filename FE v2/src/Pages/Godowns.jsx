import React, { useState, useEffect } from 'react';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';
import { Link, useNavigate } from 'react-router-dom';


const Godowns = () => {
  const [godowns, setGodowns] = useState([]);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role'); // Get role from localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getGodowns();
        console.log(response.data);
        setGodowns(response.data);
      } catch (error) {
        console.error('Error fetching godown data:', error.message);
      }
    };

    fetchData();
  }, []);

  const handleToggleStatus = (godownId) => {
    // Add logic to toggle godown status (UI only, no API logic for now)
    setGodowns((prevGodowns) =>
      prevGodowns.map((godown) =>
        godown.godownId === godownId
          ? { ...godown, status: godown.status === 'Active' ? 'Inactive' : 'Active' }
          : godown
      )
    );
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
            {userRole === 'ADMIN' && (
              <th className="border border-gray-800 p-2">Actions</th>
            )}
            <th className="border border-gray-800 p-2">Godown Status</th>
          </tr>
        </thead>
        <tbody>
          {godowns.map((godown) => (
            <tr key={godown.godownId}>
              <td className="border border-gray-800 p-2">{godown.godownId}</td>
              <td className="border border-gray-800 p-2">{godown.location}</td>
              <td className="border border-gray-800 p-2">{godown.capacityInQuintals}</td>
              <td className="border border-gray-800 p-2">{godown.startDate.join('/')}</td>
              <td className="border border-gray-800 p-2">{godown.users && godown.users.username}</td>
              {userRole === 'ADMIN' && (
                <td className="border border-gray-800 p-2">
                  <button
                    className="bg-blue-500 rounded-full px-3 py-1 ml-2"
                    onClick={() => handleUpdateGodown(godown.godownId)}
                  >
                    Update
                  </button>
                </td>
              )}
              <td className="border border-gray-800 p-2">
                <button
                  className={`${godown.status === 'Active' ? 'active' : ''}`}
                  onClick={() => handleToggleStatus(godown.godownId)}
                >
                  {godown.status === 'Active' ? 'Active' : 'Inactive'}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4">
        <Link
          to="/Account"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Go Back
        </Link>
        {userRole === 'ADMIN' && (
          <Link
            to="/addGodown"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-4"
          >
            Add New Godown
          </Link>
        )}
      </div>
    </div>
  );
};

export default Godowns;
