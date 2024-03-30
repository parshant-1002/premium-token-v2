import { useState } from 'react';
import TextField, { ErrorComponent } from '../TextInput/TextInput';
import CustomSelect from '../Select';
import { INPUT_TYPES } from '../../../constants';
import RichText from '../RIchText/RitchText';
import Datepicker from '../Datepicker';
import PhoneInput from '../PhoneInput';

export const RenderField = ({
  field,
  id,
  handleRegister,
  handleInputChange,
  getValues,
  errors,
  value,
  control,
  options,
}) => {
  const [inputType, setInputType] = useState(field.type);
  const handleEyeClick = () => {
    setInputType((prev) =>
      prev === INPUT_TYPES.PASSWORD ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD
    );
  };
  const renderInput = () => {
    field.type == INPUT_TYPES.TEXT && console.log(field.value, 'FIELDVALUE');
    switch (field.type) {
      case INPUT_TYPES.TEXT:
      case INPUT_TYPES.TEXT_AREA:
      case INPUT_TYPES.EMAIL:
      case 'password':
        return (
          <TextField
            id={id}
            type={inputType}
            disabled={!!field?.disabled}
            placeholder={field.placeholder}
            {...handleRegister(id)}
            onChange={(e) => handleInputChange(id, e.target.value)}
            maxLength={field?.schema?.maxLength?.value || ''}
            minLength={field?.schema?.minLength?.value || ''}
            icon={field.icon || ''}
          />
        );
      case INPUT_TYPES.DATE:
        return (
          <Datepicker
            id={id}
            value={value}
            placeholder={field.placeholder}
            {...handleRegister(id)}
            onChange={(value) => handleInputChange(id, value)}
            control={control}
          />
        );
      case INPUT_TYPES.PHONE:
        return (
          <PhoneInput
            id={id}
            value={value}
            placeholder={field.placeholder}
            {...handleRegister(id)}
            onChange={(value) => handleInputChange(id, value)}
            control={control}
          />
        );
      case INPUT_TYPES.SELECT:
        return (
          <CustomSelect
            id={id}
            value={value}
            options={options}
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
    <div className="form-field" key={id}>
      {field.label && <label htmlFor={id}>{field.label}</label>}
      <div className="position-relative">
        {renderInput()}
        {field.type === 'password' && (
          <button
            type="button"
            className="show_hide_pwd"
            onClick={() => handleEyeClick(id)}
          >
            {inputType === 'password' ? 'ShowPassword' : 'HidePassword'}
          </button>
        )}
      </div>
      <ErrorComponent error={errors[id]} render={field.render} />
      {field?.isShowInputCount ? (
        <span className="badge bg-outline-primary ms-auto">
          {getValues(id)?.length}/{field?.schema?.maxLength?.value}
        </span>
      ) : null}
    </div>
  );
};
