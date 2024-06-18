import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { FaMoneyBillAlt, FaTachometerAlt } from 'react-icons/fa';
import { AiFillCaretDown } from 'react-icons/ai';

const TopBar = ({ toggleSidebar }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="flex items-center justify-between sm:px-4 py-4 bg-white shadow">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="text-2xl sm:block hidden">
          <FiMenu />
        </button>
      </div>
      <div className="flex items-center sm:space-x-4 space-x-2">
        <div className="flex flex-col items-center ml-4">
          <FaMoneyBillAlt className="text-lg mr-2" />
          <span className="text-[7px] sm:text-base ">Credit Balance: 0</span>
        </div>
        <button className="bg-yellow-500 text-white sm:p-2 p-1 rounded-lg hover:bg-yellow-600 sm:text-sm text-[5px]">
          Account Statements
        </button>
        <button className="bg-yellow-500 text-white sm:p-2 p-1 rounded-lg hover:bg-yellow-600 sm:text-sm text-[5px]">
          B2B Account Statements
        </button>
        <Link to="/dashboard">
          <div className="flex items-center">
            <FaTachometerAlt className=" mr-2  sm:text-lg text-sm" />
            <span className=" sm:text-base text-sm ">Dashboard</span>
          </div>
        </Link>
        <div className="relative">
          <div className="flex items-center cursor-pointer" onClick={toggleDropdown}>
            <span className="sm:text-lg text-sm sm:mr-2">Admin</span>
            <AiFillCaretDown />
          </div>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-gray-300 border border-gray-200 rounded-lg shadow-md z-10">
              <Link to="/admin-profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-500">
                Manage Profile
              </Link>
              <Link to="/account-setting" className="block px-4 py-2 text-gray-800 hover:bg-gray-500">
                Account Settings
              </Link>
              <Link to="/dashbaord" className="block px-4 py-2 text-gray-800 hover:bg-gray-500">
                Change Password
              </Link>
              <Link to="/" className="block px-4 py-2 text-gray-800 hover:bg-gray-500">
                Log Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
