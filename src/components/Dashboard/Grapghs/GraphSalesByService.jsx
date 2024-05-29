import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

const data = [
    { name: 'Flight', value: 5, count: 5 },
    { name: 'Hotel', value: 11, count: 11 },
];

const COLORS = ['#3366CC', '#00C49F', '#FFBB28'];

const GraphSalesByService = () => {
  const totalCount = 16;

  return (
    <div className="p-2">
      <h2 className="text-base font-bold mb-2">SALES BY SERVICE</h2>
      <div className="flex justify-between bg-white">
        <div className="w-1/2">
          <PieChart width={200} height={200}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              outerRadius={50}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={(value) => `${((value / totalCount) * 100).toFixed(2)}%`}
              content={({ payload }) => {
                if (payload && payload.length) {
                  const { payload: tooltipData } = payload[0];
                  return (
                    <div className="text-xs p-2 border bg-gray-300 rounded">
                      {tooltipData.name}
                      <p className=' font-bold'>{tooltipData.value} ({((tooltipData.value / totalCount) * 100).toFixed(2)}%)</p>
                    </div>
                  );
                }
                return null;
              }}
            />
          </PieChart>
        </div>
        <div className="w-1/2 mt-10">
          <ul className="text-xs">
            {data.map((entry, index) => (
              <li key={`legend-${index}`} className="flex items-center mb-1">
                <span className="inline-block w-3 h-3 rounded-full mr-2" style={{ backgroundColor: COLORS[index % COLORS.length] }}></span>
                <span>{entry.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GraphSalesByService;
