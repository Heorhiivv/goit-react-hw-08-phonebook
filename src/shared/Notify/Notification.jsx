import React from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Notification.module.css';

const Notification = ({isContacts}) => {
  return (
    <CSSTransition
    in={isContacts}
    appear={true}
    timeout={250}
    classNames={css}
    unmountOnExit 
    >
      <div className={css.notification}>
      <p>Contact already exists!</p>
      </div>
    </CSSTransition>
  );
};
export default Notification;
