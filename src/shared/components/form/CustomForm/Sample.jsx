import CustomForm from './CustomForm';
import { FORM_VALIDATION_MESSAGES } from '../../../constants/validations';
import { INPUT_TYPES, VALIDATION_REGEX } from '../../../constants';

const SampleForm = () => {
    const VIDEO_NAME_SCHEMA = {
        videoName: {
            type: INPUT_TYPES.PASSWORD,
            label: '',
            className: 'col-md-4',
            placeholder: 'Video Name',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
                pattern: {
                    value: VALIDATION_REGEX.SPECIAL_CHARACTERS_NOT_ALLOWED,
                    message: FORM_VALIDATION_MESSAGES().VIDEO_NAME
                },
                minLength: {
                    value: 3,
                    message: FORM_VALIDATION_MESSAGES(5).VIDEO_NAME
                },
                maxLength: {
                    value: 18,
                    message: FORM_VALIDATION_MESSAGES(18).VIDEO_NAME
                }
            }
        },
        selectData: {
            type: INPUT_TYPES.SELECT,
            label: '',
            className: 'col-md-4',
            placeholder: 'Select data',
            options: [
                { value: '1', label: 'Option 1' },
                { value: '2', label: 'Option 2' },
                { value: '3', label: 'Option 3' }
            ],
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
                pattern: {
                    value: VALIDATION_REGEX.SPECIAL_CHARACTERS_NOT_ALLOWED,
                    message: FORM_VALIDATION_MESSAGES().VIDEO_NAME
                },
                minLength: {
                    value: 3,
                    message: FORM_VALIDATION_MESSAGES(5).VIDEO_NAME
                },
                maxLength: {
                    value: 18,
                    message: FORM_VALIDATION_MESSAGES(18).VIDEO_NAME
                }
            }
        },
        richText: {
            type: INPUT_TYPES.RICH_TEXT,
            label: '',
            className: 'col-md-4',
            placeholder: 'Select data',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        }
    };
    const onSubmit = (data) => {
    };
    return (
        <div>
            <CustomForm
                formData={VIDEO_NAME_SCHEMA}
                onSubmit={onSubmit}
                submitText="Name & Save"
                // handleSecondaryButtonClick={handleAutoNameGeneration}
                secondaryBtnText="Auto-Name"
            />
        </div>
    );
};

export default SampleForm;
