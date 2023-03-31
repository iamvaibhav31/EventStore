import React from "react";
import { ActionMeta, MultiValue, OnChangeValue } from "react-select";
interface Option {
  label: string;
  value: string;
}
type IsMulti = boolean;
export interface PlaceSearchProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  onChange?: (
    newValue: OnChangeValue<Option | MultiValue<Option>, IsMulti>,
    actionMeta: ActionMeta<Option>,
  ) => void;
}
