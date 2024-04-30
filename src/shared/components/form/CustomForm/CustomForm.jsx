import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from '../Button';
import { RenderField } from './RenderFields';

function CustomForm({
    submitText = 'Submit',
    preSubmitElement,
    onSubmit = () => {},
    id = 'hook-form',
    defaultValues = {},
    formData = {},
    handleStateDataChange = () => {},
    secondaryBtnText = '',
    handleSecondaryButtonClick,
    secondaryButtonType = 'button',
    className = '',
    onChangeValues = () => {},
    isShowSubmit = true,
    isDisabledSubmit = false,
    options,
}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        control,
        formState: { errors }
    } = useForm({ defaultValues: { ...defaultValues } });
    const handleInputChange = (name, value) => {
        setValue(name, value);
        onChangeValues(name, value);
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        handleInputChange(name, value);
    };
    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            handleStateDataChange(name, value[name], type);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const handleRegister = (key) => {
        if (typeof formData[key].schema === 'function') {
            return register(key, formData[key].schema(watch(key)));
        }
        return register(key, formData[key].schema);
    };
    return (
        <form
            id={id}
            className={className}
        // onSubmit={handleSubmit(onSubmit)}
        >
            {Object.keys(formData).map((key) => {
                return (
                    <RenderField
                        key={key}
                        id={key}
                        field={formData[key]}
                        handleRegister={handleRegister}
                        handleInputChange={handleInputChange}
                        value={getValues()[key]}
                        onInput={handleInput}
                        getValues={getValues}
                        errors={errors}
                        control={control}
                        options={options?.[key] || []}
                    />
                );
            })}
            {preSubmitElement}
            <div className="btn_groups w-100 text-center mt-4">
                {handleSecondaryButtonClick && (
                    <Button
                        data-content={secondaryBtnText}
                        type={secondaryButtonType}
                        onClick={
                            secondaryButtonType === 'submit'
                                ? handleSubmit(handleSecondaryButtonClick)
                                : handleSecondaryButtonClick
                        }
                        className="btn btn-lg btn-secondary w-100"
                    >
                        <span className="transform-none">{secondaryBtnText}</span>
                    </Button>
                )}
                {isShowSubmit ? (
                    <Button
                        onClick={handleSubmit((data, event) => onSubmit(data, event, reset))}
                        type="submit"
                        className="btn btn-lg btn-secondary w-100"
                        disabled={isDisabledSubmit}
                    >
                        <span className="transform-none">{submitText}</span>
                    </Button>
                ) : null}
            </div>
        </form>
    );
}

export default CustomForm;
