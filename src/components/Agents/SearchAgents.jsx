import React, { useState} from 'react';
import { Link } from "react-router-dom";
import { FaTachometerAlt } from 'react-icons/fa';

const SearchAgents = () => {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };






  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full justify-between items-center bg-white mb-5">
                <h1 className="text-3xl font-bold p-4">Search Agent</h1>
                <Link to='/dashboard' className="flex justify-center items-center px-4">
                    <FaTachometerAlt className="mr-2 sm:text-lg text-sm" />
                    <span>Home</span>
                </Link>
            </div>
      <div className="bg-white shadow-md rounded p-4 border-t-2 border-yellow-500">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
          <div>
            <label className="block mb-1 font-medium" htmlFor="registration-date">Registration Date</label>

            <input type="date" id="registration-date" className="w-full border border-gray-300 rounded p-2"/>
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="agency-name">Agency Name</label>
            <input type="text" id="agency-name" placeholder="Agency Name" className="w-full border-b border-gray-300 rounded p-2 focus:outline-none"/>
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="user-email">User Name/Email ID</label>
            <input type="text" id="user-email" placeholder="User Name/Email ID" className="w-full border-b border-gray-300 focus:border-none rounded p-2 focus:outline-none"/>
          </div>
        </div>

        <button className="bg-yellow-500 text-white px-4 py-2 rounded">Search Agents</button>

        <h2 className="text-xl font-bold mt-8 mb-4 text-center">Search Agents</h2>

        <div className="flex flex-col sm:flex-row justify-between mb-5">
                    <div className="flex gap-3 mb-2 sm:mb-0">
                        <button className="bg-gray-600 p-2 text-xs text-white hover:bg-gray-900">Copy</button>
                        <button className="bg-gray-600 p-2 text-xs text-white hover:bg-gray-900">Excel</button>
                        <button className="bg-gray-600 p-2 text-xs text-white hover:bg-gray-900">PDF</button>
                        <button className="bg-gray-600 p-2 text-xs text-white hover:bg-gray-900">Print</button>
                    </div>
                    <div className="flex gap-2 items-center">
                        <label htmlFor="search" className="font-bold">Search:</label>
                        <input
                            id="search"
                            type="text"
                            name="search"
                            value={searchQuery}
                            onChange={handleSearch}
                            className="w-full p-1 border-2 border-black sm:w-auto"
                        />
                    </div>
                </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead>
              <tr className="bg-gray-500">
                <th className="py-2 px-4 border-2 text-white">Name</th>
                <th className="py-2 px-4 border-2 text-white">City</th>
                <th className="py-2 px-4 border-2 text-white">Address</th>
                <th className="py-2 px-4 border-2 text-white">Phone No</th>
                <th className="py-2 px-4 border-2 text-white">Email</th>
                <th className="py-2 px-4 border-2 text-white">Balance amount</th>
                <th className="py-2 px-4 border-2 text-white">Created at</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b" colSpan="7">No data available in table</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex flex-col sm:flex-row justify-between">
          <span>Showing 0 to 0 of 0 entries</span>
          <div className="mt-2 sm:mt-0">
            <button className="bg-gray-200 px-4 py-2 rounded mr-2">Previous</button>
            <button className="bg-gray-200 px-4 py-2 rounded">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchAgents;
