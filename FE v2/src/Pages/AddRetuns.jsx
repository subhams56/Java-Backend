import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';

const AddReturns = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [godownId, setGodownId] = useState('');
  const [outwardsId, setOutwardsId] = useState('');
  const [billCheckedBy, setBillCheckedBy] = useState('');
  const [billValue, setBillValue] = useState('');
  const [dateOfDelivery, setDateOfDelivery] = useState('');
  const [receiptNo, setReceiptNo] = useState('');
  const [receivedBy, setReceivedBy] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');
  const [itemName, setItemName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const returnsData = {
      quantity: Number(quantity),
      godowns: {
        godownId: Number(godownId),
      },
      outwards: {
        outwardsId: Number(outwardsId),
      },
      billCheckedBy,
      billValue,
      dateOfDelivery,
      receiptNo: Number(receiptNo),
      receivedBy,
      dateOfReturn,
      itemName,
    };

    try {
      const response = await apiService.addReturn(returnsData);

      // On successful response
      console.log('API Response:', response.data);
      alert('Returns added successfully!');
      navigate('/returns');

    } catch (error) {
      // On failed response
      console.error('API Request failed:', error.message);
      alert('Error: Something went wrong while adding the returns.');
    }
  };

  return (
    <div>
      <Navbar2 />
      <h1 className="text-center">Add New Returns</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5">
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-sm font-bold mb-2">Quantity:</label>
          <input
            type="number"
            id="quantity"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="godownId" className="block text-sm font-bold mb-2">Godown ID:</label>
          <input
            type="number"
            id="godownId"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={godownId}
            onChange={(e) => setGodownId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="outwardsId" className="block text-sm font-bold mb-2">Outwards ID:</label>
          <input
            type="number"
            id="outwardsId"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={outwardsId}
            onChange={(e) => setOutwardsId(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="billCheckedBy" className="block text-sm font-bold mb-2">Bill Checked By:</label>
          <input
            type="text"
            id="billCheckedBy"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={billCheckedBy}
            onChange={(e) => setBillCheckedBy(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="billValue" className="block text-sm font-bold mb-2">Bill Value:</label>
          <input
            type="text"
            id="billValue"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={billValue}
            onChange={(e) => setBillValue(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfDelivery" className="block text-sm font-bold mb-2">Date of Delivery:</label>
          <input
            type="text"
            id="dateOfDelivery"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={dateOfDelivery}
            onChange={(e) => setDateOfDelivery(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="receiptNo" className="block text-sm font-bold mb-2">Receipt No:</label>
          <input
            type="number"
            id="receiptNo"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={receiptNo}
            onChange={(e) => setReceiptNo(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="receivedBy" className="block text-sm font-bold mb-2">Received By:</label>
          <input
            type="text"
            id="receivedBy"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={receivedBy}
            onChange={(e) => setReceivedBy(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfReturn" className="block text-sm font-bold mb-2">Date of Return:</label>
          <input
            type="text"
            id="dateOfReturn"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={dateOfReturn}
            onChange={(e) => setDateOfReturn(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="itemName" className="block text-sm font-bold mb-2">Item Name:</label>
          <input
            type="text"
            id="itemName"
            className="w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            required
          />
        </div>

        <div>
          <button type="submit" className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded">
            Add Returns
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddReturns;
