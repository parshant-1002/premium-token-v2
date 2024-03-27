import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { options } from '../../helpers/constants';
import './style.scss';

const DoughnutChart = ({ series, innerTitle }) => {
    const [chartOptions, setChartOptions] = useState(options(innerTitle));
    useEffect(() => {
        setChartOptions(options(innerTitle));
    }, [innerTitle]);
    const chartHeight = window.innerWidth > 768 ? 500 : 300; // Adjust height based on screen width
    const chartWidth = window.innerWidth > 768 ? 500 : '100%'; // Adjust width based on screen widtinnerTitle
    // Dynamically calculate the left margin to center the chart on mobile innerTitleinnerTitleinneinnerTitle
    return <Chart key={innerTitle} width={chartWidth} height={chartHeight} options={chartOptions} series={series} type="donut" className="dough_chart" />    
};

export default DoughnutChart;