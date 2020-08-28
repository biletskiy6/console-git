const auth = (login, password) => {
  if (login === 'login' && password === 'password') {
    return 'You are logged in';
  }
  return 'Login is not correct';
};
