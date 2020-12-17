import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  email: {
    fontWeight: 700,
    marginRight: 12,
  },
};

const UserMenu = ({email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.email}>Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.isAuthenticated(state),
  email: authSelectors.getUserMail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};
export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
