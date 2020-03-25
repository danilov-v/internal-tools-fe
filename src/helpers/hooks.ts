import { useState } from 'react';

export const useModal = (): any[] => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = (): void => setModalOpen(!modalOpen);
  return [modalOpen, setModalOpen, toggle];
};
