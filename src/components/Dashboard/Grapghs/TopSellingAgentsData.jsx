import React from 'react';

const data = [
  { srNo: 1, agency: 'Travel Co', bookings: 150, price: 2000, branch: 'New York' },
  { srNo: 2, agency: 'Holiday Tours', bookings: 130, price: 1800, branch: 'London' },
  { srNo: 3, agency: 'World Explorers', bookings: 120, price: 1700, branch: 'Paris' },
  { srNo: 4, agency: 'Globe Trotters', bookings: 110, price: 1600, branch: 'Tokyo' },
  { srNo: 5, agency: 'Adventure Seekers', bookings: 100, price: 1500, branch: 'Dubai' },
  { srNo: 6, agency: 'Voyage Ventures', bookings: 90, price: 1400, branch: 'Sydney' },
  { srNo: 7, agency: 'Jetsetters', bookings: 85, price: 1350, branch: 'Singapore' },
  { srNo: 8, agency: 'Travel Masters', bookings: 80, price: 1300, branch: 'Hong Kong' },
  { srNo: 9, agency: 'Holiday Planners', bookings: 75, price: 1250, branch: 'Bangkok' },
  { srNo: 10, agency: 'Trip Advisors', bookings: 70, price: 1200, branch: 'Barcelona' },
];

const TopSellingAgentsData = () => {
  return (
    <div className="p-2 h-60">
      <h2 className="text-base font-bold mb-2 uppercase">Top Selling Agents</h2>
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border px-4 py-2">SrNo</th>
              <th className="border px-4 py-2">Agency</th>
              <th className="border px-4 py-2">Bookings</th>
              <th className="border px-4 py-2">Price</th>
              <th className="border px-4 py-2">Branch</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.srNo}</td>
                <td className="border px-4 py-2">{entry.agency}</td>
                <td className="border px-4 py-2">{entry.bookings}</td>
                <td className="border px-4 py-2">{entry.price}</td>
                <td className="border px-4 py-2">{entry.branch}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingAgentsData;
