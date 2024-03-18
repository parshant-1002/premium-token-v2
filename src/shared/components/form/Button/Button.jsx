import React from 'react';

export const retrunButtonClass = (size, btnType) => {
  let classname = '';
  switch (size) {
    case 'extraSmall':
      classname = 'btn-xs';
      break;
    case 'small':
      classname = 'btn-sm';
      break;
    case 'medium':
      classname = 'btn-md';
      break;
    case 'large':
      classname = 'btn-lg';
      break;
    default:
      classname = '';
  }
  if (btnType === 'primary') {
    return `${classname} btn-primary`;
  }
  return `${classname} btn-secondary`;
};

function Button({
  onClick = () => { },
  children, type = 'button', size, btnType = 'primary',
  className,
  prepend,
  append,
  ...otherProps
}) {
  const btnClass = retrunButtonClass(size, btnType);
  return (
    <button
      className={`btn ${btnClass} rounded-50 ${className}`}
      type={type === 'submit' ? 'submit' : 'button'}
      onClick={onClick}
      {...otherProps}
    >
      {prepend}
      {children}
      {append}
    </button>
  );
}

export default Button;
