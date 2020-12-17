const isAuthenticated = state => state.auth.token;
const getUserMail = state => state.auth.user.email;
const getErrorMessage = state => state.auth.error;

export default { isAuthenticated, getUserMail, getErrorMessage };