import React from 'react';
import { StyledWrapper } from './UsersSuggestions.styles';
import UserSuggestionItem from 'components/molecules/UserSuggestionItem/UserSuggestionItem';
import LoadingCircle from 'components/atoms/LoadingCircle/LoadingCircle';
import useUsersSuggestions from './useUsersSuggestions';

const UsersSuggestions = () => {
  const { users, isLoading, handleLoadMoreSuggestions } = useUsersSuggestions();

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
