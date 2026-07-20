function checkPasswordStrength(password) {
  if (password === null || password === undefined) {
    return { score: 0, level: 'invalid', feedback: ['Password cannot be null or undefined.'] };
  }

  if (typeof password !== 'string') {
    return { score: 0, level: 'invalid', feedback: ['Password must be a string.'] };
  }

  const trimmed = password.trim();

  if (trimmed.length === 0) {
    return { score: 0, level: 'invalid', feedback: ['Password cannot be empty.'] };
  }

  if (trimmed.length > 128) {
    return { score: 0, level: 'invalid', feedback: ['Password is too long. Maximum is 128 characters.'] };
  }

  const MIN_LENGTH = 8;
  const STRONG_LENGTH = 12;

  var hasUppercase = /[A-Z]/.test(trimmed);
  var hasLowercase = /[a-z]/.test(trimmed);
  var hasNumber = /[0-9]/.test(trimmed);
  var hasSymbol = /[^A-Za-z0-9\s]/.test(trimmed);
  var hasSpace = /\s/.test(trimmed);

  var containsCommonPattern = (
    /password/i.test(trimmed) ||
    /12345/.test(trimmed) ||
    /qwerty/i.test(trimmed) ||
    /abcde/i.test(trimmed)
  );

  var score = 0;

  if (trimmed.length >= MIN_LENGTH)  score++;
  if (trimmed.length >= STRONG_LENGTH) score++;
  if (hasUppercase)  score++;
  if (hasLowercase)  score++;
  if (hasNumber)     score++;
  if (hasSymbol)     score++;

  if (hasSpace) {
    score = Math.max(0, score - 1);
  }

  if (containsCommonPattern && score > 0) {
    score--;
  }

  var level;
  if (score >= 5)      level = 'strong';
  else if (score >= 3) level = 'moderate';
  else if (score >= 2) level = 'weak';
  else                 level = 'very weak';

  var feedback = [];

  if (trimmed.length < MIN_LENGTH) {
    feedback.push('Use at least ' + MIN_LENGTH + ' characters.');
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
    score: score,
    level: level,
    details: {
      length: trimmed.length,
      hasUppercase: hasUppercase,
      hasLowercase: hasLowercase,
      hasNumber: hasNumber,
      hasSymbol: hasSymbol,
      hasSpace: hasSpace,
      containsCommonPattern: containsCommonPattern
    },
    feedback: feedback
  };
}
