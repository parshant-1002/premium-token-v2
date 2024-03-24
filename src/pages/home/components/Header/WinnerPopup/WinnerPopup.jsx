import React, { useState } from "react";
import CustomModal from "../../../../../shared/components/CustomModal/CustomModal";
import SafeHTML from "../../../../../shared/components/SanitizeHtml";
import { DEFAULT_CONTENT } from "../helpers/constants";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";

export default function WinnerPopup({ show, onClose, partners }) {
  const [formData, setFormData] = useState({});
  const [stepToShow, setStepToView] = useState({
    first: true,
  });
  const [prizeSelected, setPrizeSelected] = useState({
    first: false,
    second: true
  });
  const [partnerSelected, setPartnerSelected] = useState({});

  const handleSubmitStep1 = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStepToView({
      second: true,
    });
  };
  const handleSubmitStep2 = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setStepToView({
      thired: true
    });
  };
  const handleSure = () => {
    handleCloseModal();
  };
  const handleCheckAgain = () => {
    setStepToView({ first: true });
  };
  const handleAutoNameGeneration = () => {
    setStepToView({ first: true });
  };
  const renderStep = () => {
    switch (true) {
      case stepToShow.first:
        return (
          <Step1
            partners={partners}
            formData={formData}
            prizeSelected={prizeSelected}
            setPrizeSelected={setPrizeSelected}
            partnerSelected={partnerSelected}
            setPartnerSelected={setPartnerSelected}
            handleSubmitStep1={handleSubmitStep1}
          />
        );
      case stepToShow.second:
        return (
          <Step2
            formData={formData}
            handleSubmitStep2={handleSubmitStep2}
            handleAutoNameGeneration={handleAutoNameGeneration}
          />
        );
      default:
        return (
          <Step3
            handleSure={handleSure}
            handleCheckAgain={handleCheckAgain}
          />
        );
    }
  };
  const handleCloseModal = () => {
    onClose();
    setStepToView({
      first: true,
    });
    setFormData({});
  };
  return (
    <CustomModal
      show={show}
      onClose={handleCloseModal}
    >
      <div className="m-5 ">
        <div className="text-center">
          <h1>
            <SafeHTML html={DEFAULT_CONTENT.WINNER_TITLE} />
          </h1>
          <label>
            <SafeHTML html={DEFAULT_CONTENT.WINNER_DESCRIPTION} />
          </label>
        </div>
        {renderStep()}
      </div>
    </CustomModal>
  );
}
