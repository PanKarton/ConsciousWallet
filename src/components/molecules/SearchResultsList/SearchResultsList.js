import { StyledWrapper } from './SearchResultsList.styles';
import UserSearchResultListItem from 'components/atoms/UserSearchResultListItem/UserSearchResultListItem';
import { forwardRef } from 'react';

const SearchResultsList = forwardRef(({ users }, ref) => {
  console.log(users);
  return (
    <StyledWrapper ref={ref} isScrollable={users.length ? true : false}>
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
});

export default SearchResultsList;

//
// trzeba zrobic tak zeby wyniki wwyszukiwania sie wydisplejowały tutaj.
//
