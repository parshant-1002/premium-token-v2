import React, { useEffect, useState } from 'react';
import Chart from "react-apexcharts";
import { options } from '../../helpers/constants';
import './style.scss';
import { useSelector } from 'react-redux';

const DoughnutChart = ({ series, innerTitle }) => {
    const blockChainData = useSelector((store) => store.contentManagementReducer.blockChainData)
    const [chartOptions, setChartOptions] = useState(null);

    useEffect(()=>{
        if(innerTitle && blockChainData?.tokenSupply){
            setChartOptions(()=>options(innerTitle, blockChainData?.tokenSupply))
        }
    },[blockChainData, innerTitle])

    const chartHeight = window.innerWidth > 768 ? 500 : 300; 
    const chartWidth = window.innerWidth > 768 ? 500 : '100%'; 
    return chartOptions ? <Chart key={blockChainData?.tokenSupply} width={chartWidth} height={chartHeight} options={chartOptions} series={series} type="donut" className="dough_chart" /> :
        <Chart key={blockChainData?.tokenSupply} width={chartWidth} height={chartHeight} options={options(innerTitle, "100,000")} series={series} type="donut" className="dough_chart" />

};

export default DoughnutChart;