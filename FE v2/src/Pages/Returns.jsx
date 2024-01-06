import React, { useState, useEffect } from 'react';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';
import { Link, useNavigate } from 'react-router-dom';

const Returns = () => {
  const [returns, setReturns] = useState([]);
  const navigate = useNavigate();
  const userRole = localStorage.getItem('role'); // Get role from localStorage

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiService.getReturns();
        console.log(response.data);
        setReturns(response.data);
      } catch (error) {
        console.error('Error fetching returns data:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <Navbar2 />
      <h1 className="text-center">Returns</h1>
      <table className="border-collapse border border-gray-800 mx-auto mt-10">
        <thead>
          <tr>
          <th className="border border-gray-800 p-2">Invoice No</th>
            <th className="border border-gray-800 p-2">Quantity</th>
            <th className="border border-gray-800 p-2">Date of Return</th>
            
            <th className="border border-gray-800 p-2">Bill Checked By</th>
            <th className="border border-gray-800 p-2">Item Name</th>
            <th className="border border-gray-800 p-2">Receipt No</th>
            <th className="border border-gray-800 p-2">Received By</th>
            <th className="border border-gray-800 p-2">Bill Value</th>
            <th className="border border-gray-800 p-2">Date of Delivery</th>
            {userRole === 'ADMIN' && (
              <th className="border border-gray-800 p-2">Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {returns.map((returnItem) => (
            <tr key={returnItem.invoiceNo}>
            <td className="border border-gray-800 p-2">{returnItem.invoiceNo}</td>
              <td className="border border-gray-800 p-2">{returnItem.quantity}</td>
              <td className="border border-gray-800 p-2">{returnItem.dateOfReturn}</td>
              
              <td className="border border-gray-800 p-2">{returnItem.billCheckedBy}</td>
              <td className="border border-gray-800 p-2">{returnItem.itemName}</td>
              <td className="border border-gray-800 p-2">{returnItem.receiptNo}</td>
              <td className="border border-gray-800 p-2">{returnItem.receivedBy}</td>
              <td className="border border-gray-800 p-2">{returnItem.billValue}</td>
              <td className="border border-gray-800 p-2">{returnItem.dateOfDelivery}</td>
              {userRole === 'ADMIN' && (
                <td className="border border-gray-800 p-2">
                  {/* Add action buttons for admins */}
                </td>
              )}
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
            to="/addReturn"
            className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 ml-4"
          >
            Add New Return
          </Link>
        )}
      </div>
    </div>
  );
};

export default Returns;
