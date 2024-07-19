// eslint-disable-next-line no-unused-vars
import React from 'react'
import home from '../assets/drinking.png'
import phone from '../assets/entry.png'
import mobile from '../assets/meter.png'
import yields from '../assets/smartmeter.png'

const Client = () => {
  return (
    <div className="mt-8 ">
      <p className="font-bold text-[24px] text-center text-blue-700">How It Works</p>
      <div className="flex flex-wrap justify-center gap-16 mt-4">
        <div className="bg-blue-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 1:</p>
          <p className="text-center mt-2">Set Up Your Meter</p>
          <img src={mobile} alt="Set Up Your Meter" className="mx-auto mt-4" />
          <p className="text-center mt-4">Install and configure your prepaid smart water meter with your account details.</p>
        </div>

        <div className="bg-blue-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 2:</p>
          <p className="text-center mt-2">Monitor Usage</p>
          <img src={home} alt="Monitor Usage" className="mx-auto mt-4" />
          <p className="text-center mt-4">Track real-time water usage and remaining balance through the software.</p>
        </div>

        <div className="bg-blue-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 3:</p>
          <p className="text-center mt-2">Receive Alerts</p>
          <img src={phone} alt="Receive Alerts" className="mx-auto mt-4 w-40 h-40" />
          <p className="text-center mt-4">Get notifications for low balance and automatic service shutoff when balance is depleted.</p>
        </div>

        <div className="bg-blue-100 shadow-lg rounded-lg p-4 w-64">
          <p className="font-bold text-center">Step 4:</p>
          <p className="text-center mt-2">Manage Billing</p>
          <img src={yields} alt="Manage Billing" className="mx-auto mt-4" />
          <p className="text-center mt-4">Easily manage billing, add credits, and view usage history through the software.</p>
        </div>
      </div>
    </div>
  );
};

export default Client;
