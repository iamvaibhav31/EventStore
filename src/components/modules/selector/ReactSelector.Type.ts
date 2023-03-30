import {
  ActionMeta,
  GroupBase,
  OnChangeValue,
  OptionsOrGroups,
} from "react-select";

interface Option {
  label: string;
  value: string;
}

type IsMulti = boolean;
type selectType = "CATEGORY" | "PLACESEARCH" | "FIXEDTIME";
export interface ReactSelectProps {
  type: selectType;
  option?: Option[];
  isLoading?: boolean;
  onInputChange?: (inputValue: string) => void;
  onChange?: (
    newValue: OnChangeValue<Option, IsMulti>,
    actionMeta: ActionMeta<Option>,
  ) => void;
}
