import { INPUT_TYPES, VALIDATION_MESSAGES } from "../../../../../shared/constants";

export const WINNER_MODAL_FORM_SCHEMA = {
    step1: {
        socialMedia: {
            type: INPUT_TYPES.TEXT,
            label: 'Whatsapp/Skype/Telegram',
            className: 'form-control col-md-6',
            placeholder: 'Whatsapp/Skype/Telegram',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        walletAddress: {
            type: INPUT_TYPES.TEXT,
            label: 'wallet address',
            className: 'form-control col-md-6',
            placeholder: 'wallet address',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        }
    },
    step2: {
        name: {
            type: INPUT_TYPES.TEXT,
            label: 'Full name',
            className: 'form-control col-md-6',
            placeholder: 'Full name',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        dob: {
            type: INPUT_TYPES.TEXT,
            label: 'Date Of Birth',
            className: 'form-control col-md-6',
            placeholder: 'Date Of Birth',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        phoneNumber: {
            type: INPUT_TYPES.TEXT,
            label: 'Phone Number',
            className: 'form-control col-md-6',
            placeholder: 'Phone Number',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        country: {
            type: INPUT_TYPES.SELECT,
            label: 'Country',
            className: 'col-md-6',
            placeholder: 'Select Country',
            options: [
                { value: 'India', label: 'India' },
                { value: 'Pakistan', label: 'Pakistan' },
                { value: 'Canada', label: 'Canada' }
            ],
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        city: {
            type: INPUT_TYPES.SELECT,
            label: 'Country',
            className: 'col-md-6',
            placeholder: 'Select Country',
            options: [
                { value: 'India', label: 'India' },
                { value: 'Pakistan', label: 'Pakistan' },
                { value: 'Canada', label: 'Canada' }
            ],
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        streetAddress: {
            type: INPUT_TYPES.TEXT,
            label: 'Street Address',
            className: 'form-control col-md-6',
            placeholder: 'Street Address',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
        zip: {
            type: INPUT_TYPES.TEXT,
            label: 'ZIP',
            className: 'form-control col-md-6',
            placeholder: 'ZIP',
            schema: {
                required: VALIDATION_MESSAGES.REQUIRED,
            }
        },
    }
};

export const DEFAULT_CONTENT = {
    WINNER_TITLE: "Congratz, you have won!",
    WINNER_DESCRIPTION: "Fill out the information below to get your prize.",
    SELECT_BETWEEN_TWO: "Select between the 2 prizes",
    PRIZE_LABEL: "350,000 $ worth of PremiumToken",
    SELECT_PARTNER: "Select Partner",
}