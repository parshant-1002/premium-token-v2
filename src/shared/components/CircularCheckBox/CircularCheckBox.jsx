import React, { useState } from 'react';
import './CircularCheckbox.css'; // Import CSS file for styling

const CircularCheckbox = ({ disabled = false, checked = false, setChecked = () => { } }) => {

    const handleCheckboxChange = () => {
        if (!disabled) {
            setChecked(!checked); // Toggle the checkbox state if not disabled
        }
    };

    return (
        <div className={`checkbox-container ${disabled ? 'disabled' : ''}`} onClick={handleCheckboxChange}>
            <input type="checkbox" className="checkbox" checked={checked} disabled={disabled} onChange={() => { }} />
            <label className="checkbox-label">
                {checked && <span className="checkbox-tick">&#10003;</span>}
            </label>
        </div>
    );
};

export default CircularCheckbox;
