import React, { useState } from "react";
import { FiBarChart2, FiDownload } from "react-icons/fi";

const Reports = () => {
  const [reportType, setReportType] = useState("userActivity");

  const handleReportChange = (e) => {
    setReportType(e.target.value);
  };

  const downloadReport = () => {
    alert("Report downloaded!");
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center">
          <FiBarChart2 className="text-4xl text-gray-700 mr-4" />
          <h1 className="text-3xl font-bold">Reports</h1>
        </div>
        <button
          className="bg-yellow-500 text-white px-4 py-2 rounded flex items-center"
          onClick={downloadReport}
        >
          <FiDownload className="mr-2" />
          Download Report
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold mb-4">Report Filters</h2>
        <div className="flex mb-4">
          <select
            value={reportType}
            onChange={handleReportChange}
            className="border border-gray-300 p-2 rounded mr-4"
          >
            <option value="userActivity">User Activity</option>
            <option value="bookingStats">Booking Statistics</option>
            <option value="revenue">Revenue Reports</option>
          </select>
          <input
            type="date"
            className="border border-gray-300 p-2 rounded mr-4"
          />
          <input
            type="date"
            className="border border-gray-300 p-2 rounded"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        {reportType === "userActivity" && (
          <UserActivityReport />
        )}
        {reportType === "bookingStats" && (
          <BookingStatsReport />
        )}
        {reportType === "revenue" && (
          <RevenueReport />
        )}
      </div>
    </div>
  );
};

const UserActivityReport = () => {
  const activityData = [
    { id: 1, user: "John Doe", action: "Logged in", timestamp: "2023-05-15 14:32" },
    { id: 2, user: "Jane Smith", action: "Booked a flight", timestamp: "2023-05-15 13:27" },
    { id: 3, user: "Sam Johnson", action: "Logged out", timestamp: "2023-05-15 12:45" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">User Activity Report</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">User</th>
            <th className="px-4 py-2 border text-left">Action</th>
            <th className="px-4 py-2 border text-left">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {activityData.map((activity) => (
            <tr key={activity.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{activity.id}</td>
              <td className="px-4 py-2 border">{activity.user}</td>
              <td className="px-4 py-2 border">{activity.action}</td>
              <td className="px-4 py-2 border">{activity.timestamp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const BookingStatsReport = () => {
  const bookingData = [
    { id: 1, airline: "Delta", bookings: 150, date: "2023-05-15" },
    { id: 2, airline: "United", bookings: 120, date: "2023-05-14" },
    { id: 3, airline: "American", bookings: 90, date: "2023-05-13" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Booking Statistics Report</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Airline</th>
            <th className="px-4 py-2 border text-left">Bookings</th>
            <th className="px-4 py-2 border text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {bookingData.map((booking) => (
            <tr key={booking.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{booking.id}</td>
              <td className="px-4 py-2 border">{booking.airline}</td>
              <td className="px-4 py-2 border">{booking.bookings}</td>
              <td className="px-4 py-2 border">{booking.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const RevenueReport = () => {
  const revenueData = [
    { id: 1, source: "Flight Bookings", amount: 5000, date: "2023-05-15" },
    { id: 2, source: "Hotel Bookings", amount: 3000, date: "2023-05-14" },
    { id: 3, source: "Cab Bookings", amount: 1500, date: "2023-05-13" },
  ];

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Revenue Report</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="px-4 py-2 border text-left">ID</th>
            <th className="px-4 py-2 border text-left">Source</th>
            <th className="px-4 py-2 border text-left">Amount</th>
            <th className="px-4 py-2 border text-left">Date</th>
          </tr>
        </thead>
        <tbody>
          {revenueData.map((revenue) => (
            <tr key={revenue.id} className="hover:bg-gray-100">
              <td className="px-4 py-2 border">{revenue.id}</td>
              <td className="px-4 py-2 border">{revenue.source}</td>
              <td className="px-4 py-2 border">{revenue.amount}</td>
              <td className="px-4 py-2 border">{revenue.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;
