import React from 'react';

const data = [
  { srNo: 1, city: 'New York', total: 5000 },
  { srNo: 2, city: 'London', total: 4500 },
  { srNo: 3, city: 'Paris', total: 4000 },
  { srNo: 4, city: 'Tokyo', total: 3800 },
  { srNo: 5, city: 'Dubai', total: 3600 },
  { srNo: 6, city: 'Sydney', total: 3400 },
  { srNo: 7, city: 'Singapore', total: 3200 },
  { srNo: 8, city: 'Hong Kong', total: 3000 },
  { srNo: 9, city: 'Bangkok', total: 2800 },
  { srNo: 10, city: 'Barcelona', total: 2600 },
];

const TopCityWisePurchase = () => {
  return (
    <div className="p-2 h-60">
      <h2 className="text-base font-bold mb-2 uppercase">Top Selling City Wise Purchase</h2>
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border px-4 py-2">SrNo</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.srNo}</td>
                <td className="border px-4 py-2">{entry.city}</td>
                <td className="border px-4 py-2">{entry.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopCityWisePurchase;
