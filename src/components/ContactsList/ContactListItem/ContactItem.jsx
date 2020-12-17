import React from "react";
import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactItem.module.css'

import {connect} from 'react-redux';
import contactsSelectors from '../../../redux/contacts/contacts-selectors'
import contactsOperations from '../../../redux/contacts/contactsOperations';

const ContactItem = ({name, number, removeContact}) => {
 return (
  <li className={css.item}>
  <p className={css.itemText}>{name}:</p>
  <p className={css.itemText}>{number}</p>
    <button 
    type="button"
    className={css.btn} 
    onClick={removeContact}>
      Delete
    </button>
</li>
 );
};

const mapStateToProps = (state, ownProps) => {
  const item = contactsSelectors.getItemById(state, ownProps.id);
  return {
    ...item
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeContact: () => dispatch(contactsOperations.removeContact(ownProps.id)),
});

ContactItem.propTypes = {
  removeContact: PropTypes.func,
  name: PropTypes.string,
  number: PropTypes.string
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
