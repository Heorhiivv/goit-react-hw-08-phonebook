import React from 'react';
import { CSSTransition } from 'react-transition-group';
import css from './Title.module.css';

const Title = () => {
  return (
    <CSSTransition 
    in={true} 
    appear={true} 
    timeout={500} 
    classNames={css}
    unmountOnExit>
    <h1 className={css.title}>Phonebook</h1>
    </CSSTransition>
  );
};

export default Title;
