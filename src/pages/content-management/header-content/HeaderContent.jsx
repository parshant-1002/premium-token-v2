import CustomForm from "../../../shared/components/form/CustomForm/CustomForm";
import { INPUT_TYPES, VALIDATION_REGEX } from "../../../shared/constants";
import { FORM_VALIDATION_MESSAGES } from "../../../shared/constants/validations";

const HeaderContent = () => {


    const HEADER_CONTENT_FORM_SCHEMA = {
        title: {
            type: INPUT_TYPES.TEXT,
            label: '',
            className: 'col-md-4',
            placeholder: 'Title',
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
        description: {
            type: INPUT_TYPES.TEXT_AREA,
            label: '',
            className: 'col-md-4',
            placeholder: 'Description',
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
        }
    };
    const onSubmit = (data) => {
        
    };
    return (
        <div>
            <CustomForm
                formData={HEADER_CONTENT_FORM_SCHEMA}
                onSubmit={onSubmit}
                submitText="Save"
                // handleSecondaryButtonClick={handleAutoNameGeneration}
                secondaryBtnText="Auto-Name"
            />
        </div>
    );
};

export default HeaderContent;
