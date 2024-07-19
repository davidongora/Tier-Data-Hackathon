// eslint-disable-next-line no-unused-vars
import React from 'react'

const About = () => {
  return (
    <div className='bg-blue-50 pt-12 pb-12'>
      <p className='font-bold text-[24px] text-center text-blue-700'>Revolutionizing Water Billing with Smart Solutions</p>
      <div className='text-[18px] xl:flex xl:gap-32 ml-6 mt-4 sm:grid'>
        <div className="h-56 mt-8">
          <b>Mission of SmartWaterBilling</b>
          <p className="h-56 text-justify leading-relaxed mr-12">The mission of SmartWaterBilling is to streamline and automate water billing processes for prepaid smart water meters. Our software is designed to efficiently manage virtual meters, generate accurate meter readings, and handle billing seamlessly. By integrating advanced technology, we aim to ensure accurate billing and timely shutoff of services when the prepaid balance reaches zero, enhancing both operational efficiency and customer satisfaction.</p>
        </div>
        <div className="mt-48 xl:mt-0 mb-12">
          <b>Vision of SmartWaterBilling</b>
          <p className="h-56 text-justify leading-relaxed mr-12">The vision of SmartWaterBilling is to transform water management into a more automated and user-friendly experience. We envision a future where our software supports a wide range of users with reliable billing management, precise meter readings, and automated service control. Our goal is to make water management simpler and more efficient, promoting sustainability and ensuring fair and transparent billing practices for all users.</p>
        </div>
      </div>
    </div>
  )
}

export default About
