import { ICONS, VIDEOS } from "../../../assets";

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
    // FEATURES: 'features',
    FEATURE_SECTION:"featureSection"
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
    CONNECT_WALLET_BUTTON_TEXT: 'connectWalletButtonText',
    PRIZE:"prize"
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




export const DEFAULT_CONTENT = {
    [SectionTypes.HEADERS]: {
        [HeaderEnum.TWITTER]: {
            "url": "https://twitter.com/clashdotgg",
            "image": ICONS.Twitter
        },
        [HeaderEnum.DISCORD]: {
            "url": "https://discord.com/",
            "image": ICONS.Discord
        },
        [HeaderEnum.TELEGRAM]: {
            "url": "https://web.telegram.org/z/",
            "image": ICONS.Telegram,
        },
        [HeaderEnum.VIEW_CHART_BUTTON]: {
            "url": "https://codesandbox.io/p/devbox/reactchartjs-react-chartjs-2-default-t64th?embed=1&file=%2Findex.html",
            "text": "View Chart"
        },
        [HeaderEnum.AIRDROP_BUTTON]: {
            "url": "https://dsfklsfksdsfk",
            "image": ICONS.Airdrop,
            "text": "Join Airdrop"
        },
        [HeaderEnum.BUY_TOKEN_BUTTON]: {
            "url": "https://discord.com/",
            "text": "Buy Token"
        },
        [HeaderEnum.PREMIUM_TOKEN_TITLE]: ICONS.Logo
    },
    [SectionTypes.VIDEO_SECTION]: {
        "title": "PlatinumCars explains about PremiumToken",
        "description": "Watch our partner PlatinumCars, one of the biggest premium car dealerships in Sweden, talk and explain about how PremiumToken works and how you can win a $350,000 premium car from them.",
        "videoUrl": VIDEOS.DemoVideo,
    },
    [SectionTypes.FEATURES]: {
        "features": [
            "/uploads/files/car (2)_1711141939258.svg"
        ],
        "title": "dsadsad"
    },
    [SectionTypes.PRIZE_SECTION]: {
        [PrizeSectionEnum.LATEST_WINNER_DETAILS]: {
            "title": "Latest winners",
            "description": "<p>In the list below can you see all latest winners that the smart contract has drawn for each increase of $10 million market cap. The contract draws the winners automatic and all holders that hold minimum 1000 tokens have a chance of winning, the winners can choose a prize between $350,000 worth of PremiumToken or a premium car from our partners worth $350,000.</p>"
        },
        [PrizeSectionEnum.MARKET_CAP]: {
            "title": "MARKET CAP",
            "marketCapValue": 2000000000,
            "description": "<p>The smart contract will draw the next winner at $X million market cap!</p>"
        },
        [PrizeSectionEnum.TITLE]: "How to win a $350,000 prize",
        [PrizeSectionEnum.RULES_TO_WIN]: [
            {
                "imageUrl": ICONS.RulesToWin1,
                "description": "<p>Click on the Buy button or go to Raydium.io to buy PremiumToken for Solana</p>"
            },
            {
                "imageUrl": ICONS.RulesToWin2,
                "description": "<p>Hold minimum of 1000 tokens in you wallet and get a chance to win a $350,000 prize</p>"
            },
            {
                "imageUrl": ICONS.RulesToWin3,
                "description": "<p>The smart contract draws a new winners automatic at each $10 million market cap</p>"
            },
            {
                "imageUrl": ICONS.RulesToWin4,
                "description": "The longer you hold PremiumToken, and the more PremiumTokens you have, the bigger chance of winning."
            }
        ]
    },
    [SectionTypes.WINNER_LIST_SECTION]: {
        [WinnerListSectionEnum.TOKEN_HOLDER_TEXT]: "Token holders that joined automatic:",
        [WinnerListSectionEnum.PRIZE_DESCRIPTION]: "Did you win a prize?",
        [WinnerListSectionEnum.CONNECT_WALLET_BUTTON_TEXT]: "Connect wallet",
        [WinnerListSectionEnum.PRIZE]: [
            {
                "type": "2",
                "imageUrl": ICONS.PrizeTypeToken
            },
            {
                "type": "1",
                "imageUrl": ICONS.PrizeTypeCar
            }
        ]
    },
    [SectionTypes.WINNER_RULES_SECTION]: {
        "title": "Did you win?",
        "rules": [
            {
                "imageUrl": ICONS.WinnerRulesSection1,
                title:"Connect your wallet",
                "description": "<p>If you see your wallet address on the winners list, connect your wallet, its integrated with Web3 API and it’s 100% secure!</p>"
            },
            {
                "imageUrl": ICONS.WinnerRulesSection2,
                title:"Enter your contact information",
                "description": "<p>Fill our your email and your WhatsApp, skype or Telegram and we will contact you shortly, be sure to double check your information before sending in the information to us, your wallet address will be added automatic when you connect your wallet.</p>"
            },
            {
                "imageUrl": ICONS.WinnerRulesSection3,
                title:"Choose your prize",
                "description": "You can choose between $350,000 worth of PremiumToken or one or several cars from our partners to a total value of $350,000, it will be delivered to you free of charge!"
            },
            {
                "imageUrl": ICONS.WinnerRulesSection4,
                title:"Wait to be contacted",
                "description": "As soon as you have submitted your information, we will reach out to you from winners@premiumtoken.com or on WhatsApp, Skype or Telegram if we cant reach you on email. If you have not selected your prize within 7 days, you will be given $350,000 worth of tokens automatic!"
            }
        ]
    },
}