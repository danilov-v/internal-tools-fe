import React, { useRef } from 'react';
import useMaskedInput from '@viewstools/use-masked-input';
import { DATE_MASK } from 'helpers/mask';
import { Input, InputProps } from 'components/inputs/Input';

const DateInput: React.FC<DateInputProps> = ({
  onChange,
  value,
  placeholder,
  guide = false,
  keepCharPositions = false,
  ...props
}) => {
  const input = useRef(null);

  const change = useMaskedInput({
    input,
    guide,
    keepCharPositions,
    showMask: true,
    mask: DATE_MASK,
    onChange,
    value,
  });

  return (
    <Input
      {...props}
      innerRef={input}
      onChange={change}
      placeholder={placeholder || 'дд-мм-гггг'}
    />
  );
};

interface DateInputProps extends InputProps {
  guide?: boolean;
  keepCharPositions?: boolean;
}

export { DateInput };
