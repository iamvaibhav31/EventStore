import React from "react";
import { ActionMeta, SingleValue } from "react-select";
interface Option {
  label: string;
  value: string;
}
type IsMulti = boolean;
export interface PlaceSearchProps {
  options: Option[];
  setOptions: React.Dispatch<React.SetStateAction<Option[]>>;
  onChange:
    | ((
        newValue: SingleValue<Option> | MultiValue<Option>,
        actionMeta: ActionMeta<Option>,
      ) => void)
    | undefined;
}
