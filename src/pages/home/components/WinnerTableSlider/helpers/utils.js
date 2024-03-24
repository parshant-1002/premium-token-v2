import { formatNumber, shortenString } from "../../../../../shared/constants/utils"
import { formatDate } from "../../../../../shared/utilities"

export const transformRow = (data)=>{
    return {
        prizetype: data.prizetype,
        marketCap: formatNumber(data.marketCap),
        createdAt: formatDate( data.createdAt),
        walletAddress: shortenString (data.walletAddress),
        chanceOfWinning: `${data.chanceOfWinning} %`
    }
}