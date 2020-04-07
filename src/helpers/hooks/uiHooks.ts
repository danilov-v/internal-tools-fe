import { useState } from 'react';

export const useDialog = (): [boolean, Function] => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const toggle = (): void => setDialogOpen(!dialogOpen);
  return [dialogOpen, toggle];
};
