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
            "url": "",
            "image": ICONS.Twitter
        },
        [HeaderEnum.DISCORD]: {
            "url": "",
            "image": ICONS.Discord
        },
        [HeaderEnum.TELEGRAM]: {
            "url": "",
            "image": ICONS.Telegram,
        },
        [HeaderEnum.VIEW_CHART_BUTTON]: {
            "url": "",
            "text": ""
        },
        [HeaderEnum.AIRDROP_BUTTON]: {
            "url": "",
            "image": ICONS.Airdrop,
            "text": ""
        },
        [HeaderEnum.BUY_TOKEN_BUTTON]: {
            "url": "",
            "text": ""
        },
        [HeaderEnum.PREMIUM_TOKEN_TITLE]: ICONS.Logo
    },
    [SectionTypes.VIDEO_SECTION]: {
        "title": "",
        "description": "",
        "videoUrl": VIDEOS.DemoVideo,
    },
    [SectionTypes.PRIZE_SECTION]: {
        [PrizeSectionEnum.LATEST_WINNER_DETAILS]: {
            "title": "",
            "description": ""
        },
        [PrizeSectionEnum.MARKET_CAP]: {
            "title": "",
            "marketCapValue": 0,
            "description": ""
        },
        [PrizeSectionEnum.TITLE]: "",
        [PrizeSectionEnum.RULES_TO_WIN]: [
            {
                "imageUrl": ICONS.RulesToWin1,
                "description": ""
            },
            {
                "imageUrl": ICONS.RulesToWin2,
                "description": ""
            },
            {
                "imageUrl": ICONS.RulesToWin3,
                "description": ""
            },
            {
                "imageUrl": ICONS.RulesToWin4,
                "description": ""
            }
        ]
    },
    [SectionTypes.WINNER_LIST_SECTION]: {
        [WinnerListSectionEnum.TOKEN_HOLDER_TEXT]: "",
        [WinnerListSectionEnum.PRIZE_DESCRIPTION]: "",
        [WinnerListSectionEnum.CONNECT_WALLET_BUTTON_TEXT]: "",
        noWinnerText: ICONS.NoWinner,
        noWinnerImageUrl: "",
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
        "title": "",
        "rules": [
            {
                "imageUrl": ICONS.WinnerRulesSection1,
                title:"",
                "description": ""
            },
            {
                "imageUrl": ICONS.WinnerRulesSection2,
                title:"",
                "description": ""
            },
            {
                "imageUrl": ICONS.WinnerRulesSection3,
                title:"",
                "description": ""
            },
            {
                "imageUrl": ICONS.WinnerRulesSection4,
                title:"",
                "description": ""
            }
        ]
    },
    [SectionTypes.CONTRACT_DETAILS]: {
        "transpancy": {
            "title": "",
            "description": ""
        },
        "githubTitle": "",
        "githubViewButtonText": "",
        "githubViewButtonUrl": "",
        "githubLogo": ICONS.GithubLogo,
    },
    "roadmapSection": {
        "title": "",
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
        "title": "",
        "description": "",
        "comingSoonButtonText": "",
        "imageUrl": ICONS.PremiumTokenMobile
    },
    "externalAudit": {
        "title": "",
        "description": "",
        "image": ICONS.ExternalAudit,
        "url": "",
        "downloadDocbutton": "",
        "downloadDocURL": ""
    },
    "tokenInfo": {
        "title": "",
        "description": "",
        "address": "xfsde3eedsd1e12wdsadasd",
        "premiumTokenButton": {
            "text": "",
            "url": ""
        },
        "externalAuditButton": {
            "text": "",
            "url": ""
        },
        "imageUrl": ICONS.TokenInfo,
    },
    "premiumMarketPlace": {
        "title": "",
        "cars": [
            {
                "title": "",
                "imageUrl": ICONS.Marketplace_car1
            },
            // {
            //     "title": "",
            //     "imageUrl": ICONS.Marketplace_car2
            // },
            // {
            //     "title": "",
            //     "imageUrl": ICONS.Marketplace_car3
            // }
        ],
        "description": ""
    },
    "tokenSupply": {
        "development": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "founders": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "winnerPrize": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "marketing": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "burning": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "exchangeAndTokenHolders": {
            "title": "",
            "description": "",
            "subTitle": "",
            "percentage": 0
        },
        "title": "",
        "description": "",
        "innerTitle": "",
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
        "title": "",
        "description": "",
        "section2": [
            {
                "_id": "66007a6f54941acef4028177",
                "title": "",
                "imageUrl": ICONS.Airdrop_Section_Two_1
            },
            {
                "_id": "66007a6f54941acef4028178",
                "title": "",
                "imageUrl": ICONS.Airdrop_Section_Two_2
            },
            {
                "_id": "66007a6f54941acef4028179",
                "title": "",
                "imageUrl": ICONS.Airdrop_Section_Two_3
            }
        ]
    },
    "partners": {
        "title": "Partners",
        "description": "",
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
            "url": "",
            "imageUrl": ICONS.Twitter,
            "title": "",
            "hovers": ICONS.TwitterHover
        },
        "discord": {
            "url": "",
            "imageUrl": ICONS.Discord,
            "title": "",
            "hovers": ICONS.DiscordHover
        },
        "telegram": {
            "url": "",
            "imageUrl": ICONS.Telegram,
            "title": "",
            "hovers": ICONS.TelegramHover
        },
        "airdrop": {
            "imageUrl": ICONS.Airdrop,
            "title": "",
            "url": "",
            "hovers": ICONS.Airdrop
        },
        "email": {
            "imageUrl": ICONS.Email,
            "emailAddress": ""
        },
        "premiumTokenTitle": "",
        "title": "",
        "description": ""
    },
    "_id": "65f84e576bb9e58fb71ac0d3",
    "createdAt": "",
    "updatedAt": "",
    [SectionTypes.FEATURE_SECTION]: {
        "title": "",
        "features": [
            {
                "imageUrl": ICONS.Featured_Image_1,
                "hovers": ICONS.Featured_Image_1
            },
        ]
    },
    winnerPopUps: {
        "popUp2": {
            "fullName": {
                "title": "",
                "placeholder": ""
            },
            "dateOfBirth": {
                "title": "",
                "placeholder": ""
            },
            "phoneNumber": {
                "title": "",
                "placeholder": ""
            },
            "country": {
                "title": "",
                "placeholder": ""
            },
            "city": {
                "title": "",
                "placeholder": ""
            },
            "streetAddress": {
                "title": "",
                "placeholder": ""
            },
            "zip": {
                "title": "",
                "placeholder": ""
            },
            "confirmButton": {
                "text": ""
            },
            "title": "",
            "description": ""
        },
        "popUp1": {
            "socialPlatforms": {
                "title": "",
                "placeholder": ""
            },
            "walletAddress": {
                "title": "",
                "placeholder": "",
                "lockbuttonImageUrl": ICONS.AirDropBg
            },
            "prizeSection": {
                "prize1": {
                    "title": "",
                    "imageUrl": ICONS.PrizeTypeToken
                },
                "prize2": {
                    "title": "",
                    "imageUrl": ICONS.PrizeTypeCar
                }
            },
            "continueButton": {
                "text": ""
            },
            "title": "",
            "description": ""
        },
        "popUp3": {
            "confirmationButton": {
                "text": ""
            },
            "checkAgainButton": {
                "text": ""
            },
            "title": "",
            "description": ""
        }
    }
}