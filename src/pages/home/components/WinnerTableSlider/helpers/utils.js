import { formatNumber, shortenString } from "../../../../../shared/constants/utils"
import { covertToMillion, formatDate } from "../../../../../shared/utilities"

export const transformRow = (data)=>{
    console.log(formatNumber(data.marketCap),"formatNumber(data.marketCap)")
    return {
        prizetype: data.prizetype,
        marketCap: covertToMillion(data.marketCap),
        createdAt: formatDate( data.createdAt),
        walletAddress: shortenString (data.walletAddress),
        chanceOfWinning: `${data.chanceOfWinning} %`
    }
}