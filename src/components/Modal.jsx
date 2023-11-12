import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

const rootModal = document.querySelector('#modal');

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div>
      <div>{children}</div>
    </div>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
