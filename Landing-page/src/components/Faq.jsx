// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(null);

  const toggle = (index) => {
    if (open === index) {
      setOpen(null);
    } else {
      setOpen(index);
    }
  };

  return (
    <div className="mt-4 pt-6  pb-24  bg-green-50 ">
      <p className="font-bold text-center text-[32px] mb-8">Frequently Asked Questions</p>

      <div className="space-y-4 ml-6 mr-6">
        <div className="bg-white shadow rounded-lg p-4 ">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(0)}>
              How does the smart meter software handle billing?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(0)}>
              {open === 0 ? '-' : '+'}
            </button>
          </div>
          {open === 0 && (
            <p className="ml-6 mt-2">
              The smart meter software tracks water usage in real-time, calculates the cost based on predefined rates, and generates bills automatically. It also supports automatic meter shutoff when the prepaid balance reaches zero.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(1)}>
              Can I view my usage history with the smart meter?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(1)}>
              {open === 1 ? '-' : '+'}
            </button>
          </div>
          {open === 1 && (
            <p className="ml-6 mt-2">
              Yes, the software provides detailed usage history and reports. You can access past readings and analyze your consumption patterns through the user interface.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(2)}>
              How do I recharge my prepaid balance?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(2)}>
              {open === 2 ? '-' : '+'}
            </button>
          </div>
          {open === 2 && (
            <p className="ml-6 mt-2">
              You can recharge your prepaid balance through the software’s payment gateway. Various payment options are available, including online transactions and manual top-ups.
            </p>
          )}
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <div className="flex justify-between items-center">
            <p className="font-bold cursor-pointer" onClick={() => toggle(3)}>
              What should I do if my smart meter stops working?
            </p>
            <button className="font-bold text-xl" onClick={() => toggle(3)}>
              {open === 3 ? '-' : '+'}
            </button>
          </div>
          {open === 3 && (
            <p className="ml-6 mt-2">
              If your smart meter stops working, please contact our support team immediately. You can reach us through the contact form on our website, and we will assist you in resolving the issue as quickly as possible.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
