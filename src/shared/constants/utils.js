import { toast } from "react-toastify";
import { STRINGS } from ".";
import { PublicKey } from "@solana/web3.js";

export function shortenString(str) {
    if (str.length <= 8) {
        return str;
    }
    return str.substring(0, 4) + '..' + str.substring(str.length - 4);
}

export const handleCopyLink = async (value, contentType) => {
    try {
        if (!value) return;
        await navigator.clipboard.writeText(value);
        toast.success(STRINGS.TEXT_COPIED(contentType))

    } catch (error) {
        toast.error(STRINGS.SOMETHING_WENT_WRONG)
    }
};

export function isValidSolanaAddress(address) {
    try {
        new PublicKey(address);
        return false;
    } catch (e) {
        console.log(e,"e<><><><><><")
        return "Please Enter a valid wallet address";
    }
}