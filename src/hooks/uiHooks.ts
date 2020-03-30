import { useState } from 'react';

export const useModal = (): [boolean, Function] => {
  const [modalOpen, setModalOpen] = useState(false);
  const toggle = (): void => setModalOpen(!modalOpen);
  return [modalOpen, toggle];
};
