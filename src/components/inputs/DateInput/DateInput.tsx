import React, { useRef } from 'react';
import useMaskedInput from '@viewstools/use-masked-input';

import { DATE_MASK } from 'helpers/mask';
import { Input, InputProps } from 'components/inputs/Input';

const DateInput: React.FC<DateInputProps> = ({
  guide = false,
  keepCharPositions = false,
  onChange,
  placeholder,
  value,
  ...props
}) => {
  const inputRef = useRef(null);

  const change = useMaskedInput({
    guide,
    input: inputRef,
    keepCharPositions,
    mask: DATE_MASK,
    onChange,
    showMask: true,
    value,
  });

  return (
    <Input
      {...props}
      onChange={change}
      placeholder={placeholder || 'дд-мм-гггг'}
      ref={inputRef}
    />
  );
};

interface DateInputProps extends InputProps {
  guide?: boolean;
  keepCharPositions?: boolean;
}

export { DateInput };
