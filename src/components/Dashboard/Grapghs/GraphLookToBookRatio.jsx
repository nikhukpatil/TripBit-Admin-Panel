import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const data = [
  {
    name: 'Jun',
    Bookings: 96,
    Searches: 10,
  },
  {
    name: 'May',
    Bookings: 8,
    Searches: 4,
  },
];

const GraphLookToBookRatio = () => {
  return (
    <div className="p-2">
      <h2 className="text-base font-bold mb-2 uppercase">Look to Book Ratio</h2>
      <div className="flex justify-between bg-white">
        <div className="w-1/2 h-60">
          <BarChart width={300} height={240} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="Bookings" fill="#8884d8" name="Bookings" />
            <Bar dataKey="Searches" fill="#82ca9d" name="Searches" />
          </BarChart>
        </div>
        <div className="w-1/2 mt-10">
          <ul className="text-xs">
            {data.map((entry, index) => (
              <li key={`legend-${index}`} className="flex items-center mb-1">
                <span className="inline-block w-3 h-3 rounded-full mr-2 bg-[#8884d8]"></span>
                <span>{entry.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphLookToBookRatio;
