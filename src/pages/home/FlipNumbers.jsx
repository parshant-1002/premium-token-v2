import React, { useEffect, useState } from 'react';
import "./flipnumber.scss"

const SmoothFlipCounter = ({ initialValue, settings }) => {
    const [value, setValue] = useState(initialValue);
    const [counterSettings, setCounterSettings] = useState({
        digits: settings.digits || 5,
        delay: settings.delay || 250,
        direction: settings.direction || '',
    });

    useEffect(() => {
        const interval = setInterval(() => {
            // Update the value dynamically, e.g., from the backend
            setValue((prevValue) => prevValue + 5365); // Example update
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const renderDigits = () => {
        const digits = value.toString().padStart(counterSettings.digits, '0').split('');
        return digits.map((digit, index) => (
            <div className = "digit_card" key={index}>
                <b data-value={digit}>{digit}</b>
            </div>
        ));
    };

    return (
        <div className='d-flex justify-content-center'>
            <div className="numCounter" data-value={value}>
                {renderDigits()}
            </div>
        </div>
    );
};

export default SmoothFlipCounter;
