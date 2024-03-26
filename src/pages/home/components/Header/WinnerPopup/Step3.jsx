import React from "react";

export default function Step3({ handleSure, handleCheckAgain }) {
    return <div className="d-flex flex-column gap-3">
        <button className="btn btn-lg btn-secondary" onClick={handleSure}>
            <span className="transform-none">Yes I am Sure</span>
        </button>
        <button className="btn btn-lg btn-primary" onClick={handleCheckAgain}>
            <span className="transform-none">Check Again</span>
        </button>
    </div>;
}
