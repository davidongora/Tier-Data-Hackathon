// eslint-disable-next-line no-unused-vars
import React from 'react';

const CustomerMngt = () => {
  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Customer Management</h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
          Add Customer
        </button>
      </header>

      {/* Customer List */}
      {/* bg-white shadow-md */}
      <div className=" rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Customer ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Email</th>
              <th className="py-2 px-4 border-b">Phone</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row - Replace with dynamic data */}
            <tr>
              <td className="py-2 px-4 border-b">CUST001</td>
              <td className="py-2 px-4 border-b">John Doe</td>
              <td className="py-2 px-4 border-b">john.doe@example.com</td>
              <td className="py-2 px-4 border-b">555-1234</td>
              <td className="py-2 px-4 border-b">
                <button className="text-blue-500 hover:underline">Edit</button>
                <button className="text-red-500 hover:underline ml-4">Delete</button>
              </td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Customer Details - Placeholder */}
      {/*  shadow-md */}
      <div className="bg-white rounded-lg p-4 mt-6">
        <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
        <div>
          <p><strong>Customer ID:</strong> CUST001</p>
          <p><strong>Name:</strong> John Doe</p>
          <p><strong>Email:</strong> john.doe@example.com</p>
          <p><strong>Phone:</strong> 555-1234</p>
          <p><strong>Status:</strong> Active</p>
          <p><strong>Meters:</strong> Meter1, Meter2</p>
        </div>
        <h3 className="text-lg font-semibold mt-16">Payment History</h3>
        <table className="w-full mt-2">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Date</th>
              <th className="py-2 px-4 border-b">Amount</th>
              <th className="py-2 px-4 border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row - Replace with dynamic data */}
            <tr>
              <td className="py-2 px-4 border-b">2024-07-01</td>
              <td className="py-2 px-4 border-b">$100.00</td>
              <td className="py-2 px-4 border-b">Completed</td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerMngt;
