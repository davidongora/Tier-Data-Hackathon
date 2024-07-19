// eslint-disable-next-line no-unused-vars
import React from 'react';
import happy from '../assets/persons.png';

const Contact = () => {
  return (
    <>

<div className="justify-center items-center min-h-screen bg-green-50 py-8 pt-12 pb-12 mt-8 ">
    <p className="font-bold text-2xl text-center text-green-700 mb-4">Get in Touch</p>
    <div className="xl:flex gap-24">
      <div className="mt-8 flex justify-center">
          <img src={happy} alt="Happy" className="ml-6 xl:h-[516px] xl:w-[696px] w-[500px] h-[300px] mr-6 "/>
        </div>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <p className="font-bold text-2xl text-center text-green-700 mb-4">Get in Touch</p>
        <p className="text-center text-gray-700 mb-8">Have questions or need support? Reach out to us!</p>
        <form action="#" method="post">
          <div className="grid gap-6">
            <div className="text-center">
              <label htmlFor="email" className="block text-gray-600 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                className="bg-slate-100 border border-gray-300 rounded-full py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500" 
                placeholder="Email address"
              />
            </div>
            <div className="text-center">
              <label htmlFor="message" className="block text-gray-600 mb-2">Message</label>
              <textarea 
                id="message" 
                className="bg-slate-100 border border-gray-300 rounded-lg py-2 px-4 w-full focus:outline-none focus:ring-2 focus:ring-green-500 h-32 resize-none" 
                placeholder="Your message"
              />
            </div>
            <div className="text-center">
              <button 
                type="submit" 
                className="bg-green-700 text-white rounded-full py-2 px-8 hover:bg-green-600 transition duration-300"
              >
                Send
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Contact;
