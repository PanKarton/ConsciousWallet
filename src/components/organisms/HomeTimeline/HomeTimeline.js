import PageTopHeader from 'components/atoms/PageTopHeader/PageTopHeader';
import NewTweetForm from 'components/molecules/NewTweetForm/NewTweetForm';
import TweetsList from 'components/molecules/TweetsList/TweetsList';
import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: calc(100vh - 3.125rem);
  position: relative;
  overflow-y: auto;
  .new-tweet-form-wrapper {
    display: none;
    @media screen and (min-width: 501px) {
      display: block;
      width: 100%;
      border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
      margin-bottom: 1rem;
      & > div {
        padding-top: 1rem;
      }
    }
  }
  @media screen and (min-width: 501px) {
    height: 100vh;
  }
`;

const HomeTimeline = (props) => {
  return (
    <StyledWrapper>
      <PageTopHeader>Home</PageTopHeader>
      <div className="new-tweet-form-wrapper">
        <NewTweetForm />
      </div>
      <TweetsList />
    </StyledWrapper>
  );
};

HomeTimeline.propTypes = {};

export default HomeTimeline;
