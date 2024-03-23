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
}) {
    const {
        register,
        handleSubmit,
        watch,
        reset,
        setValue,
        getValues,
        // formState,
        formState: { errors }
    } = useForm({ defaultValues: { ...defaultValues } });

    const handleInputChange = (name, value) => {
        setValue(name, value);
        onChangeValues(name, value);
    };

    useEffect(() => {
        if (Object.keys(defaultValues).length) {
            reset({ ...defaultValues });
        }
    }, [defaultValues]);

    useEffect(() => {
        const subscription = watch((value, { name, type }) => {
            handleStateDataChange(name, value[name], type);
        });
        return () => subscription.unsubscribe();
    }, [watch]);

    const handleRegister = (key) => {
        if (typeof formData[key].schema === 'function') {
            return register(key, formData[key].schema(watch('password')));
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
                        getValues={getValues}
                        errors={errors}
                    />
                );
            })}
            {preSubmitElement}
            <div className="btn_groups w-100 text-center">
                {handleSecondaryButtonClick && (
                    <Button
                        data-content={secondaryBtnText}
                        type={secondaryButtonType}
                        onClick={
                            secondaryButtonType === 'submit'
                                ? handleSubmit(handleSecondaryButtonClick)
                                : handleSecondaryButtonClick
                        }
                        className="btn-md btn-secondary"
                    >
                        <span className="transform-none">{secondaryBtnText}</span>
                    </Button>
                )}
                {isShowSubmit ? (
                    <Button
                        onClick={handleSubmit(onSubmit)}
                        type="submit"
                        className="btn-md btn-secondary"
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
