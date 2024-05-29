import React from 'react';

const data = [
  { srNo: 1, hotel: 'The Plaza', city: 'New York', nights: 100, price: 1500 },
  { srNo: 2, hotel: 'The Ritz', city: 'London', nights: 90, price: 1400 },
  { srNo: 3, hotel: 'Hotel de Crillon', city: 'Paris', nights: 85, price: 1300 },
  { srNo: 4, hotel: 'The Peninsula', city: 'Tokyo', nights: 80, price: 1200 },
  { srNo: 5, hotel: 'Burj Al Arab', city: 'Dubai', nights: 75, price: 1100 },
  { srNo: 6, hotel: 'Four Seasons', city: 'Sydney', nights: 70, price: 1000 },
  { srNo: 7, hotel: 'Marina Bay Sands', city: 'Singapore', nights: 65, price: 900 },
  { srNo: 8, hotel: 'Mandarin Oriental', city: 'Hong Kong', nights: 60, price: 800 },
  { srNo: 9, hotel: 'The Siam', city: 'Bangkok', nights: 55, price: 700 },
  { srNo: 10, hotel: 'W Barcelona', city: 'Barcelona', nights: 50, price: 600 },
];

const TopHotelsData = () => {
  return (
    <div className="p-2 h-60 mt-10">
      <h2 className="text-base font-bold mb-2 uppercase">Top Selling Hotels </h2>
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border px-4 py-2">SrNo</th>
              <th className="border px-4 py-2">Hotel</th>
              <th className="border px-4 py-2">City</th>
              <th className="border px-4 py-2">Nights</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.srNo}</td>
                <td className="border px-4 py-2">{entry.hotel}</td>
                <td className="border px-4 py-2">{entry.city}</td>
                <td className="border px-4 py-2">{entry.nights}</td>
                <td className="border px-4 py-2">{entry.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopHotelsData;
