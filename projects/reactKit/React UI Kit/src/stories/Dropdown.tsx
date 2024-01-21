// Dropdown.tsx
import React, { useState } from 'react';
import './Dropdown.css';

interface DropdownProps {
  options: string[];
  styleType: 'style1' | 'style2';
  label: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options, styleType, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <label className={`dropdown dropdown-${styleType}`}>
      <div className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
        {label}
      </div>
      <input type="checkbox" className="dropdown-input" checked={isOpen} readOnly />
      <ul className="dropdown-menu">
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </label>
  );
};

export default Dropdown;
