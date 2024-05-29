import React from "react";
import { FiShield, FiUserPlus, FiUsers, FiActivity, FiSettings } from 'react-icons/fi';
import { IoCarSportOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { GiCruiser } from "react-icons/gi";

const Accounts = () => {
  const users = [
    { id: 1, name: "John Doe", role: "Admin" },
    { id: 2, name: "Jane Smith", role: "Editor" },
    { id: 3, name: "Sam Johnson", role: "Viewer" },
  ];

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <FiShield className="text-4xl text-gray-700 mr-4" />
          <h1 className="text-3xl font-bold">Accounts</h1>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <p className="text-xl font-semibold mb-4">Welcome Superadmin!</p>
        <p className="text-gray-700">You have access to all account management functionalities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <FiUsers className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Total Users</p>
            <p className="text-gray-700">3</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <FiActivity className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Active Sessions</p>
            <p className="text-gray-700">5</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <FiSettings className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Settings</p>
            <p className="text-gray-700">Manage</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <FiUserPlus className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">New Users</p>
            <p className="text-gray-700">2 this week</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <GiCommercialAirplane className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Airlines</p>
            <p className="text-gray-700">Manage Airlines</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <IoCarSportOutline className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Cabs</p>
            <p className="text-gray-700">Manage Cabs</p>
          </div>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4 flex items-center">
          <GiCruiser className="text-4xl text-gray-700 mr-4" />
          <div>
            <p className="text-xl font-semibold">Cruises</p>
            <p className="text-gray-700">Manage Cruises</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold mb-4">User List</h2>
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b text-left">ID</th>
              <th className="px-4 py-2 border-b text-left">Name</th>
              <th className="px-4 py-2 border-b text-left">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="px-4 py-2 border-b">{user.id}</td>
                <td className="px-4 py-2 border-b">{user.name}</td>
                <td className="px-4 py-2 border-b">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Accounts;
