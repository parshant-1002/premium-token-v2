import React from "react";
import { BUTTON_LABELS } from "../../../helpers/constants";
import { DEFAULT_CONTENT, WINNER_MODAL_FORM_SCHEMA } from "../helpers/constants";
import CustomForm from "../../../../../shared/components/form/CustomForm/CustomForm";

export default function Step2({ handleSubmitStep2, handleAutoNameGeneration, formData = {} }) {
    const { name, dob, phoneNumber, country, city, streetAddress, zip } = formData || {};
    return <div>
        <CustomForm
            formData={WINNER_MODAL_FORM_SCHEMA.step2}
            onSubmit={handleSubmitStep2}
            submitText={BUTTON_LABELS.Continue}
            defaultValues={{ name, dob, phoneNumber, country, city, streetAddress, zip }}
            className="row"
            submitBtnClassName="btn btn-primary col-1"
            secondaryBtnText="Back"
            handleSecondaryButtonClick={handleAutoNameGeneration}
        />
    </div>;
}
