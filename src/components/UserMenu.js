import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../redux/auth';

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

const UserMenu = ({ email, onLogout }) => (
  <div style={styles.container}>
    <span style={styles.email}>{email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  email: authSelectors.getUserMail(state),
});

export default connect(mapStateToProps, { onLogout: authOperations.logOut })(
  UserMenu,
);
