import React, {Component} from "react"
import Title from "../shared/Title/Title"
import ContactForm from  '../components/ContactForm/ContactForm'
import Filter from "../components/Filter/Filter"
import ContactsList from "../components/ContactsList/ContactsList"
import Spinner from '../shared/Spinner/Spinner';
import "../components/ContactsList/Contacts.css"
import Notification from '../shared/Notify/Notification';
import authActions from '../redux/auth/authActions';

import {connect} from "react-redux"
import contactsSelectors from '../redux/contacts/contacts-selectors';
import contactsOperations from "../redux/contacts/contactsOperations";

class TaskerView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    if (this.props.error) {
      setTimeout(() => { this.props.getErrorNull() }, 3000)
    }
    return (
      <>
       <Notification error={Boolean(this.props.error)} message="There is no such account!"></Notification>
       {this.props.isLoadingTasks && <Spinner />}
        <Title />
        <ContactForm />
        <Filter />
        <ContactsList />
      </>
    )
  }
}

const mapStateToProps = state => ({
  isLoadingTasks: contactsSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
  getErrorNull: authActions.getErrorNull,
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskerView)
