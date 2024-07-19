// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const PaymentTracking = () => {
  const [paymentAmount, setPaymentAmount] = useState('');
  const [remainingBalance, setRemainingBalance] = useState(200); // Example balance
  const [usage] = useState(150); // Example usage setUsage

  const handleInputChange = (e) => {
    setPaymentAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle payment submission
    console.log('Payment Amount Submitted:', paymentAmount);
    setRemainingBalance((prev) => prev + parseFloat(paymentAmount));
    setPaymentAmount('');
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Payment Tracking</h1>
      </header>

      {/* Payment Entry Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Record Prepaid Payment</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="paymentAmount" className="mb-2 font-semibold">Payment Amount</label>
            <input
              type="number"
              id="paymentAmount"
              value={paymentAmount}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter Payment Amount"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Payment
          </button>
        </form>
      </div>

      {/* Usage and Balance Display */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Account Overview</h2>
        <div className="mb-4">
          <p><strong>Usage:</strong> {usage} units</p>
          <p><strong>Remaining Balance:</strong> ${remainingBalance.toFixed(2)}</p>
        </div>
        <div>
          <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
            Send Balance Top-up Reminder
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentTracking;
