import React from 'react';
import Chart from "react-apexcharts";

const DoughnutChart = ({ series, options }) => {
    return <Chart width={500} height={500} options={options} series={series} type="donut" />    
};

export default DoughnutChart;