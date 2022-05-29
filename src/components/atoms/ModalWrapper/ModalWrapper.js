import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ModalViewWrapper = styled(Modal)`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    inset: 0;
    @media screen and (min-width: 700px) {
      width: 37.5rem;
    }
  }
`;

const ModalWrapper = ({ children }) => {
  const isSignUpModalOpenSlice = useSelector((store) => store.isSignUpModalOpenSlice);

  return (
    <ModalViewWrapper isOpen={isSignUpModalOpenSlice}>
      <div>{children}</div>
    </ModalViewWrapper>
  );
};

ModalWrapper.propTypes = {
  // children: PropTypes.element,
};

export default ModalWrapper;
