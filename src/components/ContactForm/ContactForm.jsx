import React, {Component} from "react"
import PropTypes from "prop-types"
import Notification from "../../shared/Notify/Notification"
import css from "../ContactForm/ContactFrom.module.css"

import {connect} from "react-redux"
import contactsOperations from "../../redux/contacts/contactsOperations"
import contactsSelectors from '../../redux/contacts/contacts-selectors';

class ContactForm extends Component {
  static propTypes = {
    onAddContact: PropTypes.func.isRequired,
  }

  state = {
    name: "",
    number: "",
    isContacts: false,
  }

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const task = {
      name: this.state.name,
      number: this.state.number,
    }

    if (this.props.contacts.find(({name}) => name === task.name)) {
      this.setState({isContacts: true})
      setTimeout(() => this.setState({isContacts: false}), 4000)
      return
    }

    this.props.onAddContact(task)
    this.setState({
      name: "",
      number: "",
    })
  }

  render() {
    const {name, number, isContacts} = this.state
    return (
      <>
        <Notification isContacts={isContacts} />
        <form className={css.PhoneBookForm} onSubmit={this.handleSubmit}>
          <label className={css.label}>
            Name
            <input className={css.input} name="name" type="text" value={name} onChange={this.handleChange} required />
          </label>

          <label className={css.label}>
            Number
            <input
              className={css.input}
              name="number"
              type="tel"
              value={number}
              onChange={this.handleChange}
              required
            />
          </label>

          <input type="submit" value="Add contact" className={css.inputBtn} />
        </form>
      </>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: contactsSelectors.getContacts(state),
})

const mapDispatchToProps = {
  onAddContact: contactsOperations.onAddContact,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
