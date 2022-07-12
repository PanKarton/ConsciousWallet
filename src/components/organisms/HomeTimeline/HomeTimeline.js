import PageTopHeader from 'components/atoms/PageTopHeader/PageTopHeader';
import NewTweetForm from 'components/molecules/NewTweetForm/NewTweetForm';
import React from 'react';
import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  position: relative;
  padding-top: 1rem;
  .new-tweet-form-wrapper {
    width: 100%;
    border-bottom: 1px solid ${({ theme }) => theme.colors.borderGray};
  }
`;

const HomeTimeline = (props) => {
  return (
    <StyledWrapper>
      <PageTopHeader>Home</PageTopHeader>
      <div className="new-tweet-form-wrapper">
        <NewTweetForm />
      </div>
    </StyledWrapper>
  );
};

HomeTimeline.propTypes = {};

export default HomeTimeline;
