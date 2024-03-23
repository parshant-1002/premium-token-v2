import React from 'react';
import Chart from "react-apexcharts";
import './style.scss';

const DoughnutChart = ({ series, options }) => {
    return <Chart width={500} height={500} options={options} series={series} type="donut" className="dough_chart" />    
};

export default DoughnutChart;