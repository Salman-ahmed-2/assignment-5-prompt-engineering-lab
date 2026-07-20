const MIN_LENGTH = 8;
const STRONG_LENGTH = 12;

function hasUppercase(password) {
  return /[A-Z]/.test(password);
}

function hasLowercase(password) {
  return /[a-z]/.test(password);
}

function hasNumber(password) {
  return /[0-9]/.test(password);
}

function hasSpecialChar(password) {
  return /[^A-Za-z0-9]/.test(password);
}

function hasCommonPattern(password) {
  const commonPatterns = [
    /12345/,
    /qwerty/,
    /password/i,
    /abcde/,
    /11111/,
    /admin/i,
    /welcome/i,
  ];
  return commonPatterns.some((pattern) => pattern.test(password));
}

function getStrengthLevel(score) {
  if (score >= 5) return 'strong';
  if (score >= 3) return 'moderate';
  if (score >= 2) return 'weak';
  return 'very weak';
}

function getFeedback(password, score, details) {
  const feedback = [];

  if (details.length < MIN_LENGTH) {
    feedback.push(`Password is too short (${details.length} characters). Minimum is ${MIN_LENGTH}.`);
  }
  if (!details.hasUppercase) {
    feedback.push('Add at least one uppercase letter.');
  }
  if (!details.hasLowercase) {
    feedback.push('Add at least one lowercase letter.');
  }
  if (!details.hasNumber) {
    feedback.push('Add at least one number.');
  }
  if (!details.hasSpecialChar) {
    feedback.push('Add at least one special character.');
  }
  if (details.hasCommonPattern) {
    feedback.push('Avoid common patterns like "password" or "12345".');
  }

  return feedback;
}

export function checkPasswordStrength(password) {
  if (typeof password !== 'string' || password.length === 0) {
    return {
      score: 0,
      level: 'very weak',
      feedback: ['Password cannot be empty.'],
    };
  }

  const length = password.length;

  const details = {
    length,
    hasUppercase: hasUppercase(password),
    hasLowercase: hasLowercase(password),
    hasNumber: hasNumber(password),
    hasSpecialChar: hasSpecialChar(password),
    hasCommonPattern: hasCommonPattern(password),
  };

  let score = 0;

  if (length >= MIN_LENGTH) {
    score++;
  }
  if (length >= STRONG_LENGTH) {
    score++;
  }
  if (details.hasUppercase) score++;
  if (details.hasLowercase) score++;
  if (details.hasNumber) score++;
  if (details.hasSpecialChar) score++;
  if (details.hasCommonPattern && score > 0) {
    score = Math.max(0, score - 1);
  }

  const level = getStrengthLevel(score);
  const feedback = getFeedback(password, score, details);

  return { score, level, details, feedback };
}

export default checkPasswordStrength;
