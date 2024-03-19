const HEADER = {
   PREMIUM_TOKEN_TITLE : "premiumTokenTitle",
    AIRDROP_BUTTON: "airdropButton",
    BUY_TOKEN_BUTTON: "buyTokenButton",
    DISCORD: "discord",
    TELEGRAM: "telegram",
    TWITTER: "twitter",
    VIEW_CHART_BUTTON: "viewChartButton"
}

const VIDEO_SECTION  = {
    TITLE: "title",
    DESCRIPTION: "description",
    VIDEO_URL: "videoUrl"
}

const PRIZE_SECTION = {
    TITLE: "title",
    RULES_TO_WIN: "rulesToWin",
    MARKET_CAP: "marketCap",
    LATEST_WINNER_DETAILS: "latestWinnerDetails"

}

const mapKeysWithApiKeys = {
    HEADER:HEADER,
    VIDEO_SECTION:VIDEO_SECTION,
    PRIZE_SECTION:PRIZE_SECTION
}   

export const getContentValue = (content, section, key) => {
    if(content)
    {
        console.log(content, mapKeysWithApiKeys[section][key],"")
        return content[mapKeysWithApiKeys[section][key]]
    }
}