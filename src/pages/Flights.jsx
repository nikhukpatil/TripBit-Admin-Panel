import React, { useState } from 'react';
import FlightDetails from '../components/Flights/FlightDetails';
import AirlineDetails from '../components/Flights/AirlineDetails';

const Flights = () => {
  const [showFlights, setShowFlights] = useState(true); // Initially showing flight details

  return (
    <div>
      <div className="flex justify-center mt-4">
        <button
          className={`bg-yellow-500 text-white px-4 py-2 rounded mr-4 ${showFlights ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => setShowFlights(true)}
          disabled={showFlights}
        >
          View Flight Details
        </button>
        <button
          className={`bg-yellow-500 text-white px-4 py-2 rounded ${!showFlights ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => setShowFlights(false)}
          disabled={!showFlights}
        >
          View Airline Details
        </button>
      </div>
      <div>
        {showFlights ? <FlightDetails /> : <AirlineDetails />}
      </div>
    </div>
  );
};

export default Flights;
