// eslint-disable-next-line no-unused-vars
import React from 'react';

const PrepaidBalanceMngt = () => {
  // Example data for demonstration
  const customerBalances = [
    { name: 'John Doe', balance: 20, meterStatus: 'On' },
    { name: 'Jane Smith', balance: 5, meterStatus: 'Off' },
    // Add more customers as needed
  ];

  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Prepaid Balance Management</h1>
      </header>

      {/* Prepaid Balance Table */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Customer Prepaid Balances</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Customer Name</th>
              <th className="py-2 px-4 border-b">Prepaid Balance</th>
              <th className="py-2 px-4 border-b">Meter Status</th>
            </tr>
          </thead>
          <tbody>
            {customerBalances.map((customer, index) => (
              <tr key={index} className={customer.balance < 10 ? 'bg-red-100' : ''}>
                <td className="py-2 px-4 border-b">{customer.name}</td>
                <td className="py-2 px-4 border-b">${customer.balance.toFixed(2)}</td>
                <td className="py-2 px-4 border-b">{customer.meterStatus}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Notifications */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Notifications</h2>
        <div className="space-y-4">
          {customerBalances
            .filter(customer => customer.balance < 10)
            .map((customer, index) => (
              <div key={index} className="bg-yellow-100 border-l-4 border-yellow-500 p-3">
                <p className="font-semibold">{customer.name}</p>
                <p>Low balance alert: ${customer.balance.toFixed(2)}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PrepaidBalanceMngt;
