import React from 'react';
import { INPUT_TYPES } from '../../../constants';

export function ErrorComponent({ error, render }) {
    if (render) {
        return render(error);
    }
    return <span className="d-block error">{error?.message}</span>;
}

const TextField = React.forwardRef(
    function TextField({ type, placeholder, className = 'form-control', ...otherProps }, ref) {
        return type === INPUT_TYPES.TEXT_AREA ? (
            <textarea
                className={className}
                placeholder={placeholder}
                ref={ref}
                {...otherProps}
            />
        ) : (
            <input
                type={type}
                ref={ref}
                placeholder={placeholder}
                className={className}
                {...otherProps}
            />
        );
    }
);

export default TextField;
