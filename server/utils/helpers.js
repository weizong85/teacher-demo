module.exports = {
  validateEmail
}

function validateEmail(email) {
  let errorMessage = '';
  const regex = /\S+@\S+\.\S+/;
  const trimmedEmail = email.trim();

  if (!regex.test(trimmedEmail) || trimmedEmail.length === 0) {
    errorMessage = '* Email must be in valid format';
  }

  return errorMessage;
};

