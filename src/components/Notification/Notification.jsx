import React from 'react';
import PropTypes from 'prop-types';
import { NotificationWrapper } from './Notification.styled';

const Notification = ({ message }) => {
  return <NotificationWrapper>{message}</NotificationWrapper>;
};

Notification.propTypes = {
  message: PropTypes.string,
};

export default Notification;
