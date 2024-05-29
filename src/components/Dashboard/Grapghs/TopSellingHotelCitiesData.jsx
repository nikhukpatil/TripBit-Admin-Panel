import React from 'react';

const TopSellingHotelCitiesData = () => {
  const data = [
    { srNo: 1, city: 'New York', count: 1500, totalPrice: 3000 },
    { srNo: 2, city: 'London', count: 1300, totalPrice: 2800 },
    { srNo: 3, city: 'Paris', count: 1200, totalPrice: 2600 },
    { srNo: 4, city: 'Tokyo', count: 1100, totalPrice: 2400 },
    { srNo: 5, city: 'Dubai', count: 1000, totalPrice: 2200 },
    { srNo: 6, city: 'Sydney', count: 900, totalPrice: 2100 },
    { srNo: 7, city: 'Singapore', count: 850, totalPrice: 2000 },
    { srNo: 8, city: 'Hong Kong', count: 800, totalPrice: 1900 },
    { srNo: 9, city: 'Bangkok', count: 750, totalPrice: 1800 },
    { srNo: 10, city: 'Barcelona', count: 700, totalPrice: 1700 },
  ];

  return (
    <div className="p-2 h-60">
      <h2 className="text-base font-bold mb-2 uppercase">Top Selling Hotel Cities</h2>
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border px-4 py-2">SrNo</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Count</th>
              <th className="border px-4 py-2">Total Pirce</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.srNo}</td>
                <td className="border px-4 py-2">{entry.city}</td>
                <td className="border px-4 py-2">{entry.count}</td>
                <td className="border px-4 py-2">{entry.totalPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingHotelCitiesData;
