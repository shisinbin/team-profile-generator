// Module that holds validation checks

const isNotEmpty = (value) => {
  if (value.trim().length > 0) {
    return true;
  }
  return 'You must enter at least one character';
};

const isNumeric = (value) => {
  if (!isNaN(value) && !isNaN(parseFloat(value))) {
    return true;
  }
  return 'You must enter a number';
};

// checks if email is in format: <text>@<text>.<text>
const isEmail = (value) => {
  const re = /^[^@]+@[^@]+\.[^@]+$/;
  if (re.test(value)) {
    return true;
  }
  return 'You must enter a valid email address';
};

// checks if value is in format: <num><nums or spaces or hyphens>
const hasNumbersAndPossiblyHyphensAndOrSpaces = (value) => {
  const re = /^[0-9]+([\s-][0-9]+)*$/;
  if (re.test(value)) {
    return true;
  }
  return 'You must enter a valid phone number';
};

module.exports = {
  isNotEmpty,
  isNumeric,
  isEmail,
  hasNumbersAndPossiblyHyphensAndOrSpaces,
};
