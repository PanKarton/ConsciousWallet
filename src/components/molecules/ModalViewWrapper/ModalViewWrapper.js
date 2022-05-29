import styled from 'styled-components';
import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const ModalWrapper = styled(Modal)`
  position: fixed;
  z-index: 1000;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    position: relative;
    inset: 0;
    background-color: red;
    @media screen and (min-width: 700px) {
      width: 37.5rem;
    }
  }
`;

// DOKONCZYCC TWORZENIE UNIWERSALNEGO WRAPPERA MODALA ODBIERAJACEGO PROPSY Z GORY
const ModalViewWrapper = ({ children, isOpen }) => (
  <ModalWrapper isOpen={isOpen} ariaHideApp={false}>
    <div> {children}</div>
  </ModalWrapper>
);

ModalViewWrapper.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default ModalViewWrapper;
