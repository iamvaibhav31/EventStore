export interface DatePickerProps {
  select: Date;
  onChange: (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
  minDate?: Date;
  required?: boolean | undefined;
}
