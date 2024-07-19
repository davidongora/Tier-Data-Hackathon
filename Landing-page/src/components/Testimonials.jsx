// eslint-disable-next-line no-unused-vars
import React from 'react'

const Testimonials = () => {
  return (
    <div className="mt-8 mb-12">
      <p className="font-bold text-center text-[32px] text-green-700 mt-12">What Our Users Say</p>
      <div className="flex flex-wrap justify-center gap-16 mt-8">
        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">The billing management system has streamlined our water meter readings and made tracking usage a breeze!</p>
          <p className="text-center mt-4 font-bold">- Utility Manager Alex</p>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">With the automated billing and meter shutoff features, managing our prepaid water meters has never been easier.</p>
          <p className="text-center mt-4 font-bold">- Facility Manager Lisa</p>
        </div>

        <div className="bg-gray-100 shadow-lg rounded-lg p-6 w-72">
          <p className="text-center italic">This system has improved our operational efficiency and provided accurate billing without any hassle.</p>
          <p className="text-center mt-4 font-bold">- Water Utility Supervisor James</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials
