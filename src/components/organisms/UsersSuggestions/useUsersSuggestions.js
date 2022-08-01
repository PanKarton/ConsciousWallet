import { useCallback, useEffect, useState } from 'react';
import useFirebase from 'hooks/useFirebase';

const useUsersSuggestions = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getXMostFollowedUsers } = useFirebase();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const results = await getXMostFollowedUsers(1);
        if (!results) return;
        setUsers(results);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        console.log(err);
      }
    })();
  }, [getXMostFollowedUsers]);

  const handleLoadMoreSuggestions = useCallback(async () => {
    try {
      const results = await getXMostFollowedUsers(users.length + 1);
      if (!results) return;
      setUsers((prevUsers) => {
        let prevIDs = prevUsers.map((item) => item.id);
        const mergedArr = [...prevUsers, ...results.filter((result) => !prevIDs.includes(result.id))];
        return mergedArr;
      });
    } catch (err) {
      console.log('handleLoadMoreSuggestions', err);
    }
  }, [users.length, getXMostFollowedUsers]);

  return {
    users,
    isLoading,
    handleLoadMoreSuggestions,
  };
};

export default useUsersSuggestions;
