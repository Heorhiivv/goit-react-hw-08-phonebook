import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authSelectors} from "../redux/auth"
import Notification from "../shared/Notify/Notification"
import  authActions from '../redux/auth/authActions';

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

class LoginView extends Component {
  state = {
    email: "",
    password: "",
  }

  handleChange = ({target: {name, value}}) => {
    this.setState({[name]: value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.onLogin({...this.state})
    this.setState({name: "", email: "", password: ""})
  }

  render() {
    const {email, password} = this.state
    if (this.props.error) {
      setTimeout(() => { this.props.getErrorNull() }, 3000)
    }
    return (
      <div>
          <Notification error={Boolean(this.props.error)} message="There is no such account!"></Notification>
        <h1>Login page</h1>

        <form onSubmit={this.handleSubmit} style={styles.form}>
          <label style={styles.label}>
            Email
            <input type="email" name="email" value={email} onChange={this.handleChange} />
          </label>

          <label style={styles.label}>
            Password
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: authSelectors.getErrorMessage(state),
})
const mapDispatchToProps = {getErrorNull: authActions.getErrorNull, onLogin: authOperations.logIn } 

export default connect(mapStateToProps, mapDispatchToProps)(LoginView)
