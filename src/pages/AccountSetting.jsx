import React, { useState } from "react";

const AccountSetting = () => {
  const [adminDetails, setAdminDetails] = useState({
    name: "TripBit",
    email: "tripbit@tripbit.com",
    role: "Super Admin",
    password: "",
    confirmPassword: "",
  });
  const [profilePicture, setProfilePicture] = useState(null);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminDetails({
      ...adminDetails,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setProfilePicture(e.target.files[0]);
  };

  const validate = () => {
    let errors = {};
    if (!/\S+@\S+\.\S+/.test(adminDetails.email)) {
      errors.email = "Email address is invalid";
    }
    if (adminDetails.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    if (adminDetails.password !== adminDetails.confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Updated Admin Details:", adminDetails);
      if (profilePicture) {
        console.log("Profile Picture:", profilePicture);
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Manage Profile</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Name</label>
            <input
              type="text"
              name="name"
              value={adminDetails.name}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={adminDetails.email}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Role</label>
            <input
              type="text"
              name="role"
              value={adminDetails.role}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Profile Picture</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {profilePicture && (
              <img
                src={URL.createObjectURL(profilePicture)}
                alt="Profile Preview"
                className="mt-4 w-24 h-24 rounded-full object-cover"
              />
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">New Password</label>
            <input
              type="password"
              name="password"
              value={adminDetails.password}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={adminDetails.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 p-2 rounded"
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword}</p>}
          </div>
          <button
            type="submit"
            className="bg-yellow-500 text-white px-4 py-2 rounded w-full"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default AccountSetting;
