import { ICONS } from "../../../../../assets"
import {  handleCopyLink } from "../../../../../shared/constants/utils"
import { convertToAppropriateUnit, formatDate } from "../../../../../shared/utilities"

export const transformRow = (data, removeToFixed = false)=>{
    return {
        prizetype: data.prizetype,
        marketCap: convertToAppropriateUnit(data.marketCap, removeToFixed ? 0 : 2),
        createdAt: formatDate(data.createdAt),
        walletAddress: <span className="wallet-address">{data.walletAddress} <em type="button" onClick={() => handleCopyLink(data.walletAddress, "Address")}><img src={ICONS.CopyIcon} alt="Copy" height={12} /></em></span>,
        chanceOfWinning: `${(data.chanceOfWinning)?.toFixed(2)} %`
    }
}