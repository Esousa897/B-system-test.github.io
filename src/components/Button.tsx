import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className = '' }) => {
  return (
    <button 
      onClick={onClick}
      className={`px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
