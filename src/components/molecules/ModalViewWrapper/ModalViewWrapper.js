import React from 'react';
import PropTypes from 'prop-types';
import { ModalWrapper } from './ModalViewWrapper.styles';

ModalWrapper.setAppElement(document.getElementById('root'));

const ModalViewWrapper = ({ children, isOpen, onRequestClose }) => (
  // Overlay close doesnt work without onRequestClose
  <ModalWrapper shouldCloseOnOverlayClick={true} onRequestClose={onRequestClose} isOpen={isOpen} ariaHideApp={false} style={{ overlay: { backgroundColor: 'rgba(0, 0, 0, 0.25)' } }}>
    {children}
  </ModalWrapper>
);

ModalViewWrapper.propTypes = {
  children: PropTypes.element,
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

export default ModalViewWrapper;
