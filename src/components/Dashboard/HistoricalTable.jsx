import React from 'react';

const HistoricalTable = () => {
  return (
      <div className="overflow-x-auto">
        <p className="font-bold my-4">HISTORICAL STATISTICS & FORECAST (TABLE FIGURES BASED ON ALL STATUS)</p>
      <table className="min-w-full bg-white text-xs">
        <thead>
          <tr className='bg-[#FFBE33] text-white'>
            <th className="px-4 py-2 border">YEAR</th>
            <th className="px-4 py-2 border">JAN</th>
            <th className="px-4 py-2 border">FEB</th>
            <th className="px-4 py-2 border">MAR</th>
            <th className="px-4 py-2 border">APR</th>
            <th className="px-4 py-2 border">MAY</th>
            <th className="px-4 py-2 border">JUN</th>
            <th className="px-4 py-2 border">JUL</th>
            <th className="px-4 py-2 border">AUG</th>
            <th className="px-4 py-2 border">SEP</th>
            <th className="px-4 py-2 border">OCT</th>
            <th className="px-4 py-2 border">NOV</th>
            <th className="px-4 py-2 border">DEC</th>
            <th className="px-4 py-2 border">TOTAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className=' bg-gray-300'>
            <td className="px-4 py-2 border font-bold" rowSpan="2">2024</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">AED 12853.46</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border">NA</td>
            <td className="px-4 py-2 border font-bold">AED 12853.46</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border"></td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
            <td className="px-4 py-2 border">-</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HistoricalTable;
