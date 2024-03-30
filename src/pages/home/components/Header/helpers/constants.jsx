import { RenderIconWithHover } from "../../../../../shared/components/RenderIconWithHover";
import SafeHTML from "../../../../../shared/components/SanitizeHtml";
import { INPUT_TYPES, VALIDATION_REGEX } from "../../../../../shared/constants";
import { isValidSolanaAddress } from "../../../../../shared/constants/utils";
import { FORM_VALIDATION_MESSAGES } from "../../../../../shared/constants/validations";

export const WINNER_MODAL_FORM_SCHEMA =(data, walletAddress)=>{
    const { popUp1, popUp2, popUp3 } = data
    console.log(walletAddress,"walletaddressss")
    return {

    step1: {
        socialMedia: {
            type: INPUT_TYPES.TEXT,
            label: <SafeHTML html={popUp1?.socialPlatforms?.title}/>,
            className: 'form-control col-md-6',
            placeholder: popUp1?.socialPlatforms?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        email: {
            type: INPUT_TYPES.EMAIL,
            label: <SafeHTML html={popUp1?.email?.title}/>,
            className: 'form-control col-md-6',
            placeholder: popUp1?.email?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
                pattern: {
                    value: VALIDATION_REGEX.EMAIL,
                    message: FORM_VALIDATION_MESSAGES().VALID_EMAIL
                },
            }
        },
        walletAddress: {
            type: INPUT_TYPES.TEXT,
            label: <SafeHTML html={popUp1?.walletAddress?.title} />,
            icon: <span className="wallet_icon"><RenderIconWithHover iconUrl={popUp1?.walletAddress?.lockbuttonImageUrl}/></span>,
            className: 'form-control col-md-6',
            placeholder: popUp1?.walletAddress?.placeholder,
            disabled:true,
            // schema: (data) => ({
            //     required: FORM_VALIDATION_MESSAGES().REQUIRED,
            //     validate: () => {
            //         const valid = isValidSolanaAddress(data);
            //         if (!valid) {
            //             return FORM_VALIDATION_MESSAGES().INVALID_SOLANA_ADDRESS;
            //         }
            //         return true;
            //     },
            // })
        }
    },
    step2:{
        name: {
            type: INPUT_TYPES.TEXT,
            label: <SafeHTML html={popUp2?.fullName?.title} />,
            className: 'form-control col-md-6',
            placeholder: popUp2?.fullName?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        dob: {
            type: INPUT_TYPES.DATE,
            label: <SafeHTML html={popUp2?.dateOfBirth?.title} />,
            className: 'form-control col-md-6',
            placeholder: popUp2?.dateOfBirth?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        phoneNumber: {
            type: INPUT_TYPES.PHONE,
            label: <SafeHTML html={popUp2?.phoneNumber?.title} />,
            className: 'form-control col-md-6',
            placeholder: popUp2?.phoneNumber?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        country: {
            type: INPUT_TYPES.SELECT,
            label: <SafeHTML html={popUp2?.country?.title} />,
            className: 'col-md-6',
            placeholder: popUp2?.country?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        city: {
            type: INPUT_TYPES.SELECT,
            label: <SafeHTML html={popUp2?.city?.title} />,
            className: 'col-md-6',
            placeholder: popUp2?.city?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        streetAddress: {
            type: INPUT_TYPES.TEXT,
            label: <SafeHTML html={popUp2?.streetAddress?.title} />,
            className: 'form-control col-md-6',
            placeholder: popUp2?.streetAddress?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
        zip: {
            type: INPUT_TYPES.TEXT,
            label: <SafeHTML html={popUp2?.zip?.title} />,
            className: 'form-control col-md-6',
            placeholder: popUp2?.zip?.placeholder,
            schema: {
                required: FORM_VALIDATION_MESSAGES().REQUIRED,
            }
        },
    },
}};

export const DEFAULT_CONTENT = {
    WINNER_TITLE: "Congratz, you have won!",
    WINNER_DESCRIPTION: "Fill out the information below to get your prize.",
    SELECT_BETWEEN_TWO: "Select between the 2 prizes",
    PRIZE_LABEL_1: "350,000 $ worth of PremiumToken",
    PRIZE_LABEL_2: "Supercar to a value of 350,000 $",

    SELECT_PARTNER: "Partner",
}

export const POPUP_TYPE = {
    popUp1:1,
    popUp2:2,
    popUp3:3
}

export const prizeType = {
    first:1,
    second:2
}
