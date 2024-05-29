import React from "react";
import { useNavigate } from "react-router-dom"; // Ensure you have react-router-dom installed

const AdminProfile = () => {
  const navigate = useNavigate();

  const handleGoToSettings = () => {
    navigate("/account-setting"); // Ensure you have a route set up for account settings
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://via.placeholder.com/150" // Replace with actual profile picture URL
            alt="Admin Profile"
            className="w-24 h-24 rounded-full"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Admin Profile</h1>
        <p className="text-gray-700 mb-4">
          Welcome to your Admin Profile page. Manage your account settings and preferences.
        </p>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
          onClick={handleGoToSettings}
        >
          Go to Account Settings
        </button>
      </div>
    </div>
  );
};

export default AdminProfile;
