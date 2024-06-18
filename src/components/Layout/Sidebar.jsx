import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight, FiGrid, FiBox, FiUser } from 'react-icons/fi';
import { FaCodeBranch } from "react-icons/fa";
import { SiPowervirtualagents } from "react-icons/si";
import { IoDocumentsOutline } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { GrUserAdmin } from "react-icons/gr";
import { FaHotel, FaClipboardUser,FaUserShield } from "react-icons/fa6";
import { RiAccountBoxFill, RiCustomerService2Line } from "react-icons/ri";
import { TbReportSearch, TbUsersGroup } from "react-icons/tb";
import { MdOutlineContentPasteGo, MdOutlineSecurity, MdOutlineSupportAgent  } from "react-icons/md";

const Sidebar = ({ isOpen, handleMouseEnter, handleMouseLeave }) => {
  const [isUtilitiesOpen, setUtilitiesOpen] = useState(false);
  const [isUsersOpen, setUsersOpen] = useState(false);
  const [ isAgentsOpen, setIsAgentsOpen] = useState(false);

  const toggleUtilitiesDropdown = () => setUtilitiesOpen(!isUtilitiesOpen);
  const toggleUsersDropdown = () => setUsersOpen(!isUsersOpen);
  const toggleAgentsDropdown = () => setIsAgentsOpen(!isAgentsOpen);

  const closeUtilitiesDropdown = () => setUtilitiesOpen(false);
  const closeUsersDropdown = () => setUsersOpen(false);
  const closeAgentsDropdown = () => setIsAgentsOpen(false);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleResize = () => {
      setIsMobile(mediaQuery.matches);
      if (mediaQuery.matches) {
        handleMouseLeave();
      }
    };

    mediaQuery.addListener(handleResize);

    return () => {
      mediaQuery.removeListener(handleResize);
    };
  }, [handleMouseLeave]);

  const handleLinkClick = () => {
    if (isMobile) {
      toggleSidebar();
      closeUtilitiesDropdown();
      closeUsersDropdown();
    }
  };
  const toggleSidebar = () => {
    handleMouseEnter();
    setTimeout(() => {
      handleMouseLeave();
    }, 500); // Adjust the delay time as needed
  };

  return (
    <div
      className={`h-screen bg-black text-white transition-width duration-300 fixed top-0 left-0 z-10 ${isOpen ? ' w-60' : ' w-14'} overflow-hidden`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex flex-col h-full">
        <div className="p-4 flex-shrink-0 flex items-center">
          {isOpen ? (
            <h1 className="text-2xl font-bold">
              <span className="text-yellow-500">Trip</span>
              <span className="text-gray-500">Bit</span>
              <span className="ml-2">Admin</span>
            </h1>
          ) : (
            <span className="text-yellow-500 text-2xl">TB</span>
          )}
        </div>

         <hr className="w-full border-t border-white" />
        <nav className="flex-grow overflow-y-auto">

          <div>
            <Link to="/dashboard" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <FiGrid className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Dashboard</span>
              </div>
            </Link>
          </div>

          <div>
            <button onClick={toggleUtilitiesDropdown} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <IoDocumentsOutline className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Utilities</span>
              </div>
              { isOpen && (

<FiChevronRight className={`transform ${isUtilitiesOpen ? 'rotate-90' : ''}`} />
)}
            </button>
            {isUtilitiesOpen && isOpen && (
              <div className="ml-4">
                <Link to="/utilities/branch" className=" py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3 " onClick={closeUtilitiesDropdown}> <FaCodeBranch /> Branch</Link>
                <Link to="/utilities/roles" className=" py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUtilitiesDropdown}> <FaUserShield />  Roles</Link>
                <Link to="/utilities/security" className=" py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUtilitiesDropdown}> <MdOutlineSecurity />  Security</Link>
                <Link to="/utilities/group" className=" py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUtilitiesDropdown}> <TbUsersGroup />Group</Link>
                <Link to="/utilities/permission" className=" py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUtilitiesDropdown}> <GrUserAdmin /> Permission</Link>
              </div>
            )}
          </div>

          <div>
            <Link to="/flights" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <GiCommercialAirplane className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Flights</span>
              </div>
            </Link>
          </div>

          <div>
            <Link to="/hotels" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <FaHotel className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Hotels</span>
              </div>
            </Link>
          </div>




          <div>
            <button onClick={toggleAgentsDropdown} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <MdOutlineSupportAgent className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Agents</span>
              </div>
              { isOpen && (

              <FiChevronRight className={`transform ${isAgentsOpen ? 'rotate-90' : ''}`} />
              )}
            </button>
            {isAgentsOpen && isOpen && (
              <div className="ml-4">
                <Link to="/agents/add-agents" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Add Agents</Link>
                <Link to="/agents/view-agents" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> View Agents</Link>
                <Link to="/agents/search-agents" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Search Agents</Link>
                <Link to="/agents/sales-rule" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Agent Sales Rule</Link>
                <Link to="/agents/login-history" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Agent Login History</Link>
                <Link to="/agents/invalid-login-histor" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Agent Invalid Login History</Link>
                <Link to="/agents/agents-ledger" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Agent Ledger</Link>
                <Link to="/agents/reward-programme" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Reward Programme</Link>
                <Link to="/agents/credit-logs" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Credit Logs</Link>
                <Link to="/agents/credit-request" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeAgentsDropdown}> <SiPowervirtualagents /> Agent Credit Request</Link>
              </div>
            )}
          </div>

          <div>
            <button onClick={toggleUsersDropdown} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <FiUser className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Users</span>
              </div>
              { isOpen && (

              <FiChevronRight className={`transform ${isUsersOpen ? 'rotate-90' : ''}`} />
              )}
            </button>
            {isUsersOpen && isOpen && (
              <div className="ml-4">
                <Link to="/users/customers" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUsersDropdown}> <RiCustomerService2Line /> Customers</Link>
                <Link to="/users/employee" className="py-2.5 px-4 rounded transition hover:bg-gray-700 flex items-center gap-3" onClick={closeUsersDropdown}> <FaClipboardUser />Employee (Staff)</Link>
              </div>
            )}
          </div>

          <div>
            <Link to="/accounts" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <RiAccountBoxFill className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Accounts</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/hr" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <FiBox className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>HR</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/reports" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <TbReportSearch className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>Reports</span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/cms" onClick={handleLinkClick} className="w-full text-left py-2.5 px-4 rounded transition duration-200 hover:bg-gray-700 flex items-center justify-between">
              <div className="flex items-center">
                <MdOutlineContentPasteGo className="text-2xl" />
                <span className={`ml-4 ${!isOpen && 'hidden'}`}>CMS</span>
              </div>
            </Link>
          </div>

        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
