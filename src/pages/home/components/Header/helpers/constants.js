import { INPUT_TYPES } from "../../../../../shared/constants";
import { isValidSolanaAddress } from "../../../../../shared/constants/utils";
import { FORM_VALIDATION_MESSAGES } from "../../../../../shared/constants/validations";

export const WINNER_MODAL_FORM_SCHEMA = {
    step1: {
        socialMedia: {
            type: INPUT_TYPES.TEXT,
            label: 'Whatsapp/Skype/Telegram',
            className: 'form-control col-md-6',
            placeholder: 'Whatsapp/Skype/Telegram',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        walletAddress: {
            type: INPUT_TYPES.TEXT,
            label: 'wallet address',
            className: 'form-control col-md-6',
            placeholder: 'wallet address',
            schema: (data) => ({
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
                validate: () => {
                    const valid = isValidSolanaAddress(data);
                    if (!valid) {
                        return FORM_VALIDATION_MESSAGES().INVALID_SOLANA_ADDRESS;
                    }
                    return true;
                },
            })
        }
    },
    step2: (countries = [], states = []) => ({
        name: {
            type: INPUT_TYPES.TEXT,
            label: 'Full name',
            className: 'form-control col-md-6',
            placeholder: 'Full name',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        dob: {
            type: INPUT_TYPES.DATE,
            label: 'Date Of Birth',
            className: 'form-control col-md-6',
            placeholder: 'Date Of Birth',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        phoneNumber: {
            type: INPUT_TYPES.PHONE,
            label: 'Phone Number',
            className: 'form-control col-md-6',
            placeholder: 'Phone Number',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        country: {
            type: INPUT_TYPES.SELECT,
            label: 'Country',
            className: 'col-md-6',
            placeholder: 'Select Country',
            options: countries,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        city: {
            type: INPUT_TYPES.SELECT,
            label: 'City',
            className: 'col-md-6',
            placeholder: 'Select City',
            options: states,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        streetAddress: {
            type: INPUT_TYPES.TEXT,
            label: 'Street Address',
            className: 'form-control col-md-6',
            placeholder: 'Street Address',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        zip: {
            type: INPUT_TYPES.TEXT,
            label: 'ZIP',
            className: 'form-control col-md-6',
            placeholder: 'ZIP',
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
    })
};

export const DEFAULT_CONTENT = {
    WINNER_TITLE: "Congratz, you have won!",
    WINNER_DESCRIPTION: "Fill out the information below to get your prize.",
    SELECT_BETWEEN_TWO: "Select between the 2 prizes",
    PRIZE_LABEL_1: "350,000 $ worth of PremiumToken",
    PRIZE_LABEL_2: "Supercar to a value of 350,000 $",

    SELECT_PARTNER: "Select Partner",
}