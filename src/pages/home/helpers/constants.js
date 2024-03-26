export const secondHalfColorOptions = ["#4C7570", "#256059", "#389989", "#71AFA5"]
export const firstHalfColorOptions = ["#031815", "#0D2624", "#1F423D", "#3D615D"]
export const options = (innerTitle) => ({
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
                            return "TOTAL TOKENS"
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
                        color: "#A7D7CF",
                        formatter: function (w) {
                            return innerTitle 
                        }
                    }
                },
                size: "70%",
                minAngleToShowLabel: 10,
            },
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
        enabled: false
    },
    grid: {
        show: false,
    },
    dataLabels: {
        enabled: true,
        formatter: function (val, opts) {
            const value = opts.w.config.series[opts.seriesIndex];
            return value % 1 === 0 ?
                `${parseInt(value)}%` :
                `${value.toFixed(1)}%`;
        },
        style: {

            fontSize: "6px"
        }
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