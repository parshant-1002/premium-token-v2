import React, { useEffect, useState } from "react";
import { BUTTON_LABELS } from "../../../helpers/constants";
import { DEFAULT_CONTENT, WINNER_MODAL_FORM_SCHEMA } from "../helpers/constants";
import CustomForm from "../../../../../shared/components/form/CustomForm/CustomForm";
import CountriesJson from '../../../../../assets/json/countries.json';

const countries = CountriesJson.map(({ name }) => ({ label: name, value: name }));

export default function Step2({ handleSubmitStep2, handleAutoNameGeneration, formData = {} }) {
    const [formSchema, setFormSchema] = useState(WINNER_MODAL_FORM_SCHEMA.step2(countries, []));
    const { name, dob, phoneNumber, country, city, streetAddress, zip } = formData || {};

    const handleStateDataChange = (name, value) => {
        if (name === 'country') {
            const selectedCountry = CountriesJson.find(({ name }) => name === value?.value);
            if (selectedCountry?.states?.length !== 0) {
                setFormSchema(prevFormSchema => WINNER_MODAL_FORM_SCHEMA.step2(countries, selectedCountry?.states.map(({ name }) => ({ label: name, value: name })) || []));
            }
        }
    };

    return (
        <div>
            <CustomForm
                formData={formSchema}
                onSubmit={handleSubmitStep2}
                submitText={BUTTON_LABELS.Continue}
                defaultValues={{ name, dob, phoneNumber, country, city, streetAddress, zip }}
                onChangeValues={handleStateDataChange}
                className="row"
                submitBtnClassName="btn btn-primary col-1"
                // secondaryBtnText="Back"
                // handleSecondaryButtonClick={handleAutoNameGeneration}
            />
        </div>
    );
}
