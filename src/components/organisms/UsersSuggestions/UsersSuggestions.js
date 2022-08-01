import React, { useCallback, useEffect, useState } from 'react';
import { StyledWrapper } from './UsersSuggestions.styles';
import UserSuggestionItem from 'components/molecules/UserSuggestionItem/UserSuggestionItem';
import useFirebase from 'hooks/useFirebase';
import LoadingCircle from 'components/atoms/LoadingCircle/LoadingCircle';

const UsersSuggestions = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { getXMostFollowedUsers } = useFirebase();

  useEffect(() => {
    setIsLoading(true);
    (async () => {
      try {
        const results = await getXMostFollowedUsers(2);
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
      const results = await getXMostFollowedUsers(users.length + 2);
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

  return (
    <StyledWrapper>
      <h2>Who to follow</h2>
      <div className="suggestions-list-wrapper">
        {isLoading ? (
          <LoadingCircle />
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <UserSuggestionItem user={user} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="show-more-button-wrapper">
        <button className="show-more-button" onClick={handleLoadMoreSuggestions}>
          <span>Show more</span>
        </button>
      </div>
    </StyledWrapper>
  );
};

export default UsersSuggestions;
