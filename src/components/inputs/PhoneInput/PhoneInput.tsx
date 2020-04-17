import React, { useRef } from 'react';
import useMaskedInput from '@viewstools/use-masked-input';
import { PHONE_MASK } from 'helpers/mask';
import { Input, InputProps } from 'components/inputs/Input';

const PhoneInput: React.FC<PhoneInputProps> = ({
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
    mask: PHONE_MASK,
    onChange,
    value,
  });

  return (
    <Input
      {...props}
      innerRef={input}
      onChange={change}
      placeholder={placeholder || '(29) 123-12-13'}
    />
  );
};

interface PhoneInputProps extends InputProps {
  guide?: boolean;
  keepCharPositions?: boolean;
}

export { PhoneInput };
