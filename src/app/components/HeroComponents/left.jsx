'use client';
import { useState } from 'react';

export default function Left() {
  const [mobileNumber, setMobileNumber] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const handleInputChange = async (e) => {
    const value = e.target.value;
    setMobileNumber(value);

    if (value.length > 2) {
      setLoading(true);

      try {
        const response = await fetch(`/api/places?input=${value}`);
        const data = await response.json();

        if (data.predictions) {
          setSuggestions(data.predictions);
          setShowDropdown(true); // Show dropdown
        } else {
          setSuggestions([]);
          setShowDropdown(false); // Hide dropdown
        }
      } catch (error) {
        console.error('Error fetching suggestions:', error);
      } finally {
        setLoading(false);
      }
    } else {
      setSuggestions([]);
      setShowDropdown(false); // Hide dropdown
    }
  };

  const handleSuggestionClick = (description) => {
    setMobileNumber(description); // Update input field with the selected description
    setSuggestions([]); // Clear suggestions
    setShowDropdown(false); // Hide the dropdown
  };

  const handleGetStarted = () => {
    alert(`Address entered: ${mobileNumber}`);
    location.replace(`https://godcrew.com/phoneLogin?location=${mobileNumber}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {/* Large Text */}
      <h1 className="text-8xl font-bold mb-8 text-gray-800 text-center">God Crew</h1>

      {/* Input and Suggestions */}
      <div className="flex flex-col items-center space-y-4 w-full max-w-sm relative">
        <p className="text-center">
          Let's enter your address to start the services from God Crew
        </p>
        <input
          type="search"
          placeholder="Enter your Address to Start the services from GodCrew"
          value={mobileNumber}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-black"
        />
        {/* Suggestions Dropdown */}
        {loading && <p>Loading suggestions...</p>}
        {showDropdown && (
          <div className='bg-red-300 suggestion-warper'>
            <ul
            className="absolute w-full border border-gray-300 rounded bg-white max-h-40 overflow-y-auto shadow-lg z-10 transition-all duration-300 ease-in-out"
          >
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSuggestionClick(suggestion.description)}
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
          </div>
        )}
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
