const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = validateProfileInput = data => {
  let errors = {};

  // Convert empty fields to an empty string so we can use validator functions
  // because validator only works with strings
  data.name = !isEmpty(data.name) ? data.name : "";
  data.taxID = !isEmpty(data.taxID) ? data.taxID : "";

  // Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  // Tax ID input check
  if (Validator.isEmpty(data.taxID)) {
    errors.taxID = "Tax ID is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
