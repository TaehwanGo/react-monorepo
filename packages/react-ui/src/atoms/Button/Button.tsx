import React from 'react';

interface ButtonProps {
  label: string;
}

const Button = ({ label }: ButtonProps) => {
  return (
    <button className="dse-button__container">
      {label || 'Button'} - here
    </button>
  );
};

export default Button;
