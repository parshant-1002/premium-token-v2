import React from "react";
import { ICONS } from "../../../../../assets";
import { DEFAULT_CONTENT } from "../helpers/constants";
import CircularCheckBox from "../../../../../shared/components/CircularCheckBox";
import './style.scss';

export default function Prize({ prizeSelected, disabled, setPrizeSelected }) {
    console.log('prizeSelected: ', prizeSelected);
    return <div className="prize_card">
        <div className="prize_wrap">
            <CircularCheckBox disabled={disabled} checked={prizeSelected} setChecked={setPrizeSelected} />
            <span>{DEFAULT_CONTENT.PRIZE_LABEL}</span>
            <em className="win_icon"><img src={ICONS.premiumtoken} width={85} height={57} /></em>
        </div>
    </div>;
}
