import React from "react";
import { ActionMeta, OnChangeValue } from "react-select";
interface Option {
  label: string;
  value: string;
}
type IsMulti = boolean;
export interface PlaceSearchProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  onChange?: (
    newValue: OnChangeValue<Option, IsMulti>,
    actionMeta: ActionMeta<Option>,
  ) => void;
}
