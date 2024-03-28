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
    FEATURE_SECTION:"featureSection",
    WINNER_POPUP:"winnerPopUps"
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
    [SectionTypes.PRIZE_SECTION]: {
        [PrizeSectionEnum.LATEST_WINNER_DETAILS]: {
            "title": "Latest winners",
            "description": "In the list below can you see all latest winners that the smart contract has drawn for each increase of $10 million market cap. The contract draws the winners automatic and all holders that hold minimum 1000 tokens have a chance of winning, the winners can choose a prize between $350,000 worth of PremiumToken or a premium car from our partners worth $350,000."
        },
        [PrizeSectionEnum.MARKET_CAP]: {
            "title": "MARKET CAP",
            "marketCapValue": 2000000000,
            "description": "The smart contract will draw the next winner at $X million market cap!"
        },
        [PrizeSectionEnum.TITLE]: "How to win a $350,000 prize",
        [PrizeSectionEnum.RULES_TO_WIN]: [
            {
                "imageUrl": ICONS.RulesToWin1,
                "description": "Click on the Buy button or go to Raydium.io to buy PremiumToken for Solana"
            },
            {
                "imageUrl": ICONS.RulesToWin2,
                "description": "Hold minimum of 1000 tokens in you wallet and get a chance to win a $350,000 prize"
            },
            {
                "imageUrl": ICONS.RulesToWin3,
                "description": "The smart contract draws a new winners automatic at each $10 million market cap"
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
                "description": "If you see your wallet address on the winners list, connect your wallet, its integrated with Web3 API and it’s 100% secure!>"
            },
            {
                "imageUrl": ICONS.WinnerRulesSection2,
                title:"Enter your contact information",
                "description": "Fill our your email and your WhatsApp, skype or Telegram and we will contact you shortly, be sure to double check your information before sending in the information to us, your wallet address will be added automatic when you connect your wallet."
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
            "description": "To show all our holders that PremiumToken is fair, honest and transparent so have we added our code of the smart contract on our website for all visitors and holders to review it. You can also watch the full source code on GitHub."
        },
        "githubTitle": "Transparency",
        "githubViewButtonText": "View the source code on GitHub",
        "githubViewButtonUrl": "https://github.com/",
        "githubLogo": ICONS.GithubLogo,
    },
    "roadmapSection": {
        "title": "Roadmap of PremiumToken",
        "roadMap": [
            {
                "_id": "6600728c54941acef4027ed5",
                "level": "1",
                "description": "<p><span style=\"white-space-collapse: preserve;\">Reach 1000 holders</span><span style=\"white-space-collapse: preserve;\"><br>Completed after: 3 days</span></p><p style=\"line-height: 1;\"><span style=\"white-space-collapse: preserve;\"></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><br></p>",
                "title": "weew",
                "subTitle": "ew"
            },
            {
                "_id": "6600728c54941acef4027ed6",
                "level": "2",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><span style=\"white-space-collapse: preserve;\"><br></span><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><br></span><br></p><p><br></p>",
                "title": "ewe",
                "subTitle": "wew"
            },
            {
                "_id": "6600728c54941acef4027ed7",
                "level": "3",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><span style=\"white-space-collapse: preserve;\"><br></span><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><br></span><br></p>",
                "title": "wewe",
                "subTitle": "wewe"
            },
            {
                "_id": "6600728c54941acef4027ed8",
                "level": "4",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><br></p>",
                "title": "ewew",
                "subTitle": "ewew"
            },
            {
                "_id": "6600728c54941acef4027ed9",
                "level": "5",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><span style=\"white-space-collapse: preserve;\"><br></span><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><br></span><br></p>",
                "title": "eww",
                "subTitle": "weewe"
            },
            {
                "_id": "6600728c54941acef4027eda",
                "level": "6",
                "description": "<p><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><strong>Reach 1000 holders</strong><br></span><span style=\"white-space-collapse: preserve;\">Completed after: 3 days<br></span><span style=\"white-space-collapse: preserve;\">We aim and hope we will reach this goal rather quickly.</span><span style=\"white-space-collapse: preserve;\"><br></span><span style=\"white-space-collapse: preserve; color: var(--bs-card-color); text-align: var(--bs-body-text-align); font-size: 1rem;\"><br></span><br></p>",
                "title": "ewe",
                "subTitle": "wew"
            },
        ]
    },
    "premiumTokenWallet": {
        "title": "PremiumToken Wallet",
        "description": "We have plans to develop our own wallet for PremiumToken, where we want to add so all our holders can have their own debit card to use and spend PremiumTokens with if they want to. We are currently looking in to potential whitelabel partners that can help us with getting virtual debit cards and potentially real debit cards as well, stay tuned!",
        "comingSoonButtonText": "coming soon",
        "imageUrl": ICONS.PremiumTokenMobile
    },
    "externalAudit": {
        "title": "External audit",
        "description": "We want to show all current and future holders that its nothing fishy about PremiumToken, therefore we orderd an external audit from Analytix Audit, you can click on the link to view it or download the full audit by clicking on the download button.",
        "image": ICONS.ExternalAudit,
        "url": "https://moralis.io/solana-smart-contract-examples-for-developers/",
        "downloadDocbutton": "Download document",
        "downloadDocURL": "https://moralis.io/solana-smart-contract-examples-for-developers/"
    },
    "tokenInfo": {
        "title": "Token Info",
        "description": "Here below can you easily see and copy PremiumtToken’s contract address, if you wish to buy tokens or add the token to your wallet. You can also check PremiumToken on Solscan.io or view the externa audit!",
        "address": "xfsde3eedsd1e12wdsadasd",
        "premiumTokenButton": {
            "text": "PremiumToken on Solscan.io",
            "url": "https://ExternalauditLink"
        },
        "externalAuditButton": {
            "text": "View the External Audit",
            "url": "https://ExternalauditLink"
        },
        "imageUrl": ICONS.TokenInfo,
    },
    "premiumMarketPlace": {
        "title": "Premium marketplace",
        "cars": [
            {
                "title": "Lamborghini Urus",
                "imageUrl": ICONS.Marketplace_car1
            },
            {
                "title": "Lamborghini Aventador",
                "imageUrl": ICONS.Marketplace_car2
            },
            {
                "title": "Lamborghini Huracan",
                "imageUrl": ICONS.Marketplace_car3
            }
        ],
        "description": "In the near future we aim to launch a market place for luxury and premium cars from our partners, where our token holders can buy this cars for PremiumToken!</p>"
    },
    "tokenSupply": {
        "airdrop": {
            "title": "AirDrop",
            "description": "0.25% of the tokens will be used for AidDrops, one AirDrop will be held on the 1st of each month, for the next 10 months to come.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 0.25
        },
        "contest": {
            "title": "Contest and events",
            "description": "0.75% of the tokens will be used for different contests and events in the future for our holders.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 0.75
        },
        "development": {
            "title": "Development",
            "description": "2.5% of the tokens will be used for development of PremiumToken, to improve it and develop new dapps, features, wallet and marketplaces in the future.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 2.5
        },
        "founders": {
            "title": "Founders",
            "description": "4% of the tokens will go to the founders of PremiumToken, but don’t worry we believe in PremiumToken and we wont be selling anything of anytime soon, we are here for the long run!",
            "subTitle": "Wallet address: ....... ",
            "percentage": 4
        },
        "winnerPrize": {
            "title": "Prize for Winners",
            "description": "5% of the tokens will be used for the winners that the smart contract draws, to purchase the premium car of their choice or by giving them $350,000 worth of PremiumToken.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 5
        },
        "marketing": {
            "title": "Marketing",
            "description": "10% of the tokens will be used marketing of PremiumToken, with the help of the community and paying for marketing and advertising, it wont take long until we reach $1B market cap.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 10
        },
        "burning": {
            "title": "Burning",
            "description": "12.5% of the tokens will be burnt overtime, to lower the supply and increase the price per token.",
            "subTitle": "Wallet address: ....... ",
            "percentage": 12.5
        },
        "exchangeAndTokenHolders": {
            "title": "To excanges and token holders",
            "description": "65% of the tokens will be used for for swaps and exchanges, so more people can notice and buy PremiumToken. The more exchanges we get listed on, the more people will notice us and the more holders we will get and that will help this community grow even faster!",
            "subTitle": "Wallet address: ....... ",
            "percentage": 65
        },
        "title": "Token supply",
        "description": "Here you can see how the full token supply is divided, you can also see the wallet addresses, to see that they will never be used for anything other then what they are intended for and that they can not be drawn as a winner by the smart contract.",
        "innerTitle": "888,888,888,888,888",
        "stats": []
    },
    "joinAirdrop": {
        "section1": {
            "premiumToken": {
                "iconUrl": ICONS.AirdropWallet,
                "placeholder": "Enter your PremiumToken wallet address",
                "hovers": ICONS.WalletHover
            },
            "twitter": {
                "iconUrl": ICONS.Twitter,
                "placeholder": "Enter URL to your Twitter profile",
                "hovers": ICONS.TwitterHover
            },
            "telegram": {
                "iconUrl": ICONS.Telegram,
                "placeholder": "Enter your Telegram username",
                "hovers": ICONS.TelegramHover
            },
            "instagram": {
                "iconUrl": ICONS.Instagram,
                "placeholder": "Enter URL to your Instagram profile",
                "hovers": ICONS.InstagramHover
            },
            "facebook": {
                "iconUrl": ICONS.Facebook,
                "placeholder": "Enter URL to your Facebook profile",
                "hovers": ICONS.FacebookHover
            },
            "discord": {
                "iconUrl": ICONS.Discord,
                "placeholder": "Enter your username on Discord",
                "hovers": ICONS.DiscordHover
            },
            "tiktok": {
                "iconUrl": ICONS.TikTok,
                "placeholder": "Enter URL to your TikTok profile",
                "hovers": ICONS.TikTokHover
            },
            "title": "Get whitelisted for AirDrop",
            "buttonText": "Submit airdrop",
        },
        "title": "How to join the AirDrop",
        "description": "You can get whitelisted for the PremiumToken AirDrop by following us on minimum 4 of the 6 social media platforms. Be sure to double check your wallet address is correct before you submit, otherwise you wont receive your tokens. A total of 10 AirDrops will be held and the first one will be on 1st of May.",
        "section2": [
            {
                "_id": "66007a6f54941acef4028177",
                "title": "Follow PremiumToken on minimum 4 of 6 of our social media channels.",
                "imageUrl": ICONS.Airdrop_Section_Two_1
            },
            {
                "_id": "66007a6f54941acef4028178",
                "title": "Fill out the information in the fields to the right, make sure your wallet address is correct and click on Submit.",
                "imageUrl": ICONS.Airdrop_Section_Two_2
            },
            {
                "_id": "66007a6f54941acef4028179",
                "title": "The first AirDrop will be held on the 1st of May, be sure you join in before that to get your tokens!",
                "imageUrl": ICONS.Airdrop_Section_Two_3
            }
        ]
    },
    "partners": {
        "title": "Partners",
        "description": "Crypto ipsum bitcoin ethereum dogecoin litecoin. Klaytn golem terraUSD kava amp maker velas. Velas serum harmony XRP algorand aave klaytn.",
        "partnersData": [
            {
                "position": "CEO & Product Manager",
                "name": "Mike Stoneberg",
                "companyLogo": ICONS.Partner
            },

        ]
    },
    "footers": {
        "twitter": {
            "url": "https://www.google.co.in/",
            "imageUrl": ICONS.Twitter,
            "title": "Join Twitter ",
            "hovers": ICONS.TwitterHover
        },
        "discord": {
            "url": "https://www.google.co.in/",
            "imageUrl": ICONS.Discord,
            "title": "Join Discord ",
            "hovers": ICONS.DiscordHover
        },
        "telegram": {
            "url": "https://www.google.co.in/",
            "imageUrl": ICONS.Telegram,
            "title": "Join Telegram ",
            "hovers": ICONS.TelegramHover
        },
        "airdrop": {
            "imageUrl": ICONS.Airdrop,
            "title": "Join Airdrop",
            "url": "https://www.google.co.in/",
            "hovers": "/uploads/files/Airdrop_1711301269749.png"
        },
        "email": {
            "imageUrl": ICONS.Email,
            "emailAddress": "support@premiumtoken.com"
        },
        "premiumTokenTitle": "/uploads/files/PremiumToken_1711300850141.png",
        "title": "Lets grow together!",
        "description": "Follow PremiumToken on as many social media networks as possible and spread the word to your friends, family and followers, so will our community and the value of PremiumToken grow faster and faster!"
    },
    "_id": "65f84e576bb9e58fb71ac0d3",
    "createdAt": "2024-03-18T14:23:18.762Z",
    "updatedAt": "2024-03-24T20:04:49.596Z",
    [SectionTypes.FEATURE_SECTION]: {
        "title": "Featured on",
        "features": [
            {
                "imageUrl": ICONS.Featured_Image_1,
                "hovers": "/uploads/files/PlatinumCars_1711307573174.png"
            },
            {
                "imageUrl": ICONS.Featured_Image_5,
                "hovers": "/uploads/files/PlatinumCars_1711307573174.png"
            },
            {
                "imageUrl": ICONS.Featured_Image_2,
                "hovers": "/uploads/files/PlatinumCars_1711307573174.png"
            },
            {
                "imageUrl": ICONS.Featured_Image_3,
                "hovers": "/uploads/files/PlatinumCars_1711307573174.png"
            },
            {
                "imageUrl": ICONS.Featured_Image_4,
                "hovers": "/uploads/files/PlatinumCars_1711307573174.png"
            }
        ]
    },
    winnerPopUps: {
        "popUp2": {
            "fullName": {
                "title": "FULL NAME",
                "placeholder": "Lorri Warf"
            },
            "dateOfBirth": {
                "title": "DATE OF BIRTH",
                "placeholder": "01/12/1997"
            },
            "phoneNumber": {
                "title": "Phone number",
                "placeholder": "0919985643"
            },
            "country": {
                "title": "COUNTRY",
                "placeholder": "United Kingdom"
            },
            "city": {
                "title": "CITY",
                "placeholder": "London"
            },
            "streetAddress": {
                "title": "STREET ADDRESS",
                "placeholder": "Oxford Street 25"
            },
            "zip": {
                "title": "ZIP",
                "placeholder": "EC2P 2E"
            },
            "confirmButton": {
                "text": "Confirm"
            },
            "title": "Congratz, you have won!",
            "description": "Fill out the delivery address for the car you won."
        },
        "popUp1": {
            "socialPlatforms": {
                "title": "WHATSAPP/SKYPE/TELEGRAM",
                "placeholder": "katie63"
            },
            "walletAddress": {
                "title": "WALLET ADDRESS",
                "placeholder": "xfsde3eedsd1e12wdsadasd",
                "lockbuttonImageUrl": ICONS.AirDropBg
            },
            "prizeSection": {
                "prize1": {
                    "title": "$ 250,000  worth of PremiumToken",
                    "imageUrl": ICONS.PrizeTypeToken
                },
                "prize2": {
                    "title": "Supercar to a value of $250,000",
                    "imageUrl": ICONS.PrizeTypeCar
                }
            },
            "continueButton": {
                "text": "Continue"
            },
            "title": "Congratz, you have won!",
            "description": "<p>Fill out the information below to get your prize.<br></p>"
        },
        "popUp3": {
            "confirmationButton": {
                "text": "Yes, I am sure"
            },
            "checkAgainButton": {
                "text": "Check again"
            },
            "title": "Are you sure you entered the correct information?",
            "description": "<p>We will contact you from the email: winner@premiumtoken.com. Be aware of fake emails!<br></p>"
        }
    }
}