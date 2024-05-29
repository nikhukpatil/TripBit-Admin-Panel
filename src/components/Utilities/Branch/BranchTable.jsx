import React, { useState } from 'react';

const BranchTable = () => {
  const [data, setData] = useState([
    { City: 'Indore', Area: 'Nanda Nagar', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
    { City: 'Dewas', Area: 'ABC', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
    { City: 'Ujjain', Area: 'ABC', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
    { City: 'Rau', Area: 'ABC', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
    { City: 'Bhopal', Area: 'ABC', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
    { City: 'Burhanpur', Area: 'ABC', State: 'Madhya Pradesh', Pincode: '452011', ID: 'AH129KL' },
  ]);

  const [isFormOpen, setFormOpen] = useState(false);
  const [newBranch, setNewBranch] = useState({
    City: '',
    Area: '',
    State: '',
    Pincode: '',
    ID: ''
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBranch({
      ...newBranch,
      [name]: value
    });
  };

  const handleAddBranch = (e) => {
    e.preventDefault();
    setData([...data, newBranch]);
    setFormOpen(false);
    setNewBranch({
      City: '',
      Area: '',
      State: '',
      Pincode: '',
      ID: ''
    });
  };

  // Search functionality
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // Pagination functionality
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="p-4 border-2">
      <div className="flex justify-between items-center mb-4 border-2 p-2">
        <h1 className="text-2xl font-bold">Branch</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 p-2 rounded"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2" onClick={() => setFormOpen(true)}>Add Branch</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 text-left">City</th>
              <th className="px-4 py-2 border-2 text-left">Area</th>
              <th className="px-4 py-2 border-2 text-left">State</th>
              <th className="px-4 py-2 border-2 text-left">Pincode</th>
              <th className="px-4 py-2 border-2 text-left">ID</th>
            </tr>
          </thead>
          <tbody>
            {currentItems
              .filter((item) => {
                return (
                  searchTerm === '' ||
                  item.City.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.Area.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.State.toLowerCase().includes(searchTerm.toLowerCase()) ||
                  item.Pincode.includes(searchTerm) ||
                  item.ID.toLowerCase().includes(searchTerm.toLowerCase())
                );
              })
              
              .map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-2">{item.City}</td>
                  <td className="px-4 py-2 border-2">{item.Area}</td>
                  <td className="px-4 py-2 border-2">{item.State}</td>
                  <td className="px-4 py-2 border-2">{item.Pincode}</td>
                  <td className="px-4 py-2 border-2">{item.ID}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New Branch</h2>
            <form onSubmit={handleAddBranch}>
              <div className="mb-4">
                <label className="block mb-1">City</label>
                <input
                  type="text"
                  name="City"
                  value={newBranch.City}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Area</label>
                <input
                  type="text"
                  name="Area"
                  value={newBranch.Area}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">State</label>
                <input
                  type="text"
                  name="State"
                  value={newBranch.State}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Pincode</label>
                <input
                  type="text"
                  name="Pincode"
                  value={newBranch.Pincode}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">ID</label>
                <input
                  type="text"
                  name="ID"
                  value={newBranch.ID}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setFormOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded">
                  Add Branch
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Pagination */}
      <div className="flex justify-center mt-4">
        {data.length > itemsPerPage && (
          <ul className="flex list-none">
            {Array(Math.ceil(data.length / itemsPerPage))
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

export default BranchTable;
