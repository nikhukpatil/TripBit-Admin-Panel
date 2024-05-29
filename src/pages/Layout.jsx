import React, { useState } from "react";
import { Outlet } from 'react-router-dom';
import Sidebar from "../components/Layout/Sidebar";
import TopBar from "../components/Layout/TopBar";

const Layout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isHovered, setHovered] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div className="flex">
      <Sidebar 
        isOpen={isSidebarOpen || isHovered} 
        handleMouseEnter={handleMouseEnter} 
        handleMouseLeave={handleMouseLeave} 
      />
      <div className={`flex-grow ${isSidebarOpen ? 'ml-60' : 'ml-20'}`}>
        <TopBar toggleSidebar={toggleSidebar} />
        <main className="p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
