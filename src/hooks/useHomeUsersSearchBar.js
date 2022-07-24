import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const useHomeUsersSearchBar = () => {
  const { register, watch, reset } = useForm();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);

  const clearInput = useCallback(() => {
    setIsDeleteVisible(false);
    reset();
  }, [reset]);

  const handleOpenListByInputFocus = useCallback((e) => {
    setIsListOpen(true);
  }, []);

  return {
    register,
    watch,
    isDeleteVisible,
    isListOpen,
    clearInput,
    handleOpenListByInputFocus,
    setIsDeleteVisible,
    setIsListOpen,
  };
};

export default useHomeUsersSearchBar;
