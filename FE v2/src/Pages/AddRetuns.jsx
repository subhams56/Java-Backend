import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import apiService from '../layers/Service';
import { Navbar2 } from '../Components/Navbar2';

const AddReturns = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState('');
  const [dateOfReturn, setDateOfReturn] = useState('');
  const [invoiceNo, setInvoiceNo] = useState('');
  const [billCheckedBy, setBillCheckedBy] = useState('');
  const [itemName, setItemName] = useState('');
  const [receiptNo, setReceiptNo] = useState('');
  const [receivedBy, setReceivedBy] = useState('');
  const [billValue, setBillValue] = useState('');
  const [dateOfDelivery, setDateOfDelivery] = useState('');

  const [quantityError, setQuantityError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Quantity validation
    if (quantity <= 0) {
      setQuantityError('Quantity must be more than 0.');
      return;
    } else {
      setQuantityError('');
    }

    const returnData = {
      quantity: Number(quantity),
      dateOfReturn,
      invoiceNo: Number(invoiceNo),
      billCheckedBy,
      itemName,
      receiptNo: Number(receiptNo),
      receivedBy,
      billValue,
      dateOfDelivery,
    };

    try {
      const response = await apiService.addReturn(returnData);

      console.log('API Response:', response.data);
      alert('Return added successfully!');
      navigate('/returns');
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log(error.response.data);
        alert(error.response.data);
      } else {
        console.log('API Request failed:', error.message);
      }
    }
  };

  return (
    <div>
      <Navbar2 />
      <h1 className="text-center font-bold">Add New Return</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-5">
        <div className="mb-4">
          <label htmlFor="quantity" className="block text-md font-bold mb-8">
            Quantity:
            <input
              type="number"
              id="quantity"
              className={`w-full border rounded py-2 px-3 mt-2 focus:outline-none focus:border-blue-500 ${
                quantityError ? 'border-red-500' : ''
              }`}
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Enter quantity"
              required
            />
          </label>
          {quantityError && <p className="text-red-500 text-xs italic">{quantityError}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="dateOfReturn" className="block text-sm font-bold mb-8">
            Date of Return:
            <input
              type="date"
              id="dateOfReturn"
              className="w-full border rounded mt-2 py-2 px-3 focus:outline-none focus:border-blue-500"
              value={dateOfReturn}
              onChange={(e) => setDateOfReturn(e.target.value)}
              placeholder="Select date of return"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="invoiceNo" className="block text-sm font-bold mb-8">
            Invoice No:
            <input
              type="number"
              id="invoiceNo"
              className="w-full border rounded mt-2 py-2 px-3 focus:outline-none focus:border-blue-500"
              value={invoiceNo}
              onChange={(e) => setInvoiceNo(e.target.value)}
              placeholder="Enter invoice no"
              required
            />
          </label>
        </div>

        <div className="mb-4">
          <label htmlFor="billCheckedBy" className="block text-sm font-bold mb-8">
            Bill Checked By:
            <input
              type="text"
              id="billCheckedBy"
              className="w-full border rounded mt-2 py-2 px-3 focus:outline-none focus:border-blue-500"
              value={billCheckedBy}
              onChange={(e) => setBillCheckedBy(e.target.value)}
              placeholder="Enter name"
              required
            />
          </label>
        </div>

        {/* Add similar fields for other properties in the returnData object */}

        <div>
          <button
            type="submit"
            className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded"
          >
            Add Return
          </button>
          <Link
            to="/returns"
            type="submit"
            className="bg-blue-400 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded ml-4"
          >
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddReturns;
