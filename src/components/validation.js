// Email

const validateEmail = ({ email, setEmailError }) => {
  const emailRegular =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  return email && !email.match(emailRegular)
    ? setEmailError("Email not valid")
    : setEmailError("");
};

// Phone
const validateNumber = ({ number, setNumberError }) => {
  return number && number.length <= 9
    ? setNumberError("Phone Number cannot be less than 10")
    : setNumberError("") && number && number.length > 10
    ? setNumberError("Phone Number cannot be greater than 10")
    : setNumberError("");
};

// Name
const validateName = ({ username, setNameError }) => {
  return username && username.length < 3
    ? setNameError("Name is too short")
    : setNameError("");
};

export { validateEmail, validateNumber, validateName };
