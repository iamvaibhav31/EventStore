export interface DatePickerProps {
  select: Date | null;
  onChange: (
    date: Date | null,
    event: React.SyntheticEvent<any, Event> | undefined,
  ) => void;
  minDate?: Date;
  required?: boolean | undefined;
}
