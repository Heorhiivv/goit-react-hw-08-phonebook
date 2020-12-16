const isAuthenticated = state => state.auth.token;

const getUserMail = state => state.auth.user.email;

export default { isAuthenticated, getUserMail };
