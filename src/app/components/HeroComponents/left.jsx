'use client'
import { useState } from 'react';


export default function Left() {
  const [mobileNumber, setMobileNumber] = useState('');

  const handleInputChange = (e) => {
    setMobileNumber(e.target.value);
  };

  const handleGetStarted = () => {
    alert(`Mobile number entered: ${mobileNumber}`);
    // Add any further actions here, e.g., form submission or API call
  };

  return (
    <div className="flex  flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Large Text */}
      <h1 className="text-8xl font-bold mb-8 text-gray-800 text-center">God Crew</h1>

      {/* Input and Button */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-sm">
        <p className='text-center'>Lets Enter your Address to Start the services from God Crew</p>
        <input
          type="text"
          placeholder="Enter your Address to Start the services from GodCrew"
          value={mobileNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        <button
          onClick={handleGetStarted}
          className="w-full bg-black text-white px-4 py-2 rounded hover:bg-gray-800 focus:outline-none"
        >
          Get Started
        </button>
      </div>
    </div>
  );
}
