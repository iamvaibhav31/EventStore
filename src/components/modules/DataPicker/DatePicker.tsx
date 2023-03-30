import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import type { DatePickerProps } from "./DatePicker.type";
import "./DatePicker.css";
import { CalendarIcon } from "./constant/Icon";
const ReactDatePicker = ({ select, onChange }: DatePickerProps) => {
  return (
    <div className="datePickerContainer">
      <div className="datePickerIcon">
        <CalendarIcon />
      </div>
      <DatePicker
        selected={select}
        onChange={onChange}
        showMonthDropdown
        showYearDropdown
        className="datePickerInput"
      />
    </div>
  );
};

export default ReactDatePicker;
