import React from 'react';

import { Container, Option, StyledSelect } from './Select.style';

const Select: React.FC<SelectProps> = ({
  id,
  label,
  name,
  onChange,
  options = [],
  placeholder,
  value = '',
}) => (
  <Container>
    {label && <label htmlFor={id}>{label}</label>}
    <StyledSelect
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
    >
      {options.map(option => (
        <Option key={option.value} value={option.value}>
          {option.name}
        </Option>
      ))}
    </StyledSelect>
  </Container>
);

type OptionType = {
  name: string;
  value: string;
};

type SelectProps = {
  id?: string;
  label?: string;
  name?: string;
  onChange: (e: React.FormEvent<HTMLSelectElement>) => void;
  options?: Array<OptionType>;
  placeholder?: string;
  value?: string;
};

export { Select };
