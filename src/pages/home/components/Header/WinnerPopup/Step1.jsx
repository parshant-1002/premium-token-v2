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
  const { socialMedia, walletAddress } = formData;
  const {  description, prizeSection, title } = popUp1
  const handleSubmit = (data) => {
    const step1Data = { prizeSelected, partnerSelected, ...data };
    handleSubmitStep1(step1Data);
  };
  return (

    <CustomForm
      formData={REFORMED_WINNER_MODAL_FORM_SCHEMA?.step1}
      onSubmit={handleSubmit}
      submitText={"Continue"}
      defaultValues={{ socialMedia, walletAddress }}
      submitBtnClassName="btn btn-primary col-1"
      // handleSecondaryButtonClick={handleAutoNameGeneration}
      secondaryBtnText="Auto-Name"
      preSubmitElement={
        <div className="prize_col">
          <label><SafeHTML html={prizeSection?.title}/></label>
          <Prize
            label={<SafeHTML html={prizeSection?.prize1?.title} />}
            prizeSelected={prizeSelected.first}
            setPrizeSelected={(checked) => {
              setPrizeSelected({ first: checked })
              if (checked) {
                setPartnerSelected(false)
              }
            }}
            imageUrl={prizeSection?.prize1?.imageUrl}
          />
          <Prize
            label={<SafeHTML html={prizeSection?.prize2?.title} />}
            prizeSelected={prizeSelected.second}
            setPrizeSelected={(checked) =>
              setPrizeSelected({ second: checked })
            }
            imageUrl={prizeSection?.prize2?.imageUrl}
          />

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
                    {/* <CircularCheckBox
                      className="position-absolute"
                      checked={partnerSelected && partnerSelected.id === person?._id && partnerSelected.checked}
                      setChecked={(checked) => setPartnerSelected({ id: person?._id, checked })}
                      disabled={prizeSelected.first}
                    /> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      }
    />
  );
}
