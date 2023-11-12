import ReactDOM from 'react-dom';
import React from 'react';
import PropTypes from 'prop-types';

const rootModal = document.querySelector('#modal');

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center backdrop-blur-md bg-opacity-50">
      <div className="bg-white p-6 rounded-md max-w-md w-full m-4 relative z-10">
        {children}
      </div>
    </div>,
    rootModal
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};
