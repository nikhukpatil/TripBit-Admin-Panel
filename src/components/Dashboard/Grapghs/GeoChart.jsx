import React from 'react';
import { Chart } from 'react-google-charts';

const data = [
  ['Country', 'Popularity'],
  ['Germany', 200],
  ['United States', 300],
  ['Brazil', 400],
  ['Canada', 500],
  ['France', 600],
  ['RU', 700],
];

const options = {
  region: 'world',
  colorAxis: { colors: ['#e0f7fa', '#006064'] },
  backgroundColor: '#81d4fa',
  datalessRegionColor: '#f8bbd0',
  defaultColor: '#f5f5f5',
  enableRegionInteractivity: true,
  tooltip: { isHtml: true },
};

const GeoChart = () => {
  const handleMouseOver = (event) => {
    const regions = document.querySelectorAll('.google-visualization-geochart-region');
    regions.forEach((region) => {
      region.addEventListener('mouseover', () => {
        region.style.fill = 'yellow';
      });
      region.addEventListener('mouseout', () => {
        region.style.fill = '';
      });
    });
  };

  return (
    <div>
      <Chart
        chartType="GeoChart"
        width="100%"
        height="500px"
        data={data}
        options={options}
        chartEvents={[
          {
            eventName: 'ready',
            callback: ({ chartWrapper }) => {
              handleMouseOver(chartWrapper.getChart());
            },
          },
        ]}
      />
    </div>
  );
};

export default GeoChart;
