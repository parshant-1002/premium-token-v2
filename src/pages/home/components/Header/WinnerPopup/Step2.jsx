import React, { useEffect, useState } from "react";
import { BUTTON_LABELS } from "../../../helpers/constants";
import CustomForm from "../../../../../shared/components/form/CustomForm/CustomForm";
import CountriesJson from '../../../../../assets/json/countries.json';

const countries = CountriesJson.map(({ name }) => ({ label: name, value: name }));

export default function Step2({ handleSubmitStep2, handleAutoNameGeneration, formData = {}, REFORMED_WINNER_MODAL_FORM_SCHEMA }) {
    // const [formSchema, setFormSchema] = useState(REFORMED_WINNER_MODAL_FORM_SCHEMA.step2);
    const [options, setOptions] = useState({ country: countries, city: []});
    const { name, dob, phoneNumber, country, city, streetAddress, zip } = formData || {};

    const handleStateDataChange = (name, value) => {
        if (name === 'country') {
            const selectedCountry = CountriesJson.find(({ name }) => name === value?.value);
            if (selectedCountry?.states?.length !== 0) {
                setOptions((prev) => ({ ...prev, city: selectedCountry?.states.map(({ name }) => ({ label: name, value: name })) || [] }));
            }
        }
    };

    return (
        <div>
            <CustomForm
                formData={REFORMED_WINNER_MODAL_FORM_SCHEMA.step2}
                onSubmit={handleSubmitStep2}
                submitText={BUTTON_LABELS.Continue}
                defaultValues={{ name, dob, phoneNumber, country, city, streetAddress, zip }}
                onChangeValues={handleStateDataChange}
                className="row"
                submitBtnClassName="btn btn-primary col-1"
                options={options}
                // secondaryBtnText="Back"
                // handleSecondaryButtonClick={handleAutoNameGeneration}
            />
        </div>
    );
}
