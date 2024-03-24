export const options = (innerTitle) => ({
    colors: ["#389989", "#175F53", "#083029", "#031815", "#031815", "#031815", "#175F53"],
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
                        color: "white"
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        fontSize: window.innerWidth > 768 ? '12px' : '10px', // Adjust font size based on screen width
                        fontFamily: 'Lato',
                        fontWeight: 800,
                        color: "#A7D7CF",
                        formatter: function (w) {
                            return innerTitle
                        }
                    }
                },
                size: "70%",
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
    },
    legend: {
        show: false,
    },
});

export const BUTTON_LABELS = {
    Continue: "Continue"
}