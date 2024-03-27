import { CHECK_IS_WINNER, WINNER_CLAIM_PRIZE } from "../constants";

export const checkIfUserIsWinner = (payload,callback) => ({
    type: CHECK_IS_WINNER,
    payload,
    callback,
}
)

export const claimPrize = (payload, callback) => ({
    type: WINNER_CLAIM_PRIZE,
    payload,
    callback,
}
)