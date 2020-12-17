import React, {Component} from "react"
import {connect} from "react-redux"
import {authOperations, authSelectors} from "../redux/auth"
// import Notification from "../shared/Notify/Notification"

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
    const {name, email, password} = this.state

    return (
      <div>
        {/* {typeof this.props.error === "string" && (
          <Notification error={Boolean(this.props.error)} message="Something went wrong!"></Notification>
        )} */}
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

export default connect(mapStateToProps, {onRegister: authOperations.register})(RegisterView)
