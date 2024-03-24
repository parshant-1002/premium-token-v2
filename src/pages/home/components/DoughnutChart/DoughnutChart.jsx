import React from 'react';
import Chart from "react-apexcharts";
import './style.scss';

const DoughnutChart = ({ series, options }) => {
    const chartHeight = window.innerWidth > 768 ? 500 : 300; // Adjust height based on screen width
    const chartWidth = window.innerWidth > 768 ? 500 : '100%'; // Adjust width based on screen width
    // Dynamically calculate the left margin to center the chart on mobile 
    return <Chart width={chartWidth} height={chartHeight} options={options} series={series} type="donut" className="dough_chart" />    
};

export default DoughnutChart;