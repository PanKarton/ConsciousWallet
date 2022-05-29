import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './ModalViewWrapper.styles';

const ModalViewWrapper = ({ children, isOpen }) => (
  <ModalWrapper isOpen={isOpen} ariaHideApp={false} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.25)' } }}>
    {children}
  </ModalWrapper>
);

ModalViewWrapper.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
};

export default ModalViewWrapper;
