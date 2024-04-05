import { POPUP_TYPE, prizeType } from './constants';

export const WINNER_DESCRIPTION = (data) => {
  const { popUp1, popUp2, popUp3 } = data;
  return {
    [POPUP_TYPE.popUp1]: popUp1?.description,
    [POPUP_TYPE.popUp2]: popUp2?.description,
    [POPUP_TYPE.popUp3]: popUp3?.description,
  };
};

function findTrueKey(obj) {
  for (let key in obj) {
    if (obj[key] === true) {
      return key;
    }
  }
  return null; // Return null if no true value is found
}

export const transformClaimPrizeData = (data = {}, prizeSelected) => {
  const {
    walletAddress,
    name,
    dob,
    phoneNumber,
    country,
    city,
    streetAddress,
    zip,
    socialMedia,
    email,
  } = data;
  return {
    walletAddress: walletAddress,
    // prizePrefferedtype: prizeType?.[findTrueKey(prizeSelected)],
    // fullName: name,
    // dateOfBirth: new Date(dob).toISOString(),
    // mobileNumber: phoneNumber,
    // country: country?.value,
    // city: city?.value,
    // streetAddress: streetAddress,
    // zipCode: zip,
    // socialMedia,
    // email
  };
};
