// eslint-disable-next-line no-unused-vars
import React from 'react'
import StatisticsCard from './StatisticsCard'
import location from '../assets/persons.png'
import trends from '../assets/entry.png'
import members from '../assets/persons.png'
import reccomend from '../assets/smartmeter.png'

const Work = () => {
  return (
    <>
    <div className='bg-gray flex'>
      <div className="ml-6 mt-6 mb-6">
        <p className='font-bold text-[28px]'>Streamlining Water Billing</p>
        <p className='font-bold text-[28px] text-green-700'> with Smart Meter Technology</p>
        <p>Our system simplifies prepaid water meter management and enhances billing efficiency.</p>
      </div>
      <div className="flex xl:gap-56 mt-6 gap-8 mr-4 ml-6">
        <div className="grid xl:ml-24 xl:gap-12 gap-4 mr-2">
          <StatisticsCard
            imageSrc={members}
            altText="Meters"
            value="1,500,000"
            label="Smart Meters"
          />
          <StatisticsCard
            imageSrc={reccomend}
            altText="Readings"
            value="5,000,000"
            label="Meter Readings"
          />
        </div>

        <div className="grid xl:gap-8">
          <StatisticsCard
            imageSrc={trends}
            altText="Data Insights"
            value="99.9%"
            label="Data Accuracy"
          />
          <StatisticsCard
            imageSrc={location}
            altText="Automatic Shutoffs"
            value="98%"
            label="Automatic Shutoffs"
          />
        </div>
      </div>
    </div>
    </>
  )
}

export default Work
