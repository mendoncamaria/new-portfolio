import React, { useEffect, useRef } from 'react';
import Sunburst from 'sunburst-chart';

interface SunburstDataNode {
  name: string;
  size?: number;
  color?: string;
  children?: SunburstDataNode[];
}

interface SunburstChartProps {
  data: SunburstDataNode;
}

const SunburstChart: React.FC<SunburstChartProps> = ({ data }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    if (chartRef.current && data) {
      // @ts-expect-error Sunburst is not a type, but a function from the sunburst-chart library
      const myChart = Sunburst();
      myChart
        .data(data)
        .color('color')
        .width(window.innerWidth < 700 ? window.innerWidth : 700)
        .label('name') // Or your data's label key
        .size('size')(
        // Or your data's size key
        chartRef.current
      );
    }
  }, [data]); // Re-render if data changes

  return <div ref={chartRef} />;
};

export default SunburstChart;
