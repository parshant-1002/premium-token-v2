import { CHECK_IS_WINNER } from "../constants";

export const checkIfUserIsWinner = (payload,callback) => ({
    type: CHECK_IS_WINNER,
    payload,
    callback,
}
)