import React, { useState } from "react";
import CustomModal from "../../../../../shared/components/CustomModal/CustomModal";
import SafeHTML from "../../../../../shared/components/SanitizeHtml";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import { DEFAULT_CONTENT, POPUP_TYPE, WINNER_MODAL_FORM_SCHEMA } from "../helpers/constants";
import { WINNER_DESCRIPTION, transformClaimPrizeData } from "../helpers/utils";
import { useDispatch } from "react-redux";
import { claimPrize } from "../../../../../store/actions/WinnerSection";
import { STATUS } from "../../../../../shared/constants";
import { toast } from "react-toastify";
import { handleSignMessage } from "../../../../../shared/utilities";
import { useWallet } from "@solana/wallet-adapter-react";

export default function WinnerPopup({ show, onClose, partners, winnerPopup = {}, }) {
  const { signMessage } = useWallet();
  const {popUp1, popUp2, popUp3} = winnerPopup
  const [formData, setFormData] = useState({walletAddress:show?.walletAddress});
  const [stepToShow, setStepToView] = useState(POPUP_TYPE.popUp1);
  const [prizeSelected, setPrizeSelected] = useState({
    first: true,
    second: false
  });
  const [partnerSelected, setPartnerSelected] = useState({});

  const dispatch = useDispatch()

  const handleSubmitStep1 = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStepToView(POPUP_TYPE.popUp3);
  };
  const handleSubmitStep2 = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStepToView(POPUP_TYPE.popUp3);
  };
  const handleSure = async (data) => {
    const response = await handleSignMessage(signMessage);
    if (response) {
      const payload = transformClaimPrizeData(formData, prizeSelected)
      if(response){
        payload.signature = response
      }
      dispatch(claimPrize(payload, (message, status) => {
        if(status === STATUS.SUCCESS){
          toast.success(message)
        }
      }))
      handleCloseModal();
    }
  };
  const handleCheckAgain = () => {
    setStepToView(POPUP_TYPE.popUp1);
  };
  const handleAutoNameGeneration = () => {
    setStepToView(POPUP_TYPE.popUp1);
  };

  const REFORMED_WINNER_MODAL_FORM_SCHEMA = WINNER_MODAL_FORM_SCHEMA(winnerPopup, show?.walletAddress)
  const renderStep = () => {
    switch (stepToShow) {
      case POPUP_TYPE.popUp1:
        return (
          <Step1
            partners={partners}
            formData={formData}
            prizeSelected={prizeSelected}
            setPrizeSelected={setPrizeSelected}
            partnerSelected={partnerSelected}
            setPartnerSelected={setPartnerSelected}
            handleSubmitStep1={handleSubmitStep1}
            popUp1 = {popUp1}
            REFORMED_WINNER_MODAL_FORM_SCHEMA={REFORMED_WINNER_MODAL_FORM_SCHEMA}
          />
        );
      case POPUP_TYPE.popUp2:
        return (
          <Step2
            formData={formData}
            handleSubmitStep2={handleSubmitStep2}
            handleAutoNameGeneration={handleAutoNameGeneration}
            popUp2 = {popUp2}
            REFORMED_WINNER_MODAL_FORM_SCHEMA={REFORMED_WINNER_MODAL_FORM_SCHEMA}
          />
        );
      default:
        return (
          <Step3
            handleSure={handleSure}
            handleCheckAgain={handleCheckAgain}
            popUp3 = {popUp3}
          />
        );
    }
  };
  const handleCloseModal = () => {
    onClose();
    setStepToView(POPUP_TYPE.popUp1);
    setFormData({});
  };
  return (
    <CustomModal
      show={!!show}
      onClose={handleCloseModal}
    >
      <div className="title_group text-center">
        <h2 className="h3">
          <SafeHTML html={DEFAULT_CONTENT.WINNER_TITLE} />
        </h2>
        <p><SafeHTML html={WINNER_DESCRIPTION(winnerPopup)?.[stepToShow]} /></p>
      </div>
      {renderStep()}
    </CustomModal>
  );
}
