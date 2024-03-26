import { ICONS } from "../../../../../assets"
import { formatNumber, handleCopyLink } from "../../../../../shared/constants/utils"
import { formatDate } from "../../../../../shared/utilities"

export const transformRow = (data)=>{
    return {
        prizetype: data.prizetype,
        marketCap: formatNumber(data.marketCap),
        createdAt: formatDate( data.createdAt),
        walletAddress: <span className="wallet-address">{data.walletAddress} <em type="button" onClick={() => handleCopyLink(data.walletAddress, "Address")}><img src={ICONS.CopyIcon} alt="Copy" height={12} /></em></span>,
        chanceOfWinning: `${data.chanceOfWinning} %`
    }
}