import { useState, useEffect } from 'react';

export const useDialog = (): [boolean, () => void] => {
  const [isOpen, toggleDialog] = useState(false);
  const toggle = (): void => toggleDialog(!isOpen);

  useEffect((): void => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  return [isOpen, toggle];
};
