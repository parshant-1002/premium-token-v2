import React, { forwardRef } from "react";
import { Controller } from "react-hook-form";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const PhoneNumberInput = forwardRef(({
    name,
    label,
    onChange = () => { },
    control,
    ...custom
}, ref) => {

    return (
        <Controller
            name={name}
            control={control}
            defaultValue=""
            render={({ field: { onChange, onBlur, value, ref }}) => (
                <PhoneInput
                    ref={ref}
                    className="form-control"
                    onChange={onChange} 
                    {...custom}
                />
            )}
        />
    );
});

export default PhoneNumberInput;
