import React from "react";
import { ICONS } from "../../../../../assets";
import { DEFAULT_CONTENT } from "../helpers/constants";
import CircularCheckBox from "../../../../../shared/components/CircularCheckBox";

export default function Prize({ prizeSelected, disabled, setPrizeSelected }) {
    console.log('prizeSelected: ', prizeSelected);
    return <div className="border gap-2 ">
        <CircularCheckBox disabled={disabled} checked={prizeSelected} setChecked={setPrizeSelected} />
        <label >{DEFAULT_CONTENT.PRIZE_LABEL}</label>
        <img src={ICONS.premiumtoken} />
    </div>;
}
