import { ActionMeta, GroupBase, MultiValue, OnChangeValue } from "react-select";

interface Option {
  label: string;
  value: string;
}

type IsMulti = boolean;
type selectType = "CATEGORY" | "PLACESEARCH";
export interface ReactSelectProps {
  type: selectType;
  option?: Option[];
  isLoading?: boolean;
  onInputChange?: (inputValue: string) => void;
  onChange?: (
    newValue: OnChangeValue<Option | MultiValue<Option>, IsMulti>,
    actionMeta: ActionMeta<Option>,
  ) => void;
}
