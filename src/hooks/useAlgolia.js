import algoliasearch from 'algoliasearch';
import { useCallback } from 'react';

const useAlgolia = () => {
  const searchClien = algoliasearch(process.env.REACT_APP_ALGOLIA_APP_ID, process.env.REACT_APP_ALGOLIA_SEARCH_KEY);
  const usersSearchIndex = searchClien.initIndex('users');

  const getUsersByNameLastnameOrLogin = useCallback(
    async (searchPhrase) => {
      try {
        const result = await usersSearchIndex.search(searchPhrase);
        if (result) return result.hits;
      } catch (err) {
        console.log('useAlgolia getUsersByNameLastnameOrLogin', err);
      }
    },
    [usersSearchIndex],
  );

  return { getUsersByNameLastnameOrLogin };
};

export default useAlgolia;
