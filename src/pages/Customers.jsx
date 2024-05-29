import React, { useState, useMemo, useEffect } from "react";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";

const Customers = () => {
  const initialCustomers = useMemo(() => [
    { id: 1, name: "Ritu Goyal", email: "ritugoyal@gmail.com", phone: "1234567890" },
    { id: 2, name: "Ajit Jain", email: "ajitjain@gmail.com", phone: "0987654321" },
    // Add more customers as needed
  ], []);

  const [customers, setCustomers] = useState(initialCustomers);
  const [isFormOpen, setFormOpen] = useState(false);
  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", phone: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [customersPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredCustomers, setFilteredCustomers] = useState(initialCustomers);

  useEffect(() => {
    setFilteredCustomers(
      customers.filter(customer =>
        customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        customer.phone.includes(searchTerm)
      )
    );
    setCurrentPage(1);
  }, [searchTerm, customers]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer({ ...newCustomer, [name]: value });
  };

  const handleAddCustomer = (e) => {
    e.preventDefault();
    setCustomers([...customers, { ...newCustomer, id: customers.length + 1 }]);
    setFormOpen(false);
    setNewCustomer({ name: "", email: "", phone: "" });
  };

  // Pagination logic
  const indexOfLastCustomer = currentPage * customersPerPage;
  const indexOfFirstCustomer = indexOfLastCustomer - customersPerPage;
  const currentCustomers = filteredCustomers.slice(indexOfFirstCustomer, indexOfLastCustomer);

  const totalPages = Math.ceil(filteredCustomers.length / customersPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Customers</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name, email, or phone"
            className="border p-2 mr-4"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setFormOpen(true)}
          >
            <FiUserPlus className="mr-2" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Customer List</h2>
        <CustomerTable customers={currentCustomers} />
        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New Customer</h2>
            <form onSubmit={handleAddCustomer}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newCustomer.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={newCustomer.email}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={newCustomer.phone}
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
                  Add Customer
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const CustomerTable = ({ customers }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Email</th>
            <th className="px-4 py-2 border text-left">Phone</th>
            <th className="px-4 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{customer.id}</td>
              <td className="px-4 py-2 border">{customer.name}</td>
              <td className="px-4 py-2 border">{customer.email}</td>
              <td className="px-4 py-2 border">{customer.phone}</td>
              <td className="px-4 py-2 border flex">
                <button className="text-yellow-500 hover:text-yellow-700 mr-4">
                  <FiEdit />
                </button>
                <button className="text-red-500 hover:text-red-700">
                  <FiTrash2 />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Pagination = ({ totalPages, currentPage, paginate }) => {
  return (
    <div className="flex justify-center mt-4 items-center w-full">
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
  );
};

export default Customers;
