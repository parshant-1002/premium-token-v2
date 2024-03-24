import { WalletMultiButton, useWalletModal } from "@solana/wallet-adapter-react-ui";
import useIsMounted from "../../../../shared/hooks/useIsMounted";

export default function ConnectButton() {
    const { setVisible } = useWalletModal();
    const mounted = useIsMounted();
    return mounted && <WalletMultiButton />
}
