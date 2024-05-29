import React, { useState, useEffect, useMemo } from "react";

const AirlineDetails = () => {
  const initialAirlines = useMemo(() => [
    { id: 1, name: "Air India", country: "India" },
    { id: 2, name: "Emirates", country: "UAE" },
    { id: 3, name: "Delta Airlines", country: "United States" },
  ], []);

  const [airlines, setAirlines] = useState(initialAirlines);
  const [currentPage, setCurrentPage] = useState(1);
  const [airlinesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAirlines, setFilteredAirlines] = useState(initialAirlines);

  useEffect(() => {
    setFilteredAirlines(
      airlines.filter(airline =>
        airline.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [searchTerm, airlines]);

  const [showForm, setShowForm] = useState(false);
  const [newAirline, setNewAirline] = useState({
    name: "",
    country: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAirline({ ...newAirline, [name]: value });
  };

  const handleAddAirline = (e) => {
    e.preventDefault();
    const newId = airlines.length + 1;
    const newAirlineWithId = { ...newAirline, id: newId };
    const updatedAirlines = [...airlines, newAirlineWithId];
    setAirlines(updatedAirlines);
    setFilteredAirlines(updatedAirlines);
    setShowForm(false);
    setNewAirline({ name: "", country: "" });
  };

  // Pagination logic
  const indexOfLastAirline = currentPage * airlinesPerPage;
  const indexOfFirstAirline = indexOfLastAirline - airlinesPerPage;
  const currentAirlines = filteredAirlines.slice(indexOfFirstAirline, indexOfLastAirline);

  const totalPages = Math.ceil(filteredAirlines.length / airlinesPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Airline Details</h2>
      <div className="flex items-center mb-4">
        <input
          type="text"
          placeholder="Search by airline"
          className="border p-2 mr-4"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded"
          onClick={() => setShowForm(true)}
        >
          Add Airline
        </button>
      </div>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Country</th>
          </tr>
        </thead>
        <tbody>
          {currentAirlines.map(airline => (
            <tr key={airline.id}>
              <td className="py-2 px-4 border-b">{airline.name}</td>
              <td className="py-2 px-4 border-b">{airline.country}</td>
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
      {showForm && (
        <div className="mt-4">
          <form onSubmit={handleAddAirline}>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={newAirline.name}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={newAirline.country}
                onChange={handleInputChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              >
                Cancel
              </button>
              <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                Add Airline
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default AirlineDetails;
