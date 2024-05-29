import React, { useState, useMemo, useEffect } from "react";
import { FiEdit, FiTrash2, FiUserPlus } from "react-icons/fi";

const Agents = () => {
  const initialAgents = useMemo(() => [
    { id: 1, name: "ABC", agency: "Dhariwal", contact: "1234567890" },
    { id: 2, name: "DEF", agency: "Royal ratan", contact: "0987654321" },
  ], []);

  const [agents, setAgents] = useState(initialAgents);
  const [isFormOpen, setFormOpen] = useState(false);
  const [newAgent, setNewAgent] = useState({ name: "", agency: "", contact: "" });
  const [currentPage, setCurrentPage] = useState(1);
  const [agentsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredAgents, setFilteredAgents] = useState(initialAgents);

  useEffect(() => {
    setFilteredAgents(
      agents.filter(agent =>
        agent.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.agency.toLowerCase().includes(searchTerm.toLowerCase()) ||
        agent.contact.includes(searchTerm)
      )
    );
    setCurrentPage(1);
  }, [searchTerm, agents]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAgent({ ...newAgent, [name]: value });
  };

  const handleAddAgent = (e) => {
    e.preventDefault();
    setAgents([...agents, { ...newAgent, id: agents.length + 1 }]);
    setFormOpen(false);
    setNewAgent({ name: "", agency: "", contact: "" });
  };

  // Pagination logic
  const indexOfLastAgent = currentPage * agentsPerPage;
  const indexOfFirstAgent = indexOfLastAgent - agentsPerPage;
  const currentAgents = filteredAgents.slice(indexOfFirstAgent, indexOfLastAgent);

  const totalPages = Math.ceil(filteredAgents.length / agentsPerPage);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Agents</h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search by name, agency, or contact"
            className="border p-2 mr-4"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button
            className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
            onClick={() => setFormOpen(true)}
          >
            <FiUserPlus className="mr-2" />
            Add Agent
          </button>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Agent List</h2>
        <AgentTable agents={currentAgents} />
        <Pagination totalPages={totalPages} currentPage={currentPage} paginate={paginate} />
      </div>

      {isFormOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-8 rounded shadow-lg w-96">
            <h2 className="text-xl mb-4">Add New Agent</h2>
            <form onSubmit={handleAddAgent}>
              <div className="mb-4">
                <label className="block mb-1">Name</label>
                <input
                  type="text"
                  name="name"
                  value={newAgent.name}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Agency</label>
                <input
                  type="text"
                  name="agency"
                  value={newAgent.agency}
                  onChange={handleInputChange}
                  className="w-full border border-gray-300 p-2 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-1">Contact</label>
                <input
                  type="text"
                  name="contact"
                  value={newAgent.contact}
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
                  Add Agent
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

const AgentTable = ({ agents }) => {
  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Name</th>
            <th className="px-4 py-2 border text-left">Agency</th>
            <th className="px-4 py-2 border text-left">Contact</th>
            <th className="px-4 py-2 border text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {agents.map((agent) => (
            <tr key={agent.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{agent.id}</td>
              <td className="px-4 py-2 border">{agent.name}</td>
              <td className="px-4 py-2 border">{agent.agency}</td>
              <td className="px-4 py-2 border">{agent.contact}</td>
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

export default Agents;
