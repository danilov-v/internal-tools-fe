import React from 'react';
import { ButtonProps } from 'components/buttons/Button/Button';
import { ReactComponent as Up } from 'assets/icons/up.svg';
import { ReactComponent as Down } from 'assets/icons/down.svg';

export const withDropDownIndicator = (Button: React.FC<ButtonProps>) => ({
  expanded,
  ...props
}: DropDownButton) => {
  return (
    <Button
      {...props}
      endIcon={
        expanded ? <Up data-testid="up-svg" /> : <Down data-testid="down-svg" />
      }
    />
  );
};

interface DropDownButton extends ButtonProps {
  expanded?: boolean;
}
