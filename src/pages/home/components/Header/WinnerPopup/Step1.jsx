import React, { useState } from 'react';
import CustomForm from '../../../../../shared/components/form/CustomForm/CustomForm';
import {
  DEFAULT_CONTENT,
} from '../helpers/constants';
import { ICONS } from '../../../../../assets';
import Prize from './Prize';
import { RenderIconWithHover } from '../../../../../shared/components/RenderIconWithHover';
import CircularCheckBox from '../../../../../shared/components/CircularCheckBox';
import { addBaseUrlToUrls } from '../../../../../shared/utilities';
import SafeHTML from '../../../../../shared/components/SanitizeHtml';

export default function Step1({
  partners,
  handleSubmitStep1,
  formData = {},
  partnerSelected,
  setPartnerSelected,
  prizeSelected,
  setPrizeSelected,
  popUp1 = {},
  REFORMED_WINNER_MODAL_FORM_SCHEMA
}) {
  const { socialMedia, walletAddress, email } = formData;
  const {  description, prizeSection, title, continueButton } = popUp1
  const handleSubmit = (data) => {
    const step1Data = { prizeSelected, partnerSelected, ...data };
    handleSubmitStep1(step1Data);
  };

  return (

    <CustomForm
      formData={REFORMED_WINNER_MODAL_FORM_SCHEMA?.step1}
      className='winner_popup'
      onSubmit={handleSubmit}
      submitText={continueButton?.text || "Continue"}
      defaultValues={{ socialMedia, walletAddress, email }}
      submitBtnClassName="btn btn-primary col-1"
      preSubmitElement={
        <div className="prize_col">
          <label><SafeHTML html={prizeSection?.title}/></label>
          <Prize
            label={"$250,000 worth of PremiumToken"}
            prizeSelected={prizeSelected.first}
            setPrizeSelected={(checked) => {
              setPrizeSelected({ first: checked })
              if (checked) {
                setPartnerSelected(false)
              }
            }}
            imageUrl={prizeSection?.prize1?.imageUrl}
          />
          {/* <Prize
            label={"Supercar to a value of $250,000"}
            prizeSelected={prizeSelected.second}
            setPrizeSelected={(checked) =>
              setPrizeSelected({ second: checked })
            }
            imageUrl={prizeSection?.prize2?.imageUrl}
          /> */}
{/* 
          <div className="partners_col">
            <label>{DEFAULT_CONTENT.SELECT_PARTNER}</label>
            <div className="row gx-2 partners_col">
              {partners?.partnersData?.map((person, index) => (
                <div className="col-12" key={person?.companyLogo}>
                  <div className="partner_logo" key={person?.companyLogo}>
                    <RenderIconWithHover
                      iconUrl={addBaseUrlToUrls(person?.companyLogo)}
                      defaultIcon={ICONS.Discord}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div> */}
        </div>
      }
    />
  );
}
