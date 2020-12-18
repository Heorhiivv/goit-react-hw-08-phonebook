import React, {Component} from "react"
import PropTypes from "prop-types"
import Notification from "../../shared/Notify/Notification"
import css from "../ContactForm/ContactFrom.module.css"
import authActions from '../../redux/auth/authActions';

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
  }

  handleChange = ({target}) => {
    const {name, value} = target
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { getErrorToggle } = this.props
    const task = {
      name: this.state.name,
      number: this.state.number,
    }

    if (this.props.contacts.find(({name}) => name === task.name)) {
    getErrorToggle()
      setTimeout(() => getErrorToggle(), 3000)
      return
    }

    this.props.onAddContact(task)
    this.setState({
      name: "",
      number: "",
    })
  }

  render() {
    const {name, number} = this.state
    return (
      <>
        <Notification error={this.props.error} message= "contact is exist!"/>
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
  error: state.auth.error
})

const mapDispatchToProps = {
  onAddContact: contactsOperations.onAddContact,
  getErrorToggle: authActions.getErrorToggle,
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm)
