const MAX_LENGTH = 128;
const MIN_LENGTH = 8;
const STRONG_LENGTH = 12;

const PATTERNS = {
  uppercase: /[A-Z]/,
  lowercase: /[a-z]/,
  digit: /[0-9]/,
  symbol: /[^A-Za-z0-9]/,
  space: /\s/,
};

const COMMON_PATTERNS = [
  /password/i,
  /12345/,
  /qwerty/i,
  /abcde/i,
];

function getStrengthLevel(score) {
  if (score >= 5) return 'strong';
  if (score >= 3) return 'moderate';
  if (score >= 2) return 'weak';
  return 'very weak';
}

function checkPasswordStrength(password) {
  if (password === null || password === undefined) {
    return { score: 0, level: 'invalid', feedback: ['Password cannot be null or undefined.'] };
  }

  if (typeof password !== 'string') {
    return { score: 0, level: 'invalid', feedback: ['Password must be a string.'] };
  }

  const trimmed = password.trim();

  if (password.length > 0 && trimmed.length === 0) {
    return { score: 0, level: 'invalid', feedback: ['Password cannot contain only whitespace.'] };
  }

  if (trimmed.length === 0) {
    return { score: 0, level: 'invalid', feedback: ['Password cannot be empty.'] };
  }

  if (trimmed.length > MAX_LENGTH) {
    return { score: 0, level: 'invalid', feedback: [`Password is too long. Maximum is ${MAX_LENGTH} characters.`] };
  }

  const hasUppercase = PATTERNS.uppercase.test(trimmed);
  const hasLowercase = PATTERNS.lowercase.test(trimmed);
  const hasNumber = PATTERNS.digit.test(trimmed);
  const hasSymbol = PATTERNS.symbol.test(trimmed);
  const hasSpace = PATTERNS.space.test(trimmed);
  const containsCommonPattern = COMMON_PATTERNS.some(function (pattern) {
    return pattern.test(trimmed);
  });

  let score = 0;

  if (trimmed.length >= MIN_LENGTH) score++;
  if (trimmed.length >= STRONG_LENGTH) score++;
  if (hasUppercase) score++;
  if (hasLowercase) score++;
  if (hasNumber) score++;
  if (hasSymbol) score++;

  if (hasSpace) {
    score = Math.max(0, score - 1);
  }

  if (containsCommonPattern && score > 0) {
    score--;
  }

  const feedback = [];

  if (trimmed.length < MIN_LENGTH) {
    feedback.push(`Use at least ${MIN_LENGTH} characters.`);
  }
  if (!hasUppercase) {
    feedback.push('Add at least one uppercase letter (A-Z).');
  }
  if (!hasLowercase) {
    feedback.push('Add at least one lowercase letter (a-z).');
  }
  if (!hasNumber) {
    feedback.push('Add at least one number (0-9).');
  }
  if (!hasSymbol) {
    feedback.push('Add at least one symbol (!@#$%^&* etc.).');
  }
  if (hasSpace) {
    feedback.push('Avoid using spaces.');
  }
  if (containsCommonPattern) {
    feedback.push('Avoid common patterns like "password" or "12345".');
  }

  return {
    score,
    level: getStrengthLevel(score),
    details: {
      length: trimmed.length,
      hasUppercase,
      hasLowercase,
      hasNumber,
      hasSymbol,
      hasSpace,
      containsCommonPattern,
    },
    feedback,
  };
}

export default checkPasswordStrength;
