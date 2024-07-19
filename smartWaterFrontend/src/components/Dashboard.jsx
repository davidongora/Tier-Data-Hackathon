/* eslint-disable no-unused-vars */
import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex flex-col p-4 bg-gray-100 min-h-screen my-3">
      {/* <header className="flex items-center justify-between bg-gray-800 text-white p-4 mb-4">
        <img src="logo.png" alt="logo" className="w-20 h-20" />
        <div className="flex items-center">
          <img src="userimage.png" alt="user" className="w-10 h-10 rounded-full mr-2" />
          <p>Username</p>
        </div>
      </header> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Balance</h3>
          <p className="text-3xl">$120.00</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Water Level</h3>
          <p className="text-3xl">75%</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Total Meters</h3>
          <p className="text-3xl">15</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Active Meters</h3>
          <p className="text-3xl">12</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Inactive Meters</h3>
          <p className="text-3xl">3</p>
        </div>
        <div className="bg-white p-4 shadow rounded-lg">
          <h3 className="text-xl font-bold">Usage Today</h3>
          <p className="text-3xl">1200L</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
