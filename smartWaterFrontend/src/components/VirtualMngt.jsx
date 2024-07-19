// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const VirtualMngt = () => {
  const [meters, setMeters] = useState([
    { id: 'M001', customer: 'John Doe', status: 'Active' },
    { id: 'M002', customer: 'Jane Smith', status: 'Inactive' },
  ]);
  const [newMeterId, setNewMeterId] = useState('');
  const [newCustomer, setNewCustomer] = useState('');

  const handleAddMeter = () => {
    setMeters([...meters, { id: newMeterId, customer: newCustomer, status: 'Active' }]);
    setNewMeterId('');
    setNewCustomer('');
  };

  const handleDeleteMeter = (id) => {
    setMeters(meters.filter(meter => meter.id !== id));
  };

  const getStatusBadgeClass = (status) => {
    return status === 'Active' ? 'bg-green-500' : 'bg-red-500';
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Virtual Meter Management</h1>
      </header>

      {/* Add New Meter Form */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Add New Meter</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleAddMeter(); }}>
          <div className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="meterId" className="mb-2 font-semibold">Meter ID</label>
              <input
                type="text"
                id="meterId"
                value={newMeterId}
                onChange={(e) => setNewMeterId(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Meter ID"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="customer" className="mb-2 font-semibold">Customer</label>
              <input
                type="text"
                id="customer"
                value={newCustomer}
                onChange={(e) => setNewCustomer(e.target.value)}
                className="border border-gray-300 p-2 rounded"
                placeholder="Enter Customer Name"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add Meter
            </button>
          </div>
        </form>
      </div>

      {/* Meter List */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Meter List</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Meter ID</th>
              <th className="py-2 px-4 border-b">Customer</th>
              <th className="py-2 px-4 border-b">Status</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {meters.map((meter) => (
              <tr key={meter.id}>
                <td className="py-2 px-4 border-b">{meter.id}</td>
                <td className="py-2 px-4 border-b">{meter.customer}</td>
                <td className="py-2 px-4 border-b">
                  <span className={`px-2 py-1 rounded text-white ${getStatusBadgeClass(meter.status)}`}>
                    {meter.status}
                  </span>
                </td>
                <td className="py-2 px-4 border-b flex space-x-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600">
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteMeter(meter.id)}
                    className="bg-red-900 text-white px-3 py-1 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VirtualMngt;
