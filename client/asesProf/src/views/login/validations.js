const validations = (data) => {
  let errors = {};

  if (!data.email) {
    errors.email = 'gmail is required';
  }

  if (!data.password) {
    errors.password = 'Password required';
  }
  return errors;
};

export default validations;
  