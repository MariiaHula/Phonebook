import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';
import { ModalContainer, ModalContent } from './Modal.styled';

const rootModal = document.querySelector('#modal');

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <ModalContainer>
      <ModalContent>{children}</ModalContent>
    </ModalContainer>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
