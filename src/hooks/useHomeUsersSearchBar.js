import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAlgolia from 'hooks/useAlgolia';

const useHomeUsersSearchBar = () => {
  const { register, watch } = useForm();
  const [isDeleteVisible, setIsDeleteVisible] = useState(false);
  const [isListOpen, setIsListOpen] = useState(false);
  const [searchResults, setSearchResults] = useState([]);
  const { getUsersByNameLastnameOrLogin } = useAlgolia();

  const handleSearchByPhrase = useCallback(
    async (data) => {
      try {
        if (data.searchBar) {
          const result = await getUsersByNameLastnameOrLogin(data.searchBar);
          setSearchResults(result);
          setIsDeleteVisible(true);
          setIsListOpen(true);
        } else {
          setIsDeleteVisible(false);
          setSearchResults([]);
        }
      } catch (err) {
        console.log('useHomeUsersSearchBar handleSearchByPhrase:', err);
      }
    },
    [getUsersByNameLastnameOrLogin],
  );

  const clearInput = useCallback(() => {
    setSearchResults([]);
    setIsDeleteVisible(false);
  }, [setSearchResults]);

  const handleOpenListByInputFocus = useCallback((e) => {
    setIsListOpen(true);
  }, []);

  return {
    register,
    watch,
    isDeleteVisible,
    isListOpen,
    searchResults,
    clearInput,
    handleOpenListByInputFocus,
    setIsDeleteVisible,
    setIsListOpen,
    handleSearchByPhrase,
  };
};

export default useHomeUsersSearchBar;
