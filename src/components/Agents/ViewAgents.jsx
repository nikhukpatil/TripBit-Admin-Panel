import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaTachometerAlt } from 'react-icons/fa';

const agentsData = [
    {
        id: 1,
        name: "Tripbit",
        code: "2699",
        state: "Karnataka",
        country: "India",
        mobile: "0123654789",
        email: "agent@example.com",
        status: "Active"
    },
    {
        id: 2,
        name: "Chandana",
        code: "9595",
        state: "Karnataka",
        country: "Australia",
        mobile: "8768768789",
        email: "chandana@example.com",
        status: "Active"
    }
];

const tableHeaders = [
    "Sl.No", "Agency Name", "Agent Code", "State", "Update Credit", "Payment Request", "Update Markup", "Country", "Mobile", "Email Id", "Status", "Action", "Balance Alert"
];

const ViewAgents = () => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (event) => {
        setSearchQuery(event.target.value);
    };

    const filteredAgents = agentsData.filter(agent =>
        agent.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="p-4">
            <div className="flex w-full justify-between items-center bg-white mb-5">
                <h1 className="text-3xl font-bold p-4">B2B Agent</h1>
                <Link to='/dashboard' className="flex justify-center items-center px-4">
                    <FaTachometerAlt className="mr-2 sm:text-lg text-sm" />
                    <span>Home</span>
                </Link>
            </div>

            <div className="border-t-2 border-yellow-500 bg-white p-5 mb-4">
                <div className="flex flex-col sm:flex-row justify-between">
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
            </div>

            <div className="overflow-x-auto p-4 bg-white">
                <table className="min-w-full border-2 table-auto">
                    <thead>
                        <tr className="bg-gray-700 text-white w-full">
                            {tableHeaders.map(header => (
                                <th key={header} className="py-2 px-4 border text-left whitespace-nowrap">{header}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {filteredAgents.map((agent, index) => (
                            <tr key={agent.id} className="w-full">
                                <td className="py-2 px-4 border whitespace-nowrap">{index + 1}</td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.name}</td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.code}</td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.state}</td>
                                <td className="py-2 px-4 border text-blue-500 whitespace-nowrap">
                                    <Link to="/agents/credit-update">Update Credit</Link>
                                </td>
                                <td className="py-2 px-4 border text-blue-500 whitespace-nowrap">
                                    <Link to="/dashboard">View</Link>
                                </td>
                                <td className="py-2 px-4 border text-blue-500 whitespace-nowrap">
                                    <Link to="/dashboard">Update Markup</Link>
                                </td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.country}</td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.mobile}</td>
                                <td className="py-2 px-4 border whitespace-nowrap">{agent.email}</td>
                                <td className="py-2 px-4 border text-blue-500 whitespace-nowrap">
                                    <Link to="/dashboard">{agent.status}</Link>
                                </td>
                                <td className="py-2 px-4 border whitespace-nowrap">
                                    <Link to="/dashboard" className="text-blue-500 px-2 py-1 rounded">
                                        Edit
                                    </Link>
                                </td>
                                <td className="py-2 px-4 border text-blue-500 whitespace-nowrap">
                                    <Link to="/dashboard">Balance Alert</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewAgents;
