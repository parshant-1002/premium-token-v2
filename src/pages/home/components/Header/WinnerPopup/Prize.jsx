import React from "react";
import { ICONS } from "../../../../../assets";
import CircularCheckBox from "../../../../../shared/components/CircularCheckBox";
import './style.scss';

export default function Prize({ prizeSelected, disabled, setPrizeSelected, label = "" }) {
    console.log('prizeSelected: ', prizeSelected);
    return <div className="prize_card">
        <div className="prize_wrap">
            <CircularCheckBox disabled={disabled} checked={prizeSelected} setChecked={setPrizeSelected} />
            <span>{label}</span>
            <em className="win_icon"><img src={ICONS.premiumtoken} width={85} height={57} /></em>
        </div>
    </div>;
}
