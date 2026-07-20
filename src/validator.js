const PATTERNS = {
  name: /^[A-Za-z\s]+$/,
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^\+?\d{10,15}$/,
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  number: /[0-9]/,
  specialChar: /[^A-Za-z0-9\s]/,
};

function isEmpty(value) {
  return value === undefined || value === null || String(value).trim() === '';
}

function createRule(check, message) {
  return { check, message };
}

function applyRule(value, formData, rule) {
  return rule.check(value, formData) ? null : rule.message;
}

const rules = {
  name: [
    createRule((v) => !isEmpty(v), 'Name is required'),
    createRule((v) => String(v).trim().length >= 2, 'Name must be at least 2 characters'),
    createRule((v) => String(v).trim().length <= 50, 'Name must be at most 50 characters'),
    createRule((v) => PATTERNS.name.test(String(v).trim()), 'Name can only contain letters and spaces'),
  ],

  email: [
    createRule((v) => !isEmpty(v), 'Email is required'),
    createRule((v) => PATTERNS.email.test(String(v).trim()), 'Invalid email address'),
  ],

  phone: [
    createRule((v) => !isEmpty(v), 'Phone number is required'),
    createRule((v) => PATTERNS.phone.test(String(v).trim()), 'Phone must contain 10-15 digits, optionally starting with +'),
  ],

  password: [
    createRule((v) => !isEmpty(v), 'Password is required'),
    createRule((v) => String(v).length >= 8, 'Password must be at least 8 characters'),
    createRule((v) => PATTERNS.uppercase.test(v), 'Password must contain at least one uppercase letter'),
    createRule((v) => PATTERNS.lowercase.test(v), 'Password must contain at least one lowercase letter'),
    createRule((v) => PATTERNS.number.test(v), 'Password must contain at least one number'),
    createRule((v) => PATTERNS.specialChar.test(v), 'Password must contain at least one special character'),
  ],

  confirmPassword: [
    createRule((v) => !isEmpty(v), 'Confirm password is required'),
    createRule((v, data) => v === data.password, 'Passwords do not match'),
  ],
};

export function getRulesForField(fieldName) {
  return rules[fieldName] || [];
}

export function registerField(fieldName, fieldRules) {
  if (!Array.isArray(fieldRules)) {
    throw new Error('Rules must be an array');
  }
  rules[fieldName] = fieldRules;
}

export function validateField(fieldName, value, formData = {}) {
  const fieldRules = getRulesForField(fieldName);

  for (let i = 0; i < fieldRules.length; i++) {
    const error = applyRule(value, formData, fieldRules[i]);
    if (error) {
      return error;
    }
  }

  return null;
}

export function validateForm(formData) {
  const errors = {};

  for (const fieldName of Object.keys(rules)) {
    const value = formData[fieldName];
    const error = validateField(fieldName, value, formData);
    if (error) {
      errors[fieldName] = error;
    }
  }

  return errors;
}

export function isValid(errors) {
  return Object.keys(errors).length === 0;
}

export { rules };
