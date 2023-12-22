import React from 'react';
import { Navbar2 } from '../Components/Navbar2';

const Outwards = () => {
  return (
    <>
    <Navbar2/>
    <header className="bg-gray-800 text-white text-center py-4">
          <h1 className="text-3xl font-bold">Outwards Management</h1>
        </header>
    <div className="bg-blue-200 h-screen flex items-center justify-center">
    
      <div className="w-1/3 p-4">
       

        <div className="mt-[-300px] space-y-8">
          
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Add New a Outward Stock
          </button>

          
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View Outward By ID
          </button>

          
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            View All Outwards
          </button>

          
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Update Existing Outward
          </button>

          
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Delete Outwards
          </button>
          <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
           Account
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Outwards;
