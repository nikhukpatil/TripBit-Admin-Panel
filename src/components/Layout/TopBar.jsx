import React, { useState } from 'react';
import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TopBar = ({ toggleSidebar }) => {
  const [isNotificationsOpen, setNotificationsOpen] = useState(false);
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleNotificationsDropdown = () => {
    setNotificationsOpen(!isNotificationsOpen);
    setProfileOpen(false);
    setSearchOpen(false);
  };

  const toggleProfileDropdown = () => {
    setProfileOpen(!isProfileOpen);
    setNotificationsOpen(false);
    setSearchOpen(false);
  };

  const toggleSearch = () => {
    setSearchOpen(!isSearchOpen);
    setNotificationsOpen(false);
    setProfileOpen(false);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="bg-white text-black p-4 flex items-center justify-between relative px-10">
      <div className="flex items-center space-x-4 gap-5">
        <button onClick={toggleSidebar} className="text-2xl">
          <FiMenu />
        </button>
        <button>Home</button>
        <button>Contact</button>
      </div>
      <div className="flex items-center justify-center space-x-4">
        <div className="relative">
          {isSearchOpen && (
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="absolute right-0 mt-12 bg-gray-600 text-white rounded shadow-lg z-10 p-2 w-64 transition-all duration-300"
              placeholder="Search..."
            />
          )}
          <button className="text-3xl mt-2" onClick={toggleSearch}>
            <FiSearch className=' bg-gray-500 rounded-lg p-1 overflow-hidden text-white' />
          </button>
        </div>
       
        <button className="text-3xl relative " onClick={toggleNotificationsDropdown}>
          <FiBell className=' bg-gray-500 rounded-lg p-1 overflow-hidden text-white' />
          {isNotificationsOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-gray-300 text-black text-sm rounded shadow-lg z-10 transition-all duration-300">
              <div className="p-4 text-left">
                <h2 className="font-bold mb-2 px-2">Notifications</h2>
                <ul>
                  <li className="py-1 px-2 hover:bg-gray-500 rounded">Notification 1</li>
                  <li className="py-1 px-2 hover:bg-gray-500 rounded">Notification 2</li>
                  <li className="py-1 px-2 hover:bg-gray-500 rounded">Notification 3</li>
                </ul>
              </div>
            </div>
          )}
        </button>
        <button className="text-3xl relative" onClick={toggleProfileDropdown}>
          <div className=' flex  gap-3 justify-center items-center'>

          <span className="text-lg">Hello TripBit</span>
          <FiUser className=' bg-gray-500 rounded-lg p-1 overflow-hidden text-white' />
          </div>
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-gray-300 text-black text-sm rounded shadow-lg z-10 transition-all duration-300">
              <div className="p-4 text-left">
                <h2 className="font-bold mb-2 px-2">Admin Profile</h2>
                <ul>
                  <Link to='/admin-profile'>
                    <li className="py-1 px-2 hover:bg-gray-500 rounded" >
                      My Profile
                    </li>
                  </Link>
                  <Link to='account-setting'>
                    <li className="py-1 px-2 hover:bg-gray-500 rounded" >
                      Account Settings
                    </li>
                  </Link>
                  <Link to='/'>
                    <li className="py-1 px-2 hover:bg-gray-500 rounded" >
                      Log Out
                    </li>
                  </Link>
                </ul>
              </div>
            </div>
          )}
        </button>
      </div>
    </div>
  );
};

export default TopBar;
