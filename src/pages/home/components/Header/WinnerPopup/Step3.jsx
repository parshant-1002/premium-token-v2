import React from "react";

export default function Step3({ handleSure, handleCheckAgain }) {
    return <div className="d-flex flex-column gap-2">
        <button className="btn btn-primary" onClick={handleSure}>
            Yes I am Sure
        </button>
        <button className="btn btn-primary" onClick={handleCheckAgain}>
            Check Again
        </button>
    </div>;
}
