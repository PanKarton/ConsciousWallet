import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { StyledWrapper } from './SearchResultList.styles';
import UserSearchResultListItem from 'components/atoms/UserSearchResultListItem/UserSearchResultListItem';

const SearchResultsList = forwardRef((props, ref) => {
  const user = {
    name: {
      first: 'Miriamciucha',
      last: 'Lagoood',
    },
    imgUrl: null,
    imageBackgroundColor: '100',
    login: 'Milioffs',
  };

  return (
    <StyledWrapper ref={ref}>
      <ul>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
        <li>
          <UserSearchResultListItem user={user} />
        </li>
      </ul>
    </StyledWrapper>
  );
});

SearchResultsList.propTypes = {};

export default SearchResultsList;
