import React, { useState } from "react";
import { FaTachometerAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast'
import { Link } from "react-router-dom";

const AddAgents = () => {


    const [formData, setFormData] = useState({
      agencyName: "",
      companyRegistrationNumber: "",
      pinNumber: "",
      email: "",
      branchName: "",
      address: "",
      city: "",
      state: "",
      country: "",
      mobileNumber: "",
      officeNumber: "",
      password: "",
      iataStatus: "",
      productAccess: {
        flight: false,
        hotel: false,
        sightseeing: false,
        packages: false,
      },
      menuAccess: {
        finance: false,
        booking: false,
        reports: false,
        quotations: false,
        administration: false,
      },
    });

    const handleChange = (e) => {
      const { name, value, type, checked } = e.target;
      if (type === "checkbox") {
        const [section, key] = name.split(".");
        setFormData((prevData) => ({
          ...prevData,
          [section]: {
            ...prevData[section],
            [key]: checked,
          },
        }));
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

    const validateForm = () => {
        let checkboxChecked = false;

        // Check if any text inputs are empty
        for (let key in formData) {
          if (typeof formData[key] === "string" && formData[key].trim() === "") {
            toast.error(`${key.replace(/([A-Z])/g, ' $1')} is required`);
            return false;
          }
        }

        // Check if at least one checkbox is checked in productAccess
        for (let key in formData.productAccess) {
          if (formData.productAccess[key] === true) {
            checkboxChecked = true;
            break;
          }
        }

        if (!checkboxChecked) {
          toast.error("At least one product access checkbox should be checked");
          return false;
        }

        checkboxChecked = false; // Reset checkboxChecked

        // Check if at least one checkbox is checked in menuAccess
        for (let key in formData.menuAccess) {
          if (formData.menuAccess[key] === true) {
            checkboxChecked = true;
            break;
          }
        }

        if (!checkboxChecked) {
          toast.error("At least one menu access checkbox should be checked");
          return false;
        }

        return true;
      };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (validateForm()) {
        console.log(formData);
        toast.success("Form submitted successfully!");
      }
    };

  return (
    <div>
      <div className=" flex w-full justify-between items-center bg-white mb-4">
        <div className=" f">

      <h1 className="text-3xl font-bold p-4 items-center">Add Agent</h1>
        </div>

      <Link to='/dashboard' className=" flex  justify-center items-center px-4">

      <FaTachometerAlt className=" mr-2  sm:text-lg text-sm" />
      <span>Home</span>
      </Link>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 bg-white p-5 border-t-2 border-yellow-500">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Agency Name
            </label>
            <input
              type="text"
              name="agencyName"
              value={formData.agencyName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Company Registration Number
            </label>
            <input
              type="text"
              name="companyRegistrationNumber"
              value={formData.companyRegistrationNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              PIN Number
            </label>
            <input
              type="text"
              name="pinNumber"
              value={formData.pinNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              User Name (Email ID)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Branch Name
            </label>
            <select
              name="branchName"
              value={formData.branchName}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Select Branch</option>
              <option>Indore</option>
              <option>Dewas</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Address
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              City
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              State
            </label>
            <input
              type="text"
              name="state"
              value={formData.state}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Country
            </label>
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Select Country</option>
              <option>India</option>
              <option>Dubai</option>
              <option>Ireland</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Mobile Number
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Office Number
            </label>
            <input
              type="text"
              name="officeNumber"
              value={formData.officeNumber}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              IATA Status
            </label>
            <select
              name="iataStatus"
              value={formData.iataStatus}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option>Select</option>
              <option>Approved</option>
              <option>Not-Approved</option>
            </select>
          </div>
        </div>
        <div className="bg-white p-5 flex flex-col sm:flex-row gap-5 justify-between">
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Product Access
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productAccess.flight"
                  checked={formData.productAccess.flight}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Flight</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productAccess.hotel"
                  checked={formData.productAccess.hotel}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Hotel</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productAccess.sightseeing"
                  checked={formData.productAccess.sightseeing}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Sightseeing</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="productAccess.packages"
                  checked={formData.productAccess.packages}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Packages</span>
              </label>
            </div>
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Menu Access
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="menuAccess.finance"
                  checked={formData.menuAccess.finance}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Finance</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="menuAccess.booking"
                  checked={formData.menuAccess.booking}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Booking</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="menuAccess.reports"
                  checked={formData.menuAccess.reports}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Reports</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="menuAccess.quotations"
                  checked={formData.menuAccess.quotations}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Quotations</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  name="menuAccess.administration"
                  checked={formData.menuAccess.administration}
                  onChange={handleChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Administration</span>
              </label>
            </div>
          </div>
        </div>

        <div className="bg-white pb-5 text-center">
          <button
            type="submit"
            className="px-6 py-2 bg-yellow-400 text-white rounded-lg shadow-lg hover:bg-yellow-500"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddAgents;
