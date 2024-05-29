import React, { useState, useMemo, useEffect } from "react";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";

const Employee = () => {
  const initialEmployees = useMemo(() => [
    { id: 1, name: "Anjali Sharma", position: "Manager", department: "Sales", email: "anjalisharma@gmail.com" },
    { id: 2, name: "Rohit Roy", position: "Developer", department: "IT", email: "rohitroy@gmail.com" },
    // Add more employees as needed
  ], []);

  const [employees, setEmployees] = useState(initialEmployees);
  const [isFormOpen, setFormOpen] = useState(false);
  const [newEmployee, setNewEmployee] = useState({ name: "", position: "", department: "", email: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(initialEmployees);

  useEffect(() => {
    setFilteredEmployees(
      employees.filter(employee =>
        employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
        employee.email.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setCurrentPage(1);
  }, [searchTerm, employees]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleAddEmployee = (e) => {
    e.preventDefault();
    setEmployees([...employees, { ...newEmployee, id: employees.length + 1 }]);
    setFormOpen(false);
    setNewEmployee({ name: "", position: "", department: "", email: "" });
  };

  // Pagination logic
  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const totalPages = Math.ceil(filteredEmployees.length / employeesPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Employees</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name, position, department, or email"
            className="border p-2 mr-4"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setFormOpen(true)}
          >
            <FiUserPlus className="mr-2" />
            Add Employee
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Employee List</h2>
        <EmployeeTable employees={currentEmployees} />
        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New Employee</h2>
            <form onSubmit={handleAddEmployee}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newEmployee.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Position</label>
                <input
                  type="text"
                  name="position"
                  value={newEmployee.position}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Department</label>
                <input
                  type="text"
                  name="department"
                  value={newEmployee.department}
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
                  value={newEmployee.email}
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
                  Add Employee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const EmployeeTable = ({ employees }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Position</th>
            <th className="px-4 py-2 border text-left">Department</th>
            <th className="px-4 py-2 border text-left">Email</th>
            <th className="px-4 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{employee.id}</td>
              <td className="px-4 py-2 border">{employee.name}</td>
              <td className="px-4 py-2 border">{employee.position}</td>
              <td className="px-4 py-2 border">{employee.department}</td>
              <td className="px-4 py-2 border">{employee.email}</td>
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

export default Employee;
