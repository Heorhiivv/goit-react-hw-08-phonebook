import React, {Component} from "react"
import Title from "../shared/Title/Title"
import ContactForm from  '../components/ContactForm/ContactForm'
import Filter from "../components/Filter/Filter"
import ContactsList from "../components/ContactsList/ContactsList"
import Spinner from '../shared/Spinner/Spinner';
import "../components/App/Tasker.css"

import {connect} from "react-redux"
import contactsSelectors from '../redux/contacts/contacts-selectors';
import contactsOperations from "../redux/contacts/contactsOperations";

class TaskerView extends Component {
  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    return (
      <>
        <Title />
        <ContactForm />
         {this.props.isLoadingTasks && <Spinner />}
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
}
export default connect(mapStateToProps, mapDispatchToProps)(TaskerView)
