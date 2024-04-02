export const secondHalfColorOptions = ["#4C7570", "#256059", "#389989", "#71AFA5"]
export const firstHalfColorOptions = ["#031815", "#0D2624", "#1F423D", "#3D615D"]

export const colors = [...firstHalfColorOptions, ...secondHalfColorOptions];
export const options = (innerTitle, tokenSupply) => ({
    colors: [...firstHalfColorOptions, ...secondHalfColorOptions],
    chart: {
        fontFamily: "Sora",
        foreColor: '#fff',
        toolbar: {
            show: false,
        },
    },
    stroke: {
        colors: ["#111827"],
    },
    plotOptions: {
        pie: {
            donut: {
                labels: {
                    show: true,
                    name: {
                        show: true,
                        formatter: function (val) {
                            return innerTitle
                        }
                    },
                    value: {
                        show: true,
                        fontSize: window.innerWidth > 768 ? '24px' : '18px', // Adjust font size based on screen width
                        fontFamily: 'Lato',
                        fontWeight: 800,
                        color: "white",
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        fontSize: window.innerWidth > 768 ? '16px' : '14px', // Adjust font size based on screen width
                        fontFamily: 'Lato',
                        fontWeight: 800,
                        color: "#40d1b4",
                        formatter: function (w) {
                            return tokenSupply 
                        }
                    }
                },
                size: "70%",
                minAngleToShowLabel: 0,
            },
            minAngleToShowLabel: 0
        },
    },
    states: {
        hover: {
            filter: {
                type: "darken",
                value: 0.9,
            },
        },
    },
    tooltip: {
        enabled: true,
        // x: {
        //     formatter: function (val) {
        //         return 'Category: ' + val; // Customize the tooltip's x-axis label
        //     },
        // },
        y: {
            formatter: function (val) {
                return 'Value: ' + val + '%'; // Customize the tooltip's y-axis value
            },
        },
        custom: function ({ series, seriesIndex, dataPointIndex, w }) {
            return (
                '<div class="arrow_box">' +
                '<span>' + series[seriesIndex] + '%</span>' +
                '</div>'
            );
        }
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: true,
        distributed:true,
        formatter: function (val, opts) {
            const value = opts.w.config.series[opts.seriesIndex];
            return value % 1 === 0 ?
                `${parseInt(value)}%` :
                `${value.toFixed(1)}%`;
        },
        style: {
            fontSize: "16px",
            fontFamily: 'Lato',
        },
        offsetX: -25,
        position:"outside",
        rotate: -45,
        minAngleToShowLabel: 0,
    },
    legend: {
        show: false,
    },
    responsive: [{
        breakpoint: 768, // Breakpoint for mobile devices
        options: {
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            value: {
                                fontSize: '14px',
                            },
                            total: {
                                fontSize: '16px',
                            },
                        },
                    },
                },
            },
        },
    },
{
        breakpoint: 961, // Breakpoint for mobile devices
        options: {
            plotOptions: {
                pie: {
                    donut: {
                        labels: {
                            value: {
                                fontSize: '16px',
                            },
                        },
                    },
                },
            },
        },
    }],
});

export const BUTTON_LABELS = {
    Continue: "Continue"
}
export const mapDonutChartData = (data) => {
    return (data || []).map((value, index) => {
        return { label: '', value: value, color:  colors[index] }
    });
}