import React from 'react';
import { LineChart, Line, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const data = [
  { name: 'Jan', sales: 0 },
  { name: 'Feb', sales: 0 },
  { name: 'Mar', sales: 0 },
  { name: 'Apr', sales: 0 },
  { name: 'May', sales: 0 },
];

const CompanyPerformanceGraph = () => {
  return (
    <div className="p-2 overflow-hidden">
      <h2 className="text-base font-bold mb-2 uppercase ">Company Performance</h2>
      <div className="bg-white h-60 overflow-hidden">
        <LineChart width={550} height={240} data={data} >
          <CartesianGrid  />
          <YAxis tick={<CustomYAxisTick />} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sales" stroke="#8884d8"  />
        </LineChart>
      </div>
    </div>
  );
};

const CustomYAxisTick = ({ x, y, payload }) => {
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={0} dy={16} textAnchor="end" fill="#666">{payload.value}</text>
    </g>
  );
};

export default CompanyPerformanceGraph;
