const validations = (data) => {
    let errors = {};
  
    if (!data.name) {
      errors.name = 'Name is required';
    } else if (!/^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*$/.test(data.name)) {
      errors.name = 'Invalid name';
    }
  
    if (!data.password) {
      errors.password = 'Password required';
    }
  
    return errors;
  };
  
  export default validations;
  