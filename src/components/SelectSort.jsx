import React from 'react';
import PropTypes from 'prop-types';

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
SelectSort.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  setSorted: PropTypes.func.isRequired,
  sorted: PropTypes.string.isRequired,
  defaultValueDisabled: PropTypes.string.isRequired,
};
export default SelectSort;
