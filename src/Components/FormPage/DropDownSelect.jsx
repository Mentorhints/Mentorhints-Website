import { useState } from "react";
import Select from "react-select";
import { motion } from "framer-motion";
import chevronDown from "../../assets/chevron-down.svg";
const DropdownSelect = ({
  label,
  name,
  placeholder,
  options = [],
  formData,
  handleChange,
}) => {
  const [isOpen, setIsOpen] = useState(false); // To track if the dropdown is open
  const [isFocused, setIsFocused] = useState(false); // To track focus state

  const reactOptions = options.map((opt) => ({ label: opt, value: opt }));

  const customStyles = {
    control: (base, state) => ({
      ...base,
      backgroundColor: "#f5f5f7",
      borderColor: state.isFocused ? "#0050b8" : "#e6e6e8",
      boxShadow: "none",
      borderRadius: "6px",
      padding: "2px 4px",
      fontSize: "16px",
      color: "#6a6a6b",
      cursor: "pointer",
      "&:hover": {
        borderColor: "#0050b8",
      },
    }),
    menu: (base) => ({
      ...base,

      maxHeight: "144px", // Limit height of the dropdown
      overflow: "auto",
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isSelected
        ? "#e6f0fe"
        : state.isFocused
        ? "#f2f7ff"
        : "white",
      color: state.isSelected || state.isFocused ? "#006af5" : "#000",
      fontSize: "14px", // Reduce font size
      padding: "8px", // Reduce padding
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#08080c",
    }),
    placeholder: (base) => ({
      ...base,
      color: "#6a6a6b",
    }),
    indicatorsContainer: () => ({
      display: "none",
    }),
  };

  // Toggle isOpen when dropdown is opened/closed
  const handleDropdownToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="form-group">
      <label className="FormDataLabel">{label}</label>
      <div className="select-container">
        <Select
          name={name}
          value={
            formData[name]
              ? { label: formData[name], value: formData[name] }
              : null
          }
          onChange={(selected) =>
            handleChange({
              target: {
                name,
                value: selected ? selected.value : "",
              },
            })
          }
          placeholder={placeholder}
          options={reactOptions}
          styles={customStyles}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          onMenuOpen={handleDropdownToggle}
          onMenuClose={handleDropdownToggle}
        />
        <span className="chevron-down">
          <motion.img
            src={chevronDown}
            alt="chevron"
            animate={{ rotate: isOpen ? 180 : 0 }} // Rotate only when the dropdown is open
            transition={{ duration: 0.1 }}
          />
        </span>
      </div>
    </div>
  );
};

export default DropdownSelect;
