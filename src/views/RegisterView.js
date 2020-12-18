import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authSelectors} from "../redux/auth"
import Notification from "../shared/Notify/Notification"
import authActions from '../redux/auth/authActions';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: "flex",
    flexDirection: "column",
    padding: 4,
  },
}

class RegisterView extends Component {
  state = {
    name: "",
    email: "",
    password: "",
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onRegister({...this.state})
    this.setState({name: "", email: "", password: ""})
  }

  render() {
    const {name, email, password} = this.state;
    if (this.props.error) {
      setTimeout(() => { this.props.getErrorNull() }, 3000)
    }
    return (
      <div>
          <Notification error={Boolean(this.props.error)} message="Choose, please another Email!"></Notification>
        <h1>Register page</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Name
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button type="submit">Register</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: authSelectors.getErrorMessage(state),
})

const mapDispatchToProps = {getErrorNull: authActions.getErrorNull, onRegister: authOperations.register } 
export default connect(mapStateToProps, mapDispatchToProps)(RegisterView)
