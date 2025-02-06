import React from 'react';

const SelectSort = ({ options, setSorted, sorted, defaultValueDisabled }) => {
  return (
    <div>
      <select value={sorted} onChange={e => setSorted(e.target.value)}>
        <option disabled value="">
          {defaultValueDisabled}
        </option>
        {options.map(option => (
          <option key={option.value} value={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectSort;
