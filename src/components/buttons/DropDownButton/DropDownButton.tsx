import React from 'react';

import { Button, ButtonProps } from 'components/buttons/Button';
import { ReactComponent as Up } from 'assets/icons/up.svg';
import { ReactComponent as Down } from 'assets/icons/down.svg';

const DropDownButton: React.FC<DropDownButtonProps> = ({
  expanded = false,
  ...rest
}) => (
  <Button
    {...rest}
    endIcon={
      expanded ? <Up data-testid="up-svg" /> : <Down data-testid="down-svg" />
    }
  />
);

interface DropDownButtonProps extends ButtonProps {
  expanded?: boolean;
}

export { DropDownButton };
