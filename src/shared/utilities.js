import { SIGNATURE_MESSAGE } from "../pages/home/components/ConnectButton/helpers/constants";
import { API } from "./constants"
import { formatNumber } from "./constants/utils"
import bs58 from 'bs58';
import { Buffer } from 'buffer';

export const addBaseUrlToUrls = (url)=>{
    return url
}

export const redirectToUrlInNewTab = (url) => window.open(url, '_blank')

export const formatDate = (dateString, format = "DD-MM-YYYY") => {
    const date = new Date(dateString);
    const formattedDate = date.getDate().toString().padStart(2, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getFullYear();
    return formattedDate

} 

export const convertToAppropriateUnit = (value) => {
    const numZeros = Math.floor(Math.log10(value));
    if (numZeros >= 6 && numZeros < 9) {
        return (value / 1000000).toFixed(2) + ' M';
    } else if (numZeros >= 9 && numZeros < 12) {
        return (value / 1000000000).toFixed(2) + ' B';
    } else if (numZeros >= 12) {
        return (value / 1000000000000).toFixed(2) + ' T';
    } else {
        return formatNumber(value).toString();
    }
}

export function removeEmptyKeys(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== '') {
            acc[key] = value;
        }
        return acc;
    }, {});
}

export const handleSignMessage = async (signMessage) => {
    try {
        const message = SIGNATURE_MESSAGE;
        const messageBuffer = Buffer.from(message, 'utf-8');
        const signature = await signMessage(messageBuffer);
        const signatureBase58 = bs58.encode(signature);
        return signatureBase58;
    } catch (err) {
        console.log(err);
        return null;
    }
}