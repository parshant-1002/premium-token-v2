import { POPUP_TYPE } from "./constants"

export const WINNER_DESCRIPTION = (data) => {
    const { popUp1 , popUp2, popUp3} = data
    return {
        [POPUP_TYPE.popUp1] : popUp1?.description,
        [POPUP_TYPE.popUp2] : popUp2?.description,
        [POPUP_TYPE.popUp3] : popUp3?.description
    }
}
