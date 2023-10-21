import React, { useEffect, useRef, useState } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { ChevronDown, HelpCircle } from 'lucide-react';

const DonutChart = () => {

  const COLORS = ['#FF823C', '#0096FF', '#323C46'];

  const [selectedMetric, setSelectedMetric] = useState('Clicks');

  const metricData = {
    Clicks: [
      { name: 'Male', value: 30.39, color: '#FF823C' },
      { name: 'Female', value: 60.43, color: '#0096FF' },
      { name: 'Unknown', value: 9.17, color: '#323C46' },
    ],
    Cost: [
      { name: 'Male', value: 30.27, color: '#FF823C' },
      { name: 'Female', value: 60.19, color: '#0096FF' },
      { name: 'Unknown', value: 9.52, color: '#323C46' },
    ],
    Conversion: [
      { name: 'Male', value: 52.5, color: '#FF823C' },
      { name: 'Female', value: 43.75, color: '#0096FF' },
      { name: 'Unknown', value: 3.75, color: '#323C46' },
    ],
    Revenue: [
      { name: 'Male', value: 86.53, color: '#FF823C' },
      { name: 'Female', value: 7.20, color: '#0096FF' },
      { name: 'Unknown', value: 6.25, color: '#323C46' },
    ],

  };
  const selectedData = metricData[selectedMetric];

  return (
    <>
      <div className='flex justify-between px-3 py-2 sm:px-3 sm:py-2 md:px-4 md:py-3 lg:px-4 lg:py-3 border-b'>
        <p className="text-sm font-semibold lg:text-base">
          Ad Insights
        </p>
        <div className='flex space-x-4'>
          <select
            value={selectedMetric}
            onChange={(e) => setSelectedMetric(e.target.value)}
            className='ring-1 ring-gray-300 outline-none rounded-sm'
          >
            <option value="Clicks">Clicks</option>
            <option value="Cost">Cost</option>
            <option value="Conversion">Conversion</option>
            <option value="Revenue">Revenue</option>
          </select>
          <HelpCircle className='w-5 h-5 lg:w-6 lg:h-6 opacity-10' />
        </div>
      </div>

      <div className="sm:flex sm:items-center sm:justify-between pb-20 md:flex md:items-center md:justify-between lg:flex lg:items-center lg:justify-between">
        {selectedData ? (
          <ResponsiveContainer height={300} width="100%">
            <PieChart>
              <Pie
                data={selectedData}
                dataKey="value"
                nameKey="name"
                innerRadius={75}
                outerRadius={120}
                paddingAngle={2}
                cornerRadius={0}
                startAngle={0}
                endAngle={360}
              >
                {selectedData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  background: '#fff',
                  border: '1px solid #ccc',
                  borderRadius: '10px',
                  fontSize: '11px',
                  padding: '0 10px 0 10px'
                }}
                formatter={(value, entry) => {
                  return (
                    <>
                      <span className='text-gray-700 text-xs inter font-semibold'>
                        {`${value.toFixed(0)}%`}
                      </span>
                    </>
                  )
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        ) : (
          <p>No data available for the selected metric.</p>
        )}

        <div className='flex flex-col items-center space-y-4 px-14'>
          {selectedData &&
            selectedData.map((entry, index) => (
              <div
                key={`label-${index}`}
                className='flex items-center justify-start space-x-2 w-44 font-semibold lg:font-medium'
              >
                <span
                  style={{ backgroundColor: COLORS[index % COLORS.length] }}
                  className='w-12 h-[0.95rem] rounded-md'
                ></span>
                <span className='text-sm lg:text-base'>{`${entry.value.toFixed(0)}%`}</span>
                <span className='text-sm lg:text-base'>{entry.name}</span>
              </div>
            ))}
        </div>
      </div>
    </>

  );
};

export default DonutChart;
