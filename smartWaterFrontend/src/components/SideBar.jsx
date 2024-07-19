// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../../../../Downloads/logo.png'; // Adjust path as needed
import { FaBars, FaTimes, FaTachometerAlt, FaUsers, FaWater, FaDollarSign, FaMoneyBill, FaSignOutAlt } from 'react-icons/fa';

const SideBar = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isSidebarExpanded, setSidebarExpanded] = useState(true);
  const location = useLocation();

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const toggleSidebarSize = () => {
    setSidebarExpanded(!isSidebarExpanded);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="flex flex-col h-screen">
      {/* Top Bar */}
      <div className="bg-blue-500 text-white flex items-center justify-between">
        <div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleSidebar}
          >
            {isSidebarOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* <div className="flex items-center">
          <img src="userimage.png" alt="user" className="w-10 h-10 rounded-full mr-2" />
          <p>Username</p>
        </div> */}
      </div>
      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } md:block ${isSidebarExpanded ? 'w-64' : 'w-20'} bg-blue-500 text-white flex flex-col transition-width duration-300`}
        >
          {/* Toggle Sidebar Size Button */}
          <button
            className="text-white text-2xl p-4 md:block hidden"
            onClick={toggleSidebarSize}
          >
            {isSidebarExpanded ? <FaTimes /> : <FaBars />}
          </button>
          {/* Logo */}
          <div className="flex items-center justify-center p-4 mt-2">
            <img src={Logo} alt="logo" className={`w-12 h-12 ${isSidebarExpanded ? '' : 'hidden'}`} />
          </div>
          {/* Navigation */}
          <nav className="flex-1 mt-4">
            <ul className="flex flex-col">
              <li>
                <Link
                  to="/"
                  className={`block p-4 ${isActive('/') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaTachometerAlt className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/VirtualMngt"
                  className={`block p-4 ${isActive('/VirtualMngt') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaWater className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Virtual Meter Management</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/customerManagement"
                  className={`block p-4 ${isActive('/customerManagement') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaUsers className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Customer Management</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/MeterMngt"
                  className={`block p-4 ${isActive('/MeterMngt') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaWater className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Meter Management</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/PaymentTracking"
                  className={`block p-4 ${isActive('/PaymentTracking') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaDollarSign className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Payment Tracking</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/PrepaidBalanceMngt"
                  className={`block p-4 ${isActive('/PrepaidBalanceMngt') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaMoneyBill className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Prepaid Balance</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/Login"
                  className={`block p-4 ${isActive('/Login') ? 'bg-gray-700 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'} flex items-center`}
                >
                  <FaSignOutAlt className="mr-4" />
                  <span className={`${isSidebarExpanded ? 'inline' : 'hidden'}`}>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-gray-100 p-0">
          {/* Main content goes here */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
