import { StyledWrapper } from './SearchResultsList.styles';
import PropTypes from 'prop-types';
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
  user: PropTypes.shape({
    login: PropTypes.string,
    name: PropTypes.shape({
      first: PropTypes.string,
      last: PropTypes.string,
    }),
    imageBackgroundColor: PropTypes.number,
    imgUrl: PropTypes.string,
    userBio: PropTypes.string,
  }),
};


export default SearchResultsList;
