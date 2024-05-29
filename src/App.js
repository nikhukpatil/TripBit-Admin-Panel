import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Flights from './pages/Flights';
import Accounts from './pages/Accounts';
import CMS from './pages/CMS';
import Dashboard from './pages/Dashboard';
import Hotels from './pages/Hotels';
import Reports from './pages/Reports';
import HR from './pages/Hr';
import Branch from './pages/Branch';
import Roles from './pages/Roles';
import Security from './pages/Security';
import Group from './pages/Group';
import Permission from './pages/Permission';
import Agents from './pages/Agents';
import Customers from './pages/Customers';
import Employee from './pages/Employee';
import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Layout from './pages/Layout';
import AdminProfile from './pages/AdminProfile';
import AccountSetting from './pages/AccountSetting';

function App() {
  return (
    <Routes>
      {/* Authentication Routes */}
      <Route path="/" element={<Signin />} />
      <Route path="/signup" element={<SignUp />} />

      {/* Main Layout */}
      <Route path="/" element={<Layout />}>
        {/* Main Headings */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="flights" element={<Flights />} />
        <Route path="hotels" element={<Hotels />} />
        <Route path="accounts" element={<Accounts />} />
        <Route path="hr" element={<HR />} />
        <Route path="reports" element={<Reports />} />
        <Route path="cms" element={<CMS />} />

        {/* Sub Headings of Utilities */}
        <Route path="utilities/branch" element={<Branch />} />
        <Route path="utilities/roles" element={<Roles />} />
        <Route path="utilities/security" element={<Security />} />
        <Route path="utilities/group" element={<Group />} />
        <Route path="utilities/permission" element={<Permission />} />

        {/* Sub Headings of Users */}
        <Route path="users/agents" element={<Agents />} />
        <Route path="users/customers" element={<Customers />} />
        <Route path="users/employee" element={<Employee />} />

        {/* Admin Profile */}
        <Route path="/admin-profile" element={<AdminProfile />} />
        <Route path="/account-setting" element={<AccountSetting />} />

        {/* Redirect if any incorrect route */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Route>
    </Routes>
  );
}

export default App;
