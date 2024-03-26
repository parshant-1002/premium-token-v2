import { API } from "./constants"

export const addBaseUrlToUrls = (url)=>{
    return url
}

export const redirectToUrlInNewTab = (url) => window.open(url, '_blank')

export const formatDate = (dateString, format = "DD-MM-YYYY") => {
    const date = new Date(dateString);
    const formattedDate = date.getDate().toString().padStart(2, '0') + '-' + (date.getMonth() + 1).toString().padStart(2, '0') + '-' + date.getFullYear();
    return formattedDate

} 

export const covertToMillion = (number) => {
    return `$${(number / 1000000).toFixed(2)}M`
}

export function removeEmptyKeys(obj) {
    return Object.entries(obj).reduce((acc, [key, value]) => {
        if (value !== '') {
            acc[key] = value;
        }
        return acc;
    }, {});
}
