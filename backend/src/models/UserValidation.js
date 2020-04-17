const validator = require('validator')

const validateUser = (email, password, error) => {
  if (!password) {
    error.push("You must Provide a Password");
  } else if (password.length <= 6) {
    error.push("Password must be at least 7 characters long");
  } else if (password.includes("password")) {
    error.push("Invalid Password");
  } else if (!email) {
    error.push("Email Cannot be Blank");
  } else if (!validator.isEmail(email)) {
    error.push("Invalid Email");
  }
};

module.exports = validateUser