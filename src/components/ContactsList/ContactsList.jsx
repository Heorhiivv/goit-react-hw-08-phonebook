import React from "react"
import PropTypes from "prop-types"
import ContactItem from "./ContactListItem/ContactItem"
import {CSSTransition, TransitionGroup} from "react-transition-group"
import css from "../ContactsList/ContactsList.module.css"

import {connect} from "react-redux"
import contactsSelectors from '../../redux/contacts/contacts-selectors';

const ContactsList = ({ findContacts }) => {
  return (
    <TransitionGroup component="ul" className={css.list}>
      {findContacts.map(({id}) => {
        return (
          <CSSTransition key={id} timeout={250} classNames={css}>
            <ContactItem id={id} />
          </CSSTransition>
        )
      })}
    </TransitionGroup>
  )
}

const mapStateToProps = state => ({
  findContacts: contactsSelectors.getFilteredContacts(state),
})

ContactsList.propTypes = {
  findContacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.string,
}
export default connect(mapStateToProps)(ContactsList)
