import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller } from 'react-hook-form';

const CustomDatePicker = React.forwardRef(({ value, control, ...otherProps }) => {
    return (
        <Controller
            name="file"
            control={control}
            defaultValue={[]}
            {...otherProps}
            render={({ field: { onChange, onBlur, value, ref } }) => {
                // Check if value is a valid date object
                const selectedDate = value instanceof Date ? value : null;

                return (
                    <DatePicker className='form-control' selected={selectedDate} onChange={onChange} />
                );
            }}
        />
    );
});

export default CustomDatePicker;
