import React, { useState } from "react";
import CustomForm from "../../../../../shared/components/form/CustomForm/CustomForm";
import {
    DEFAULT_CONTENT,
    WINNER_MODAL_FORM_SCHEMA
} from "../helpers/constants";
import { BUTTON_LABELS } from "../../../helpers/constants";
import { ICONS } from "../../../../../assets";
import Prize from "./Prize";
import { RenderIconWithHover } from "../../../../../shared/components/RenderIconWithHover";
import CircularCheckBox from "../../../../../shared/components/CircularCheckBox";
import { addBaseUrlToUrls } from "../../../../../shared/utilities";

export default function Step1({ partners, handleSubmitStep1, formData = {} }) {
    const { socialMedia, walletAddress } = formData;
    const [prizeSelected, setPrizeSelected] = useState({
        first: false,
        second: false
    });
    const [partnerSelected, setPartnerSelected] = useState({});
    const handleSubmit = (data) => {
        const step1Data = { prizeSelected, partnerSelected, ...data };
        handleSubmitStep1(data);
    };

    console.log("prizeSelected33: ", prizeSelected);
    return (
        <div>
            <CustomForm
                formData={WINNER_MODAL_FORM_SCHEMA.step1}
                onSubmit={handleSubmit}
                submitText={BUTTON_LABELS.Continue}
                defaultValues={{ socialMedia, walletAddress }}
                className="row"
                submitBtnClassName="btn btn-primary col-1"
                // handleSecondaryButtonClick={handleAutoNameGeneration}
                secondaryBtnText="Auto-Name"
                preSubmitElement={
                    <div className="gap-2 ">
                        {DEFAULT_CONTENT.SELECT_BETWEEN_TWO}
                        <Prize
                            prizeSelected={prizeSelected.first}
                            setPrizeSelected={(checked) =>
                                setPrizeSelected({ first: checked })
                            }
                        />
                        <Prize
                            prizeSelected={prizeSelected.second}
                            setPrizeSelected={(checked) =>
                                setPrizeSelected({ second: checked })
                            }
                        />

                        {DEFAULT_CONTENT.SELECT_PARTNER}
                        {prizeSelected.first ? partners?.personData?.map((person) => (
                            <div>
                                <span>
                                    <RenderIconWithHover
                                        iconUrl={addBaseUrlToUrls(person?.companyLogo)}
                                        defaultIcon={ICONS.Discord}
                                    />
                                </span>
                                <CircularCheckBox
                                    className="position-absolute"
                                    checked={partnerSelected}
                                    setChecked={(checked) => setPartnerSelected(checked)}
                                />
                            </div>
                        )) : null}
                    </div>
                }
            />
        </div>
    );
}
