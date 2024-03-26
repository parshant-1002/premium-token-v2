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