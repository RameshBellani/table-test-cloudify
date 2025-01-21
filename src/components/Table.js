import React, { useState } from "react";
import SingleSelectDropdown from "./SingleSelectDropdown";
import MultiSelectDropdown from "./MultiSelectDropdown";

const Table = () => {
  const initialOptions = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];

  const [rows, setRows] = useState([
    { id: 1, singleSelect: null, multiSelect: [] },
  ]);
  const [usedOptions, setUsedOptions] = useState([]);
  const [multiSelectOptions, setMultiSelectOptions] = useState([
    { value: "Item 1", label: "Item 1" },
    { value: "Item 2", label: "Item 2" },
  ]);

  
  const addRow = () => {
    setRows([
      ...rows,
      { id: rows.length + 1, singleSelect: null, multiSelect: [] },
    ]);
  };

  
  const handleSingleSelectChange = (value, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].singleSelect = value;
    setRows(updatedRows);

    
    setUsedOptions((prevUsedOptions) => [...prevUsedOptions, value]);
  };

  
  const handleMultiSelectChange = (value, rowIndex) => {
    const updatedRows = [...rows];
    updatedRows[rowIndex].multiSelect = value;
    setRows(updatedRows);
  };

  
  const handleAddMultiSelectOption = (newOption) => {
    const newItem = { value: newOption.value, label: newOption.label };
    setMultiSelectOptions((prevOptions) => [...prevOptions, newItem]);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">
              Label 1 (Single Select)
            </th>
            <th className="border border-gray-300 p-2">
              Label 2 (Multi Select)
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className="border border-gray-300">
              <td className="border border-gray-300 p-2">
                <SingleSelectDropdown
                  options={initialOptions.filter(
                    (option) =>
                      !usedOptions.includes(option.value) ||
                      row.singleSelect === option.value
                  )}
                  value={row.singleSelect}
                  onChange={(value) => handleSingleSelectChange(value, index)}
                />
              </td>
              <td className="border border-gray-300 p-2">
                <MultiSelectDropdown
                  options={multiSelectOptions}
                  value={row.multiSelect}
                  onChange={(value) => handleMultiSelectChange(value, index)}
                  onAddNewOption={handleAddMultiSelectOption}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={addRow}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
      >
        Add New Row
      </button>
    </div>
  );
};

export default Table;
