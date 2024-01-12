import React from 'react';
import './dropdown.css';

const DropdownInput = ({ options, onChange }) => {
  return (
    <select className="dropdown" onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};
//sonar testing 1
export default DropdownInput;
