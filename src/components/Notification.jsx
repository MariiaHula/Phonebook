import React from 'react';
import PropTypes from 'prop-types';

const Notification = ({ message }) => {
  return <div className="text-gray-700 text-3xl text-center">{message}</div>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
