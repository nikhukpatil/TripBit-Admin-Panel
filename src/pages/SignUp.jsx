import React from 'react';
import { Link } from 'react-router-dom';
import LOGO from '../assets/logo.png'


const SignUp = () => {
  return (
    <div className="flex h-screen">
      {/* Signin Form */}
      <div className="w-1/2 flex items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-6 rounded shadow-md">
          <div>

          <h2 className="text-2xl font-bold">Sign Up</h2>
          <p>Already have an account?  <Link to="/signin" className="font-medium text-blue-600 hover:text-blue-500">Sign in</Link></p> 
          </div>
          <form className="space-y-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                Password <span className="text-red-500">*</span>
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-900">
                  I agree with <Link className=' text-blue-600'> Terms </Link>  and <Link className=' text-blue-600'>  Privacy Policy </Link>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-yellow-600 text-white rounded-2xl shadow hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Pattern */}
      <div className="w-1/2 bg-gray-500 flex items-center justify-center">
        <img src={LOGO} alt="TripBit Logo" className="" />
      </div>
    </div>
  );
};

export default SignUp;
