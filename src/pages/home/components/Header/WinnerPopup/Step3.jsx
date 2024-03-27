import React from "react";
import SafeHTML from "../../../../../shared/components/SanitizeHtml";

export default function Step3({ handleSure, handleCheckAgain, popUp3 }) {
    return <div className="d-flex flex-column gap-3">
        <button className="btn btn-lg btn-secondary" onClick={handleSure}>
            <span className="transform-none"><SafeHTML html={popUp3?.confirmationButton?.text}/></span>
        </button>
        <button className="btn btn-lg btn-primary" onClick={handleCheckAgain}>
            <span className="transform-none"><SafeHTML html={popUp3?.checkAgainButton?.text} /></span>
        </button>
    </div>;
}
