import React from 'react';
import './datepicker.css';

interface DatePickerProps {
  /**
   * Is the date picker disabled?
   */
  disabled?: boolean;
}

export const DatePicker = ({ disabled = false }: DatePickerProps) => {
  return (
    <input
      type="date"
      className={`datepicker ${disabled ? 'datepicker-disabled' : ''}`}
      disabled={disabled}
    />
  );
};
