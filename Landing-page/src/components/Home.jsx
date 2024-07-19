// eslint-disable-next-line no-unused-vars
import React from 'react'
import smartfarm from '../assets/drinking.png'

const Home = () => {
  return (
    <>
      <div className="sm:flex sm:gap-56 sm:mb-12">
        <div className="ml-8 mt-16 gap-6">
          <p className='font-bold text-[42px] mt-24'>Manage Your Water Usage <br/></p>
          <p className='font-bold text-[42px] text-green-700'>With SmartWater</p>
          <p className='text-[18px]'>Efficient billing management and real-time monitoring for prepaid smart water meters. <br/> Enjoy automated billing, balance alerts, and seamless water management.</p>
          <button className='rounded-lg p-3 bg-green-700 text-white mt-6'>Get Started</button>
        </div>
        <img src={smartfarm} alt="SmartWater brand" className='xl:mt-24 sm: mb-12 w-[400px] h-[400px]' />
      </div>
    </>
  )
}

export default Home
