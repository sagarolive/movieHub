import React, { FC } from "react";
import ReactSelect, { StylesConfig } from "react-select";

export const customStyles: StylesConfig = {
  control: (base, state) => ({
    ...base,
    height: "auto",
    borderRadius: "8px",
    background: "#374151",
    border: "0",
    outline: "none",
    boxShadow: "1px solid #2DDBDF",
    color: "white",
  }),
  singleValue: (provided, state) => ({
    ...provided,
    color: "#000",
  }),
  placeholder: (base) => ({
    ...base,
  }),
  option: (styles, { isFocused, isDisabled }) => ({
    backgroundColor: isFocused ? "rgba(17,24,39,0.2)" : "",
    padding: "0.5rem",
    margin: "0.5rem",
    borderRadius: "5px",
    cursor: "pointer",
  }),
  valueContainer: (base) => ({
    ...base,
    width: "100%",
    padding: "0.8rem",
    color: "white",
  }),
  input: (base, state) => ({
    ...base,
    color: "white",
  }),
  menu: (base) => ({
    ...base,
    zIndex: 9999,
    background: "#374151",
  }),

  indicatorSeparator: (base) => ({
    ...base,
    display: "none",
  }),
  dropdownIndicator: (base, state) => ({
    ...base,
    transition: "transform 0.2s ease",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "",
  }),
  clearIndicator: (base) => ({
    ...base,
    cursor: "pointer",
  }),
};

interface ISelectProps {
  options: any;
  handleChange: (value: any) => void;
  isLoading?: boolean;
  placeholder?: string;
  defaultValue?: any;
}

const Select: FC<ISelectProps> = ({
  options,
  isLoading,
  handleChange,
  placeholder,
  defaultValue,
}) => {
  return (
    <ReactSelect
      options={options}
      onChange={handleChange}
      styles={customStyles}
      placeholder={placeholder}
      isLoading={isLoading}
      isClearable={true}
      defaultValue={defaultValue}
    />
  );
};

export default Select;
