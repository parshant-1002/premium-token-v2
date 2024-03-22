export const SectionTypes = {
    HEADERS: 'headers',
    VIDEO_SECTION: 'videoSection',
    PRIZE_SECTION: 'prizeSection',
    WINNER_LIST_SECTION: 'winnerListSection',
    WINNER_RULES_SECTION: 'winnerRulesSection',
    CONTRACT_DETAILS: 'contractDetails',
    ROADMAP_SECTION: 'roadmapSection',
    PREMIUM_TOKEN_WALLET: 'premiumTokenWallet',
    EXTERNAL_AUDIT: 'externalAudit',
    TOKEN_INFO: 'tokenInfo',
    PREMIUM_MARKET_PLACE: 'premiumMarketPlace',
    TOKEN_SUPPLY: 'tokenSupply',
    JOIN_AIRDROP: 'joinAirdrop',
    PARTNERS: 'partners',
    FOOTERS: 'footers',
    FEATURES: 'features'
};

// Enum for headers
export const HeaderEnum = {
    TWITTER: 'twitter',
    DISCORD: 'discord',
    TELEGRAM: 'telegram',
    VIEW_CHART_BUTTON: 'viewChartButton',
    AIRDROP_BUTTON: 'airdropButton',
    BUY_TOKEN_BUTTON: 'buyTokenButton',
    PREMIUM_TOKEN_TITLE: 'premiumTokenTitle'
};

// Enum for videoSection
export const VideoSectionEnum = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    VIDEO_URL: 'videoUrl'
};

// Enum for prizeSection
export const PrizeSectionEnum = {
    LATEST_WINNER_DETAILS: 'latestWinnerDetails',
    MARKET_CAP: 'marketCap',
    TITLE: 'title',
    RULES_TO_WIN: 'rulesToWin'
};

// Enum for winnerListSection
export const WinnerListSectionEnum = {
    TOKEN_HOLDER_TEXT: 'tokenHolderText',
    PRIZE_DESCRIPTION: 'prizeDescription',
    CONNECT_WALLET_BUTTON_TEXT: 'connectWalletButtonText'
};

// Enum for winnerRulesSection
export const WinnerRulesSectionEnum = {
    TITLE: 'title',
    RULES: 'rules'
};

// Enum for contractDetails
export const ContractDetailsEnum = {
    TRANSPANCY: 'transpancy',
    GITHUB_TITLE: 'githubTitle',
    GITHUB_VIEW_BUTTON_TEXT: 'githubViewButtonText',
    GITHUB_VIEW_BUTTON_URL: 'githubViewButtonUrl',
    GITHUB_LOGO: 'githubLogo',
    CONTRACT_IMAGE_URL: 'contractImageUrl'
};

// Enum for roadmapSection
export const RoadmapSectionEnum = {
    TITLE: 'title',
    ROAD_MAP: 'roadMap'
};

// Enum for premiumTokenWallet
export const PremiumTokenWalletEnum = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    COMING_SOON_BUTTON_TEXT: 'comingSoonButtonText',
    IMAGE_URL: 'imageUrl'
};

// Enum for externalAudit
export const ExternalAuditEnum = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    IMAGE: 'image',
    URL: 'url',
    DOWNLOAD_DOC_BUTTON: 'downloadDocbutton',
    DOWNLOAD_DOC_URL: 'downloadDocURL'
};

// Enum for tokenInfo
export const TokenInfoEnum = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    ADDRESS: 'address',
    PREMIUM_TOKEN_BUTTON_TEXT: 'premiumTokenButtonText',
    EXTERNAL_AUDIT_BUTTON_TEXT: 'externalAuditButtonText',
    IMAGE_URL: 'imageUrl'
};

// Enum for premiumMarketPlace
export const PremiumMarketPlaceEnum = {
    TITLE: 'title',
    CARS: 'cars',
    DESCRIPTION: 'description'
};

// Enum for tokenSupply
export const TokenSupplyEnum = {
    TITLE: 'title',
    DESCRIPTION: 'description',
    INNER_TITLE: 'innerTitle',
    STATS: 'stats'
};

// Enum for joinAirdrop
export const JoinAirdropEnum = {
    SECTION_1: 'section1',
    TITLE: 'title',
    DESCRIPTION: 'description',
    SECTION_2: 'section2'
};

// Enum for partners
export const PartnersEnum = {
    TITLE: 'title',
    PERSON_DATA: 'personData'
};

// Enum for footers
const FootersEnum = {
    TWITTER: 'twitter',
    DISCORD: 'discord',
    TELEGRAM: 'telegram',
    AIRDROP: 'airdrop',
    EMAIL: 'email',
    PREMIUM_TOKEN_TITLE: 'premiumTokenTitle',
    FOLLOW_US_TITLE: 'followUsTitle',
    FOLLOW_US_DESCRIPTION: 'followUsDescription'
};

// Enum for features
const FeaturesEnum = {
    FEATURES: 'features'
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