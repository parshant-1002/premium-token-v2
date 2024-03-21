const SectionTypes = {
    HEADER: 'headers',
    VIDEO_SECTION: 'videoSection',
    PRIZE_SECTION: 'prizeSection',
    WINNER_LIST_SECTION: 'winnerListSection',
    WINNER_RULES_SECTION: 'winnerRulesSection',
    CONTRACT_DETAILS: 'contractDetails',
    ROADMAP_SECTION: 'roadmapSection',
    EXTERNAL_AUDIT: 'externalAudit',
    PREMIUM_MARKETPLACE: 'premiumMarketPlace',
    TOKEN_SUPPLY: 'tokenSupply',
    JOIN_AIRDROP: 'joinAirdrop',
    PARTNERS: 'partners',
    FOOTER: 'footers'
};

const ButtonTypes = {
    VIEW_CHART: 'viewChartButton',
    AIRDROP: 'airdropButton',
    BUY_TOKEN: 'buyTokenButton'
};

const SocialMediaTypes = {
    TWITTER: 'twitter',
    DISCORD: 'discord',
    TELEGRAM: 'telegram'
};


export const options = {
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
                        fontSize: '24px',
                        fontFamily: 'Lato',
                        fontWeight: 800,
                        color: "white"
                    },
                    total: {
                        show: true,
                        showAlways: true,
                        fontSize: '12px',
                        fontFamily: 'Lato',
                        fontWeight: 800,
                        color: "#A7D7CF",
                        formatter: function (w) {
                            return "888,888,888,888,888"
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
};
export const series = [65, 10, 10, 5, 4.5, 4.5, 1];