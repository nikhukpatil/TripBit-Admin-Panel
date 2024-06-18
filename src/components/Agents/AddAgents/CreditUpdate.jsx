import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTachometerAlt } from 'react-icons/fa';

const CreditUpdate = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex w-full justify-between items-center bg-white mb-5">
        <h1 className="text-3xl font-bold p-4">B2B Agent</h1>
        <Link to='/dashboard' className="flex justify-center items-center px-4">
          <FaTachometerAlt className="mr-2 sm:text-lg text-sm" />
          <span>Home</span>
        </Link>
      </div>
      <div className="bg-white shadow-md rounded p-4 border-t-2 border-yellow-500">
        <div className="flex space-x-2 justify-end">
          <button 
            className="bg-yellow-500 text-white py-1 px-3 text-xl rounded"
            onClick={handleToggleCollapse}
          >
            {isCollapsed ? '+' : '-'}
          </button>
          <button 
            className="bg-yellow-500 text-white py-1 px-3 text-xl rounded"
            onClick={() => setIsCollapsed(false)}
          >
            X
          </button>
        </div>

        <div 
          className={`transition-all duration-500 ease-in-out ${isCollapsed ? 'max-h-0 overflow-hidden' : 'max-h-full'}`}
          style={{ maxHeight: isCollapsed ? '0' : 'none' }}
        >
          <div className="flex justify-between items-center mb-4">
            <span className="text-lg font-medium">Tripbit's Current Balance: AED 0</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="topup-amount">Topup Account with (AED):</label>
              <input
                type="number"
                id="topup-amount"
                placeholder="Enter Amount"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="remarks">Remarks</label>
              <input
                type="text"
                id="remarks"
                placeholder="Enter Remarks"
                className="w-full border border-gray-300 rounded p-2"
              />
            </div>
          </div>

          <button className="bg-yellow-500 text-white px-4 py-2 rounded">Submit</button>

          <h2 className="text-xl font-bold mt-8 mb-4">Agents Credit Amount List</h2>

          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-2 px-4 border-b">Date</th>
                  <th className="py-2 px-4 border-b">Description</th>
                  <th className="py-2 px-4 border-b">Month</th>
                  <th className="py-2 px-4 border-b">Debit</th>
                  <th className="py-2 px-4 border-b">Credit</th>
                  <th className="py-2 px-4 border-b">Running Balance</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-2 px-4 border-b" colSpan="6">No data available in table</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditUpdate;
