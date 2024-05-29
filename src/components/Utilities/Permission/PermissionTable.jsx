import React, { useState } from 'react';

const PermissionTable = () => {
  const [data, setData] = useState([
    { Permission: 'Read', Description: 'Can read content' },
    { Permission: 'Write', Description: 'Can write content' },
    { Permission: 'Execute', Description: 'Can execute actions' },
    { Permission: 'Delete', Description: 'Can delete content' }
  ]);

  const [isFormOpen, setFormOpen] = useState(false);
  const [newPermission, setNewPermission] = useState({
    Permission: '',
    Description: '',
  });

  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(5); // Change itemsPerPage as needed

  const permissions = {
    Read: 'Can read content',
    Write: 'Can write content',
    Execute: 'Can execute actions',
    Delete: 'Can delete content'
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'Permission') {
      setNewPermission({
        ...newPermission,
        Permission: value,
        Description: permissions[value]
      });
    } else {
      setNewPermission({
        ...newPermission,
        [name]: value
      });
    }
  };

  const handleAddPermission = (e) => {
    e.preventDefault();
    setData([...data, newPermission]);
    setFormOpen(false);
    setNewPermission({
      Permission: '',
      Description: ''
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
        <h1 className="text-2xl font-bold">Permission</h1>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearch}
            className="border border-gray-300 p-2 rounded"
          />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded ml-2" onClick={() => setFormOpen(true)}>Add Permission</button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-2 text-left">Permission</th>
              <th className="px-4 py-2 border-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {currentItems
              .filter((item) => {
                if (searchTerm === '') {
                  return true;
                } else {
                  return (
                    item.Permission.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    item.Description.toLowerCase().includes(searchTerm.toLowerCase())
                  );
                }
              })
              .map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="px-4 py-2 border-2">{item.Permission}</td>
                  <td className="px-4 py-2 border-2">{item.Description}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New Permission</h2>
            <form onSubmit={handleAddPermission}>
              <div className="mb-4">
                <label className="block mb-1">Permission</label>
                <select
                  name="Permission"
                  value={newPermission.Permission}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                >
                  <option value="">Select a permission</option>
                  {Object.keys(permissions).map((permission) => (
                    <option key={permission} value={permission}>{permission}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-1">Description</label>
                <input
                  type="text"
                  name="Description"
                  value={newPermission.Description}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  readOnly
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
                  Add Permission
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionTable;

