// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import './Index.css';

import Dashboard from './components/Dashboard';
import SideBar from './components/SideBar';
import CustomerMngt from './components/CustomerMngt';
import PaymentTracking from './components/PaymentTracking';
import PrepaidBalanceMngt from './components/PrepaidBalanceMngt';
import Login from './components/Login';
import MeterMngt from './components/MeterMngt';
import VirtualMngt from './components/VirtualMngt';

// Component to conditionally render the sidebar
// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  const location = useLocation();

  // Determine if the current route is the login route
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="flex">
      {!isLoginPage && <SideBar />}
      <div className={`flex-grow ${isLoginPage ? 'p-4' : 'mt-0'}`}>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <Layout>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/customerManagement" element={<CustomerMngt />} />
                <Route path="/prepaidBalanceMngt" element={<PrepaidBalanceMngt />} />
                <Route path="/paymentTracking" element={<PaymentTracking />} />
                <Route path="/meterMngt" element={<MeterMngt />} />
                <Route path="/VirtualMngt" element={<VirtualMngt />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
