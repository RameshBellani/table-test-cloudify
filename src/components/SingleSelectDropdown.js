import React from "react";
import Select from "react-select";

const SingleSelectDropdown = ({ options, value, onChange }) => {
  return (
    <Select
      options={options}
      value={options.find(option => option.value === value)}
      onChange={(selectedOption) => onChange(selectedOption.value)}
      placeholder="Select an option"
    />
  );
};

export default SingleSelectDropdown;
