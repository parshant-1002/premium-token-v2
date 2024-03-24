import React from 'react';
import Select from 'react-select';
import './react-select.scss';

const CustomSelect = React.forwardRef(({ isMulti = false, ...otherProps }, ref) => {
    return (
        <Select {...otherProps} ref={ref} classNamePrefix="react-prefix" className={`react-select ${isMulti ? 'react-multiselect' : ''}`} isMulti={isMulti}
            // menuIsOpen={true}
        />
    );
});

CustomSelect.displayName = 'CustomSelect'; // Add display name

export default CustomSelect;