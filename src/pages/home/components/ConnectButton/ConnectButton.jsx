import {  useWalletModal } from "@solana/wallet-adapter-react-ui";
import useIsMounted from "../../../../shared/hooks/useIsMounted";
import { useState } from "react";
import { useWallet } from "@solana/wallet-adapter-react";
import { shortenString } from "../../../../shared/constants/utils";
import { useDispatch, useSelector } from "react-redux";
import { checkIfUserIsWinner } from "../../../../store/actions/WinnerSection";
import { STATUS } from "../../../../shared/constants";
import WinnerPopup from "../Header/WinnerPopup/WinnerPopup";
import { SectionTypes } from "../../helpers/contentManagement";
import { SIGNATURE_MESSAGE, STRINGS } from "./helpers/constants";
import { toast } from "react-toastify";
import { handleSignMessage } from "../../../../shared/utilities";


export default function ConnectButton() {
    const [popup, setPopup] = useState(false);
    const content = useSelector((state) => state.contentManagementReducer.homePageContent)
    const { connect, wallet, publicKey, signMessage } = useWallet();
    const { setVisible } = useWalletModal();
    const mounted = useIsMounted();
    const dispatch = useDispatch()
    const publicKeyToWalletAdress = (publicKey)=>{
        return shortenString(publicKey.toBase58())
    }

    const handleClose = () => {
        setPopup(false)


    }
    const handleOpenWinnerModal = (signature) => {
        setPopup({signature, walletAddress:publicKey})
    }


    const handleConnectClick = async () => {
        try {
            if (!wallet) {
                setVisible(true);
            } else {
               await connect();
               if(publicKey){
                   const response = await handleSignMessage(signMessage)
                   console.log(response,"response<><><>><><><>")
                   if(response)
                   dispatch(checkIfUserIsWinner({ walletAddress: publicKey, signature: response}, (data, status)=>{
                    if(status === STATUS.SUCCESS){
                        if(data?.isWinner){
                            handleOpenWinnerModal(response)
                        }
                        else{
                            toast.error(STRINGS.WINNER_NOT_FOUND)
                        }
                    }
                   }))
               }
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };



    return (
        <>
          {popup && <WinnerPopup show={popup} onClose={handleClose} partners={content?.[SectionTypes.PARTNERS]} winnerPopup={content?.[SectionTypes.WINNER_POPUP]} publicKey = {publicKey}/>}
        {mounted && <button type="button" className="btn btn-md btn-secondary" onClick={handleConnectClick}><span className="transform-none">{publicKey ? publicKeyToWalletAdress(publicKey) : "Connect Wallet" }</span></button> }
        </>
    ) 
    
}
