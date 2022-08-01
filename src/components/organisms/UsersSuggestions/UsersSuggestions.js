import React, { useState } from 'react';
import { StyledWrapper } from './UsersSuggestions.styles';
import UserSuggestionItem from 'components/molecules/UserSuggestionItem/UserSuggestionItem';

const UsersSuggestions = () => {
  const [users, setUsers] = useState([
    {
      imageBackgroundColor: 1,
      name: {
        first: 'Mizi',
        last: `Lagodka`,
      },
      login: `Milioffsik`,
      id: `1`,
      imgUrl: null,
    },
  ]);

  return (
    <StyledWrapper>
      <h2>Who to follow</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <UserSuggestionItem user={user} />
          </li>
        ))}
      </ul>
      <div className="show-more-button-wrapper">
        <span className="show-more-button">Show more</span>
      </div>
    </StyledWrapper>
  );
};

export default UsersSuggestions;
