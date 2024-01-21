import React from 'react';
import './Spinners.css';

interface SpinnerProps {
  type: '1' | '2' | '3';
}

export const Spinner: React.FC<SpinnerProps> = ({ type }) => {
  return <div className={`spinner spinner-${type}`}></div>;
};
