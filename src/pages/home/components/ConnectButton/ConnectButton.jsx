import { useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton, useWalletModal } from "@solana/wallet-adapter-react-ui";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { STATUS } from "../../../../shared/constants";
import { shortenString } from "../../../../shared/constants/utils";
import useIsMounted from "../../../../shared/hooks/useIsMounted";
import { checkIfUserIsWinner } from "../../../../store/actions/WinnerSection";
import { SectionTypes } from "../../helpers/contentManagement";
import WinnerPopup from "../Header/WinnerPopup/WinnerPopup";
import { STRINGS } from "./helpers/constants";


export default function ConnectButton({ connectWalletButtonText = "Connect Wallet" }) {
  const [popup, setPopup] = useState(false);
  const [clickedConnect, setClickedConnect] = useState(false);
  const [walletConnectCalled, setWalletConnectCalled] = useState(false);
  const { setVisible, visible } = useWalletModal();
  const content = useSelector(
    (state) => state.contentManagementReducer.homePageContent
  );
  const { connect, wallet, publicKey } = useWallet();
  const mounted = useIsMounted();
  const dispatch = useDispatch();
  const publicKeyToWalletAdress = (publicKey) => {
    return shortenString(publicKey.toBase58());
  };

  const handleClose = () => {
    setPopup(false);
  };

  const handleOpenWinnerModal = () => {
    setPopup({ walletAddress: publicKey });
  };
  useEffect(() => {
    if (!visible) {
      setWalletConnectCalled(false);
      setClickedConnect(false);
    }
  }, [visible])

  const handleConnectClick = () => {
    setWalletConnectCalled(true);
    if (!wallet) {
      setVisible(true);
    }
  };
  const handleConnectWallet = async () => {
    try {
      await connect();
      setClickedConnect(true);
    } catch (error) {
      toast.error(STRINGS.WALLET_NOT_CONNECTED);
    }

  }
  useEffect(() => {
    if (wallet && walletConnectCalled) {
      handleConnectWallet();
      setWalletConnectCalled(false)
    }
  }, [walletConnectCalled, wallet])

  const handleCallSignMessage = () => {
    try {
      dispatch(
        checkIfUserIsWinner(
          { walletAddress: publicKey },
          (data, status) => {
            if (status === STATUS.SUCCESS) {
              if (data?.isWinner) {
                handleOpenWinnerModal();
              } else {
                toast.error(STRINGS.WINNER_NOT_FOUND);
              }
            }
          }
        )
      );
    } catch (error) {

    } finally {
      setClickedConnect(false);
    }
  };

  useEffect(() => {
    if (clickedConnect && publicKey) {
      handleCallSignMessage();
    }
  }, [clickedConnect, publicKey]);

  return (
    <>
      {popup && (
        <WinnerPopup
          show={popup}
          onClose={handleClose}
          partners={content?.[SectionTypes.PARTNERS]}
          winnerPopup={content?.[SectionTypes.WINNER_POPUP]}
          publicKey={publicKey}
        />
      )}
      {mounted && (
        !publicKey ?
          <button
            type="button"
            className="btn btn-md btn-secondary"
            onClick={handleConnectClick}
          >
            <span className="transform-none">
              {publicKey ? publicKeyToWalletAdress(publicKey) : connectWalletButtonText }
            </span>
          </button> :
          <WalletMultiButton className="phantom-wallet-button" />
      )}
    </>
  );
}
