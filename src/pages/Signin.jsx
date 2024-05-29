import React from 'react';
import { useNavigate } from 'react-router-dom';
import LOGO from '../assets/logo.png';
import backgroundImg from '../assets/banner-admin.jpg';

const Signin = () => {
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    navigate('/dashboard');
  };

  return (
    <div
      className="flex h-screen items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
    >
      <div className="w-full sm:w-[420px] space-y-2 shadow-md bg-[#EAEAEC] -mt-24">
        <div className="flex flex-col items-center justify-center mb-4 bg-white p-5 gap-5">
          <img src={LOGO} alt="TripBit Logo" className="h-12" />
        </div>
        <form className="space-y-4 p-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email id"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </form>
        <div className="bg-white w-full flex items-center h-20 p-4">
          <button
            type="submit"
            onClick={handleSignIn}
            className="w-full py-2 px-4 bg-[#FFBE33] text-white rounded-md shadow hover:bg-[#A16207] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
           Log In
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
