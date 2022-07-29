import React from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './SearchResultList.styles';
import UserSearchResultListItem from 'components/atoms/UserSearchResultListItem/UserSearchResultListItem';

const SearchResultsList = ({ users }) => {
  return (
    <StyledWrapper isScrollable={users.length ? true : false}>
      {users.length > 0 ? (
        <ul>
          {users.map((user, index) => (
            <li key={index}>
              <UserSearchResultListItem user={user} />
            </li>
          ))}
        </ul>
      ) : (
        <span className="no-users-message">Try searching for people, topics, or keywords</span>
      )}
    </StyledWrapper>
  );
};

SearchResultsList.propTypes = {
  users: PropTypes.array,
};

export default SearchResultsList;
