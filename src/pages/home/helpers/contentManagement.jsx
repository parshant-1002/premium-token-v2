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
    [SectionTypes.CONTRACT_DETAILS]: {
        "transpancy": {
            "title": "Transparency",
            "description": "<p>To show all our holders that PremiumToken is fair, honest and transparent so have we added our code of the smart contract on our website for all visitors and holders to review it. You can also watch the full source code on GitHub.</p>"
        },
        "githubTitle": "Transparency",
        "githubViewButtonText": "Transparency",
        "githubViewButtonUrl": "Transparency",
        "githubLogo": "/uploads/files/Frame 9441_1711140826826.svg",
        "contractImageUrl": "/uploads/files/Social Icons (1)_1711030358805.svg"
    },
    [SectionTypes.ROADMAP_SECTION]: {
        "title": "Roadmap of PremiumToken",
        "roadMap": [
            {
                "level": "1",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><span style=\"white-space-collapse: preserve;\"><br></span><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><br></span><br></p>"
            },
            {
                "_id": "65fdf0762de95a80fbfbb0af",
                "level": "1",
                "description": "<p><span style=\"white-space-collapse: preserve;\">Reach $10 million market cap<br></span><span style=\"white-space-collapse: preserve;\">Completed after: 7 days<br><br></span><span style=\"white-space-collapse: preserve;\"><br></span><br></p>"
            }
        ]
    },
    [SectionTypes.PREMIUM_TOKEN_WALLET]: {
        "title": "PremiumToken Wallet",
        "description": "We have plans to develop our own wallet for PremiumToken, where we want to add so all our holders can have their own debit card to use and spend PremiumTokens with if they want to. We are currently looking in to potential whitelabel partners that can help us with getting virtual debit cards and potentially real debit cards as well, stay tuned!",
        "comingSoonButtonText": "https://nothing.com",
        "imageUrl": "/uploads/files/img_1711141237011.png"
    },
    [SectionTypes.EXTERNAL_AUDIT]: {
        "title": "External audit",
        "description": "We want to show all current and future holders that its nothing fishy about PremiumToken, therefore we orderd an external audit from Analytix Audit, you can click on the link to view it or download the full audit by clicking on the download button.",
        "image": "/uploads/files/img (2)_1711141759681.svg",
        "url": "https://moralis.io/solana-smart-contract-examples-for-developers/",
        "downloadDocbutton": "Download document",
        "downloadDocURL": "https://moralis.io/solana-smart-contract-examples-for-developers/"
    },
    [SectionTypes.TOKEN_INFO]: {
        "title": "Token Info",
        "description": "Here below can you easily see and copy PremiumtToken’s contract address, if you wish to buy tokens or add the token to your wallet. You can also check PremiumToken on Solscan.io or view the externa audit!",
        "address": "xfsde3eedsd1e12wdsadasd",
        "premiumTokenButtonText": "PremiumToken on Solscan.io",
        "externalAuditButtonText": "View the External Audit",
        "imageUrl": "/uploads/files/img (1)_1711141633254.svg"
    },
    [SectionTypes.PREMIUM_MARKET_PLACE]: {
        "title": "Premium marketplace",
        "cars": [
            {
                "_id": "65fdf4892de95a80fbfbb19b",
                "title": "Lamborghini Urus",
                "imageUrl": "/uploads/files/car_1711141902134.svg"
            },
            {
                "_id": "65fdf4892de95a80fbfbb19c",
                "title": "Lamborghini Aventador",
                "imageUrl": "/uploads/files/car (1)_1711141919432.svg"
            },
            {
                "_id": "65fdf4892de95a80fbfbb19d",
                "title": "Lamborghini Huracan",
                "imageUrl": "/uploads/files/car (2)_1711141939258.svg"
            }
        ],
        "description": "<p>dsadasddasdas</p>"
    },
    [SectionTypes.TOKEN_SUPPLY]: {
        "title": "Token supply",
        "description": "Here you can see how the full token supply is divided, you can also see the wallet addresses, to see that they will never be used for anything other then what they are intended for and that they can not be drawn as a winner by the smart contract.",
        "innerTitle": "888,888,888,888,888",
        "stats": [
            {
                "_id": "65fdf7222de95a80fbfbb1e3",
                "title": "AirDrop",
                "subTitle": "Wallet address: ....... ",
                "description": "<p>dasdsasadasd</p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e4",
                "title": "Contest and events",
                "subTitle": "Wallet address: ....... ",
                "description": "<p><span style=\"white-space-collapse: preserve;\">0.75% of the tokens will be used for different contests and events in the future for our holders.</span><br></p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e5",
                "title": "Development",
                "subTitle": "Wallet address: ....... ",
                "description": "<p><span style=\"white-space-collapse: preserve;\">2.5% of the tokens will be used for development of PremiumToken, to improve it and develop new dapps, features, wallet and marketplaces in the future.</span><br></p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e6",
                "title": "Founders",
                "subTitle": "Wallet address: ....... ",
                "description": ""
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e7",
                "title": "Development",
                "subTitle": "Prize for Winners",
                "description": "<p><span style=\"white-space-collapse: preserve;\">5% of the tokens will be used for the winners that the smart contract draws, to purchase the premium car of their choice or by giving them $350,000 worth of PremiumToken.</span><br></p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e8",
                "title": "Marketing",
                "subTitle": "Wallet address: ....... ",
                "description": "<p><span style=\"white-space-collapse: preserve;\">10% of the tokens will be used marketing of PremiumToken, with the help of the community and paying for marketing and advertising, it wont take long until we reach $1B market cap.</span><br></p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1e9",
                "title": "Burning",
                "subTitle": "Wallet address: ....... ",
                "description": "<p><span style=\"white-space-collapse: preserve;\">12.5% of the tokens will be burnt overtime, to lower the supply and increase the price per token.</span><br></p>"
            },
            {
                "_id": "65fdf7222de95a80fbfbb1ea",
                "title": "To excanges and token holders",
                "subTitle": "Wallet address: ....... ",
                "description": "<p><span style=\"white-space-collapse: preserve;\">65% of the tokens will be used for for swaps and exchanges, so more people can notice and buy PremiumToken. The more exchanges we get listed on, the more people will notice us and the more holders we will get and that will help this community grow even faster!</span><br></p>"
            }
        ]
    },
    [SectionTypes.JOIN_AIRDROP]: {
        "section1": {
            "title": "Get whitelisted for AirDrop",
            "buttonText": "Submit airdrop",
            "whitelistForAirDrop": [
                {
                    "_id": "65fefebc852deea73ba4a4db",
                    "title": "Enter URL to your TikTok profile",
                    "imageUrl": "/uploads/files/Social Icons_1711030303166.svg"
                },
                {
                    "_id": "65fefebc852deea73ba4a4dc",
                    "title": "Enter URL to your Twitter profile",
                    "imageUrl": "/uploads/files/Social Icons (2)_1711030394081.svg"
                },
                {
                    "_id": "65fefebc852deea73ba4a4dd",
                    "title": "Enter URL to your Twitter profile",
                    "imageUrl": "/uploads/files/Social Icons_1711030303166.svg"
                },
                {
                    "_id": "65fefebc852deea73ba4a4de",
                    "title": "Enter your username on Discord",
                    "imageUrl": "/uploads/files/Social Icons (1)_1711030358805.svg"
                }
            ]
        },
        "title": "Get whitelisted for AirDrop",
        "description": "<p>dsadasd</p>",
        "section2": [
            {
                "_id": "65fefebc852deea73ba4a4da",
                "title": "Follow PremiumToken on minimum 4 of 6 of our social media channels.",
                "imageUrl": "/uploads/files/Frame 89_1711210160105.svg"
            }
        ]
    },
    [SectionTypes.PARTNERS]: {
        "title": "Partners",
        "description": "<p>Test description</p>",
        "partnersData": [
            {
                "_id": "65fee594852deea73ba49d18",
                "position": "12",
                "name": "Mike Stoneberg",
                "imageUrl": "/uploads/files/avatar-logo_1711002366169.png",
                "companyLogo": "/uploads/files/Frame 9463_1711117451733.png"
            }
        ]
    },
    [SectionTypes.FOOTERS]: {
        "twitter": {
            "url": "string",
            "imageUrl": "/uploads/files/Social Icons (2)_1711030394081.svg",
            "hovers": "/uploads/files/Mask Group (4)_1711141456608.svg"
        },
        "discord": {
            "url": "string",
            "imageUrl": "/uploads/files/Illustration (2)_1711140639832.svg",
            "hovers": "/uploads/files/Social Icons (2)_1711030394081.svg"
        },
        "telegram": {
            "url": "string",
            "imageUrl": "/uploads/files/Frame_1711140299537.svg",
            "hovers": "/uploads/files/Social Icons (2)_1711030394081.svg"
        },
        "airdrop": {
            "imageUrl": "/uploads/files/Social Icons (2)_1711030394081.svg",
            "title": "dasd",
            "url": "dasdsad",
            "hovers": "/uploads/files/Social Icons (2)_1711030394081.svg"
        },
        "email": {
            "imageUrl": "/uploads/files/Social Icons (2)_1711030394081.svg",
            "emailAddress": "dsad@fdsfds.dfs"
        },
        "premiumTokenTitle": "/uploads/files/img (1)_1711141633254.svg",
        "title": "dasdasda",
        "description": "<p>dsadsad</p>"
    },
    "_id": "65f84e576bb9e58fb71ac0d3",
    "createdAt": "2024-03-18T14:23:18.762Z",
    "updatedAt": "2024-03-23T16:09:32.117Z",
    [SectionTypes.FEATURES]: [
        "/uploads/files/Mask Group_1711141386391.svg",
        "/uploads/files/Mask Group (1)_1711141403629.svg",
        "/uploads/files/Mask Group (2)_1711141420943.svg",
        "/uploads/files/Mask Group (3)_1711141438285.svg",
        "/uploads/files/Mask Group (4)_1711141456608.svg"
    ]
}