import { useState } from 'react';

export const useDialog = (): [boolean, () => void] => {
  const [isOpen, toggleDialog] = useState(false);
  const toggle = (): void => toggleDialog(!isOpen);
  return [isOpen, toggle];
};
