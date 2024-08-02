'use client'
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  onClick?: () => void; // Define onClick as a function that takes no parameters and returns void
}

const Button: React.FC<ButtonProps> = ({ className, children, onClick, ...rest }) => {

  const handleClick = () => {
    console.log('Button clicked');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={` ${className}`}
      onClick={handleClick}
      {...rest} // Spread the rest of the props
    >
      {children}
    </button>
  );
};

export default Button;
