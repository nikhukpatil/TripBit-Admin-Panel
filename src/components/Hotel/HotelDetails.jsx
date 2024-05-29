import React, { useState } from 'react';

const HotelDetails = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Hotel ABC',
      city: 'New York',
      country: 'USA'
    },
    {
      id: 2,
      name: 'Hotel XYZ',
      city: 'Paris',
      country: 'France'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);
  const [showForm, setShowForm] = useState(false);
  const [newHotel, setNewHotel] = useState({
    name: '',
    city: '',
    country: ''
  });


  const handleAddHotel = () => {
    const newId = hotels.length + 1;
    const newHotelWithId = { ...newHotel, id: newId };
    setHotels([...hotels, newHotelWithId]);
    setShowForm(false);
    setNewHotel({ name: '', city: '', country: '' });
  };

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination functionality
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hotels.filter((item) => {
    return (
      searchTerm === '' ||
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }).slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 border-2">
      <div className="flex justify-between items-center mb-4 border-2 p-2">
        <h1 className="text-2xl font-bold">Hotel Details</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
            className="border border-gray-300 p-2 rounded"
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
            onClick={() => setShowForm(true)}
          >
            Add Hotel
          </button>
        </div>
      </div>
      {showForm && (
        <div className="mt-4">
          <form onSubmit={handleAddHotel}>
            <div className="mb-4">
              <label className="block mb-1">Name</label>
              <input
                type="text"
                name="name"
                value={newHotel.name}
                onChange={(e) => setNewHotel({ ...newHotel, name: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">City</label>
              <input
                type="text"
                name="city"
                value={newHotel.city}
                onChange={(e) => setNewHotel({ ...newHotel, city: e.target.value })}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={newHotel.country}
                onChange={(e) => setNewHotel({ ...newHotel, country: e.target.value })}
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
                Add Hotel
              </button>
            </div>
          </form>
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 text-left">Name</th>
              <th className="px-4 py-2 border-2 text-left">City</th>
              <th className="px-4 py-2 border-2 text-left">Country</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((hotel) => (
              <tr key={hotel.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-2">{hotel.name}</td>
                <td className="px-4 py-2 border-2">{hotel.city}</td>
                <td className="px-4 py-2 border-2">{hotel.country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {hotels.length > itemsPerPage && (
          <ul className="flex list-none">
            {Array(Math.ceil(hotels.length / itemsPerPage))
              .fill()
              .map((_, index) => (
                <li key={index}>
                  <button
                    onClick={() => paginate(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? 'bg-gray-300 text-white px-3 py-1 rounded-l'
                        : 'bg-white text-gray-700 px-3 py-1 rounded-l'
                    }`}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default HotelDetails;
