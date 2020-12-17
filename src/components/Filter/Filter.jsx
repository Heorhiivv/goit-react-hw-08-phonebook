import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition } from 'react-transition-group';
import css from './Filter.module.css';

import { connect } from 'react-redux';
import filterContacts from '../../redux/filter/filterAct';
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const Filter = ({filter, onChangeFilter, contacts}) => {
  return (
   <CSSTransition
   in={contacts.length > 0}
   appear={true}
   timeout={250}
   classNames={css}
   unmountOnExit
   >
      <div className={css.filter}>
    <label className={css.label}>
    Find contacts by name
    <input 
    type="text" 
    className={css.input} 
    value={filter}
    onChange={e => onChangeFilter(e.target.value)}
    />
    </label>
    </div>
   </CSSTransition>
  );
};

const mapStateToProps = state => {
  return {
    filter: contactsSelectors.getFilter(state),
    contacts: contactsSelectors.getContacts(state),
  };
};

const mapDispatchToProps = {
  onChangeFilter: filterContacts,
};

Filter.propTypes = {
  contacts: PropTypes.array,
  onChangeFilter: PropTypes.func.isRequired,
  filter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);