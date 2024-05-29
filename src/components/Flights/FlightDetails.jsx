import React, { useState, useEffect, useMemo } from "react";

const FlightDetails = () => {
  const flights = useMemo(() => [
    { id: 1, airline: "Air India", departureTime: "10:00 AM", flightTime: "3 hours" },
    { id: 2, airline: "Emirates", departureTime: "12:00 PM", flightTime: "6 hours" },
    { id: 3, airline: "Delta Airlines", departureTime: "2:00 PM", flightTime: "4 hours" },
  ], []);

  const [currentPage, setCurrentPage] = useState(1);
  const [flightsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredFlights, setFilteredFlights] = useState(flights);

  useEffect(() => {
    setFilteredFlights(
      flights.filter(flight =>
        flight.airline.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [searchTerm, flights]);

  const indexOfLastFlight = currentPage * flightsPerPage;
  const indexOfFirstFlight = indexOfLastFlight - flightsPerPage;
  const currentFlights = filteredFlights.slice(indexOfFirstFlight, indexOfLastFlight);

  const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Flight Details</h2>
      <input
        type="text"
        placeholder="Search by airline"
        className="border p-2 mb-4"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      />
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Airline</th>
            <th className="py-2 px-4 border-b">Departure Time</th>
            <th className="py-2 px-4 border-b">Flight Time</th>
          </tr>
        </thead>
        <tbody>
          {currentFlights.map(flight => (
            <tr key={flight.id}>
              <td className="py-2 px-4 border-b">{flight.airline}</td>
              <td className="py-2 px-4 border-b">{flight.departureTime}</td>
              <td className="py-2 px-4 border-b">{flight.flightTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center mt-4 items-center w-full">

        <div>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`p-2 border rounded mx-1 ${currentPage === index + 1 ? 'bg-gray-300' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FlightDetails;
