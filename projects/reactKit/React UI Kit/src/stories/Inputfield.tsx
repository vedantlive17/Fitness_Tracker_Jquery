import React from 'react';
import './inputfield.css';

interface InputFieldProps {
  disabled?: boolean;
  error?: boolean;
  size?: 'small' | 'medium' | 'large';
  placeholder?: string;
}

export const InputField = ({ disabled = false, error = false, size = 'medium', placeholder = '' }: InputFieldProps) => {
  let sizeClass = '';
  switch (size) {
    case 'small':
      sizeClass = 'inputfield-small';
      break;
    case 'large':
      sizeClass = 'inputfield-large';
      break;
    default:
      sizeClass = '';
  }

  return (
    <input
      type="text"
      className={`inputfield ${sizeClass} ${error ? 'inputfield-error' : ''} ${disabled ? 'inputfield-disabled' : ''}`}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
