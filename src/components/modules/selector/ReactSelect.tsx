import Select from "react-select";
import { ReactSelectProps } from "./ReactSelector.Type";

const ReactSelect = ({
  type,
  isLoading,
  onInputChange,
  option = [],
  onChange,
}: ReactSelectProps) => {
  let selectOption = {};
  if (type === "CATEGORY") {
    selectOption = {
      className: "basic-single",
      classNamePrefix: "select",
      defaultValue: option[0],
      isClearable: true,
      isSearchable: true,
      name: "CATEGORY",
      options: option,
      onChange: onChange,
    };
  }

  if (type === "PLACESEARCH") {
    selectOption = {
      className: "basic-single",
      classNamePrefix: "select",
      isClearable: true,
      isSearchable: true,
      name: "PLACESEARCH",
      options: option,
      onChange: onChange,
      onInputChange: onInputChange,
      isLoading: isLoading,
    };
  }

  return <Select {...selectOption} />;
};

export default ReactSelect;
