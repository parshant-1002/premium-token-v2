import { WalletMultiButton, useWalletModal } from "@solana/wallet-adapter-react-ui";
import useIsMounted from "../../../../shared/hooks/useIsMounted";
import { useRef } from "react";
import { useWallet } from "@solana/wallet-adapter-react";

export default function ConnectButton() {
    const { connect, connected, wallet,publicKey } = useWallet();
    const { setVisible } = useWalletModal();
    const mounted = useIsMounted();

    const handleConnectClick = async () => {
        try {
            if (!wallet) {
                setVisible(true);
            } else {
                await connect();
            }
        } catch (error) {
            console.error('Error connecting to wallet:', error);
        }
    };



    return (
        mounted && <button type="button" className="btn btn-md btn-secondary" onClick={handleConnectClick}><span className="transform-none">Connect Wallet</span></button> 
    ) 
    
}
