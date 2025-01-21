// import React, { useState } from "react";
// import Select from "react-select";

// const MultiSelectDropdown = ({ options, value, onChange, onAddNewOption }) => {
//   const [newOption, setNewOption] = useState("");

//   const handleAddNewOption = () => {
//     if (newOption.trim() !== "") {
//       onAddNewOption(newOption);
//       setNewOption("");
//     }
//   };

//   return (
//     <div>
//       <Select
//         isMulti
//         options={options}
//         value={options.filter(option => value.includes(option.value))}
//         onChange={(selectedOptions) => onChange(selectedOptions.map(option => option.value))}
//         placeholder="Select options"
//       />
//       <div className="mt-2 flex items-center">
//         <input
//           type="text"
//           value={newOption}
//           onChange={(e) => setNewOption(e.target.value)}
//           className="border border-gray-300 rounded px-2 py-1"
//           placeholder="Add new option"
//         />
//         <button
//           onClick={handleAddNewOption}
//           className="ml-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-700"
//         >
//           Add
//         </button>
//       </div>
//     </div>
//   );
// };

// export default MultiSelectDropdown;


import React, { useState } from "react";
import Select from "react-select";

const MultiSelectDropdown = ({ options, value, onChange, onAddNewOption }) => {
  const [inputValue, setInputValue] = useState("");

  
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && inputValue.trim() !== "") {
      const newOption = { value: inputValue.trim(), label: inputValue.trim() };
      onAddNewOption(newOption);
      setInputValue(""); 
    }
  };

  
  const enhancedOptions = [
    ...options,
    { value: "new-option", label: "Add new option...", isDisabled: true },
  ];

  return (
    <Select
      isMulti
      options={enhancedOptions}
      value={options.filter((option) => value.includes(option.value))}
      onChange={(selectedOptions) => onChange(selectedOptions.map((option) => option.value))}
      placeholder="Select options"
      onInputChange={(input) => setInputValue(input)}
      inputValue={inputValue}
      onKeyDown={handleKeyDown}
      components={{
        MenuList: (props) => (
          <div>
            {props.children}
            <div className="p-2 border-t border-gray-300">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type to add new..."
                className="w-full p-1 border border-gray-300 rounded"
              />
              <button
                onClick={() => {
                  if (inputValue.trim() !== "") {
                    onAddNewOption({ value: inputValue.trim(), label: inputValue.trim() });
                    setInputValue(""); 
                  }
                }}
                className="mt-1 w-full bg-green-500 text-white py-1 rounded"
              >
                Add "{inputValue}"
              </button>
            </div>
          </div>
        ),
      }}
    />
  );
};

export default MultiSelectDropdown;
