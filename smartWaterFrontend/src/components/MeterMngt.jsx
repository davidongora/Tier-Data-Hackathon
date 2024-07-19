// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const MeterMngt = () => {
  const [manualReading, setManualReading] = useState('');

  const handleInputChange = (e) => {
    setManualReading(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Manual Reading Submitted:', manualReading);
  };

  return (
    <div className="p-6">
      {/* Page Header */}
      <header className="mb-6 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Meter Management</h1>
      </header>

      {/* Virtual Meter Readings Table */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h2 className="text-xl font-semibold mb-4">Virtual Meter Readings</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4 border-b">Meter ID</th>
              <th className="py-2 px-4 border-b">Current Reading</th>
              <th className="py-2 px-4 border-b">Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {/* Example Row - Replace with dynamic data */}
            <tr>
              <td className="py-2 px-4 border-b">Meter001</td>
              <td className="py-2 px-4 border-b">12345</td>
              <td className="py-2 px-4 border-b">2024-07-19 10:00</td>
            </tr>
            {/* Repeat rows as needed */}
          </tbody>
        </table>
      </div>

      {/* Manual Reading Entry Form */}
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-xl font-semibold mb-4">Manual Reading Entry</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="meterId" className="mb-2 font-semibold">Meter ID</label>
            <input
              type="text"
              id="meterId"
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter Meter ID"
              required
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="reading" className="mb-2 font-semibold">Reading</label>
            <input
              type="number"
              id="reading"
              value={manualReading}
              onChange={handleInputChange}
              className="border border-gray-300 p-2 rounded"
              placeholder="Enter Reading"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Submit Reading
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeterMngt;
