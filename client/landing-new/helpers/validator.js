const validator = {
  errors: [],
  requestsInput: null,
  trimSpaces: (input) => {
    const validType = validator.requestsInput[input];
    return validType ? validType.replace(/^\s+|\s+$/g, '') : '';
  },

  validate: (req, inputs) => {
    validator.errors = [];
    Object.getOwnPropertyNames(validator).filter((name) => {
      if (inputs.indexOf(name) !== -1) {
        validator.requestsInput = req;
        if (name === 'password') {
          validator[name]('');
        } else {
          validator[name]('');
        }
      }
    });
    return validator.errors;
  },

  // Validate email
  email: () => {
    const email = validator.trimSpaces('email');
    if (email === '') {
      const error = 'Email is required';
      validator.errors.push({ message: error });
    } else {
      const regex = /^[\w.]+\w+@\w+\.com(\.(ru|cn))?$/;
      if (!regex.test(email)) {
        const error = 'Please enter a valid email address.';
        validator.errors.push({ message: error });
      }
    }
  },

  // Validate phone
  phone: () => {
    const phone = validator.trimSpaces('phone');
    const regex = /^[0]\d{10}$/gm;
    if (phone === '') {
      const error = 'Phone number is required';
      validator.errors.push({ message: error });
    } else if (!regex.test(phone)) {
      const error = 'please enter a valid phone number';
      validator.errors.push({ message: error });
    }
  },

  password: () => {
    const password = validator.trimSpaces('password');
    const confirmPassword = validator.trimSpaces('confirmPassword');
    if (password === '') {
      const error = 'Password is required';
      validator.errors.push({ message: error });
    } else if (password.length < 6) {
      const error = 'Password lenght should be greater than 6 and less than 12';
      validator.errors.push({ message: error });
    } else if (confirmPassword && password !== confirmPassword) {
      const error = 'Password do not match';
      validator.errors.push({ message: error });
    }
  },

  name: () => {
    const firstname = validator.trimSpaces('firstname');
    const lastname = validator.trimSpaces('lastname');
    const fullname = validator.requestsInput['fullname'];
    const username = validator.trimSpaces('username');
    if (firstname && firstname.length < 3) {
      const error = 'firsname should be more than two characters';
      validator.errors.push({ message: error });
    }
    if (lastname && lastname.length < 3) {
      const error = 'lastname should be more than two characters';
      validator.errors.push({ message: error });
    }
    if(fullname  && fullname.length < 4) {
      const error = 'fullname should be more than three characters';
      validator.errors.push({ message: error });
    }
    if(username  && username.length < 2) {
      const error = 'username should be more than two characters';
      validator.errors.push({ message: error });
    }
  },

};

export default validator;
