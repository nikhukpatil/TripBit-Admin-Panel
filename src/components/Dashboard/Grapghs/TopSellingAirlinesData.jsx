import React from 'react';

const TopSellingAirlinesData = () => {
  const data = [
    { srNo: 1, airline: 'Emirates', bookings: 2000, markup: 250, price: 1200 },
    { srNo: 2, airline: 'Singapore Airlines', bookings: 1800, markup: 220, price: 1100 },
    { srNo: 3, airline: 'Qatar Airways', bookings: 1700, markup: 210, price: 1050 },
    { srNo: 4, airline: 'Lufthansa', bookings: 1600, markup: 200, price: 1000 },
    { srNo: 5, airline: 'British Airways', bookings: 1500, markup: 180, price: 950 },
    { srNo: 6, airline: 'Cathay Pacific', bookings: 1400, markup: 170, price: 900 },
    { srNo: 7, airline: 'Air France', bookings: 1300, markup: 160, price: 850 },
    { srNo: 8, airline: 'KLM', bookings: 1200, markup: 150, price: 800 },
    { srNo: 9, airline: 'Turkish Airlines', bookings: 1100, markup: 140, price: 750 },
    { srNo: 10, airline: 'Qantas', bookings: 1000, markup: 130, price: 700 },
  ];
  return (
    <div className="p-2 h-60">
      <h2 className="text-base font-bold mb-2">TOP SELLING AIRLINE</h2>
      <div className="overflow-y-auto h-full">
        <table className="w-full text-sm bg-white">
          <thead className="sticky top-0 bg-white">
            <tr>
              <th className="border px-4 py-2">SrNo</th>
              <th className="border px-4 py-2">Airline</th>
              <th className="border px-4 py-2">Bookings</th>
              <th className="border px-4 py-2">Markup</th>
              <th className="border px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((entry, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{entry.srNo}</td>
                <td className="border px-4 py-2">{entry.airline}</td>
                <td className="border px-4 py-2">{entry.bookings}</td>
                <td className="border px-4 py-2">{entry.markup}</td>
                <td className="border px-4 py-2">{entry.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TopSellingAirlinesData;
