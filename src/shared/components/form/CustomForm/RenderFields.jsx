import { useState } from "react";
import TextField, { ErrorComponent } from "../TextInput/TextInput";
import CustomSelect from "../Select";
import { INPUT_TYPES } from "../../../constants";
import RichText from "../RIchText/RitchText";

export const RenderField = ({ field, id, handleRegister, handleInputChange, getValues, errors }) => {
    const [inputType, setInputType] = useState(field.type);
    const handleEyeClick = () => {
        setInputType((prev) => prev === INPUT_TYPES.PASSWORD ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD);
    };
    const renderInput = () => {
        switch (field.type) {
            case INPUT_TYPES.TEXT:
            case INPUT_TYPES.TEXT_AREA:
            case 'password':
                return (
                    <TextField
                        id={id}
                        type={inputType}
                        placeholder={field.placeholder}
                        {...handleRegister(id)}
                        onChange={(e) => handleInputChange(id, e.target.value)}
                        maxLength={field?.schema?.maxLength?.value || ''}
                        minLength={field?.schema?.minLength?.value || ''}
                        icon = {field.icon || ""}
                    />
                );
            case INPUT_TYPES.SELECT:
                return (
                    <CustomSelect
                        id={id}
                        options={field.options}
                        {...handleRegister(id)}
                        onChange={(value) => handleInputChange(id, value)}
                    />
                );
            case INPUT_TYPES.RICH_TEXT:
                return (
                    <RichText
                        id={id}
                        placeholder={field.placeholder}
                        content={field.value}
                        {...handleRegister(id)}
                        onChange={(value) => handleInputChange(id, value)}
                    />
                );
            // Add more cases for other input types here
            default:
                return null;
        }
    };

    return (
        <div className="form-group mb-3" key={id}>
            <label htmlFor={id}>{field.label}</label>
            <div className="position-relative">
                {renderInput()}
                {field.type === 'password' && (
                    <button type="button" className="show_hide_pwd" onClick={() => handleEyeClick(id)}>
                        {inputType === 'password' ? "ShowPassword" : "HidePassword"}
                    </button>
                )}
            </div>
            <div className="d-flex align-items-center text-start justify-content-between flex-nowrap mt-2">
                <ErrorComponent error={errors[id]} render={field.render} />
                {field?.isShowInputCount ? (
                    <span className="badge bg-outline-primary rounded-50 ms-auto">
                        {getValues(id)?.length}
                        /
                        {field?.schema?.maxLength?.value}
                    </span>
                ) : null}
            </div>
        </div>
    );
};
