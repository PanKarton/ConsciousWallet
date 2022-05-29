import { useState } from 'react';

export const useModal = () => {
  const [isModal, setIsModal] = useState(false);

  const handleModalOpen = () => setIsModal(true);
  const handleModalClose = () => setIsModal(false);

  return {
    isModal,
    handleModalOpen,
    handleModalClose,
  };
};
