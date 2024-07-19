// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';

const features = [
  { title: 'Real-Time Usage Monitoring', description: 'Track your water consumption in real-time, including detailed readings and trends.' },
  { title: 'Prepaid Balance Management', description: 'Manage your prepaid balance with automatic notifications when funds are low and options to top up.' },
  { title: 'Automated Billing', description: 'Receive automated billing based on your water usage, with clear and detailed invoices.' },
  { title: 'Remote Meter Shutoff', description: 'Automatically shut off the meter when the prepaid balance reaches zero to prevent overuse.' },
  { title: 'Usage History Reports', description: 'Access historical usage data and reports to analyze consumption patterns over time.' },
  { title: 'User-Friendly Interface', description: 'Enjoy a simple and intuitive interface for easy management of your smart meter and billing information.' },
];

const Features = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayedFeatures, setDisplayedFeatures] = useState([
    features[0],
    features[1],
    features[2]
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % features.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setDisplayedFeatures([
      features[currentIndex],
      features[(currentIndex + 1) % features.length],
      features[(currentIndex + 2) % features.length]
    ]);
  }, [currentIndex]);

  return (
    <div className="mt-12 flex flex-col items-center pb-12 mb-12">
      <p className="font-bold text-[24px] text-green-700 mb-8">Features</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {displayedFeatures.map((feature, index) => (
          <div key={index} className="bg-gray-100 p-4 rounded-lg shadow-md w-96">
            <p className="font-bold">{feature.title}</p>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
