export const data = {
    labels: ['65%', '10%', '10%', '5%', '4.5%', '4.5%', '1%'],
    datasets: [{
        data: [65, 10, 10, 5, 4.5, 4.5, 1],
        backgroundColor: [
            '#389989',
            '#0D2624',
            '#1F423D',
            '#3D615D',
            '#637371',
            '#256059',
            '#031815',
        ],
        hoverOffset: 4
    }]
};
export const options = {
    maintainAspectRatio: false,
    cutout: '70%',
    plugins: {
        legend: {
            display: false, // This will remove the legend
        },
        tooltip: {
            enabled: false, // This disables tooltips
        },
        datalabels: {
            display: true,
            color: '#fff',
            font:  (context) => {
                // Dynamically adjust font size based on the value of the segment
                const value = context.dataset.data[context.dataIndex];
                console.log(value,"context")
                if (value >= 10) return { size: 16};  // For larger segments
                if (value >= 5) return { size: 14 };   // For medium segments
                return { size: 12 };                   // For smaller segments
                
            },
            formatter: (value, context) => {
                return context.chart.data.labels[context.dataIndex];
            },
            offset: (context) => {
                // Calculate offset based on the circumference of the segment
                const circumference = context.chart.getDatasetMeta(0).data[context.dataIndex].circumference;
                return circumference > Math.PI ? 8 : 16; // if the segment is larger than half the circle, use a set offset
            },
            anchor: 'end',
            align: 'start',
        },
    },
    elements: {
        arc: {
            borderWidth: 0, // This will remove the chart border
        },
    },
};