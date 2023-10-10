function checkLoginValidation(email, password) {
  if (!email || !password) {
    return false;
  }

  return true;
}

module.exports = checkLoginValidation;
