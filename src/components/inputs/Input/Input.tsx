import React from 'react';

import {
  Container,
  StyledInput,
  StyledInputProps,
  ValidationError,
} from './Input.style';

const Input: React.FC<InputProps> = React.forwardRef(
  (
    {
      align = 'left',
      className = '',
      color = 'primary',
      disabled = false,
      errorMessage,
      id,
      invalid = false,
      label,
      max,
      min,
      name,
      onBlur = () => {},
      onChange = () => {},
      placeholder,
      type = 'text',
      value,
      variant = 'default',
      warn = false,
    },
    ref,
  ) => (
    <Container>
      {label && <label htmlFor={id}>{label}</label>}
      <StyledInput
        align={align}
        className={className}
        color={color}
        disabled={disabled}
        id={id}
        invalid={!!errorMessage && invalid}
        max={max}
        min={min}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
        type={type}
        value={value}
        variant={variant}
        warn={warn}
      />
      {invalid && errorMessage && (
        <ValidationError align={align}>{errorMessage}</ValidationError>
      )}
    </Container>
  ),
);

Input.displayName = 'Input';

export interface InputProps extends StyledInputProps {
  align?: 'left' | 'right' | 'center';
  className?: string;
  color?: 'green' | 'primary' | 'red' | 'secondary' | 'yellow';
  disabled?: boolean;
  errorMessage?: string;
  id?: string;
  invalid?: boolean;
  label?: string;
  max?: string;
  min?: string;
  name?: string;
  onBlur?: (e: React.FormEvent<HTMLInputElement>) => void;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel';
  value?: string;
  variant?: 'default' | 'outlined' | 'primary';
  warn?: boolean;
}

export { Input };
