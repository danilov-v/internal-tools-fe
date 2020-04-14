import React from 'react';

import 'react-datepicker/dist/react-datepicker.css';

import { FULL_DATE_FORMAT, DEFAULT_LOCALE } from 'helpers/date';
import { Input, InputProps } from 'components/Input';

import { Container, StyledDatePicker } from './DatePicker.style';

const DateInput = React.forwardRef(function DateInput(
  props: DateInputProps,
  ref: React.Ref<HTMLSpanElement>,
): React.ReactElement {
  return (
    <span
      onClick={props.onClick}
      onKeyDown={() => {}}
      ref={ref}
      role="button"
      tabIndex={0}
    >
      <Input {...props} />
    </span>
  );
});

const DatePicker: React.FC<DatePickerProps> = ({
  align = 'left',
  color = 'primary',
  errorMessage,
  id,
  invalid,
  label,
  name,
  onBlur,
  onChangeDate,
  placeholder = '',
  selected,
  value,
  variant = 'default',
}) => (
  <Container>
    {label && <label htmlFor={id}>{label}</label>}
    <StyledDatePicker
      customInput={
        <DateInput
          align={align}
          color={color}
          errorMessage={errorMessage}
          id={id}
          invalid={invalid}
          name={name}
          onBlur={onBlur}
          variant={variant}
        />
      }
      dateFormat={FULL_DATE_FORMAT}
      dateFormatCalendar={FULL_DATE_FORMAT}
      locale={DEFAULT_LOCALE}
      onBlur={onBlur}
      onChange={onChangeDate}
      placeholderText={placeholder}
      selected={selected}
      value={value}
    />
  </Container>
);

interface DateInputProps extends InputProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

interface DatePickerProps extends InputProps {
  onChangeDate: (date: Date) => void;
  selected: null | Date;
}

export { DatePicker };
