import React, { useRef } from 'react';
import useMaskedInput from '@viewstools/use-masked-input';

import { PHONE_MASK } from 'helpers/mask';
import { Input, InputProps } from 'components/inputs/Input';

const PhoneInput: React.FC<PhoneInputProps> = ({
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
    mask: PHONE_MASK,
    onChange,
    showMask: true,
    value,
  });

  return (
    <Input
      {...props}
      onChange={change}
      placeholder={placeholder || '(29) 123-12-13'}
      ref={inputRef}
    />
  );
};

interface PhoneInputProps extends InputProps {
  guide?: boolean;
  keepCharPositions?: boolean;
}

export { PhoneInput };
