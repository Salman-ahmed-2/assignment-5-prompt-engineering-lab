

## Explain what the bad prompt missed and what the professional prompt improved.


What the Bad Prompt Missed
Robustness: It assumed perfect data, leaving the code vulnerable to breaking completely if passed null, undefined, or a number.

Context: It lacked an environment, leading the AI to guess an ES6 module structure (export) that might not fit your setup.

Sanitization: It forgot to handle real-world user behavior, like accidental trailing spaces or excessively long strings that can lag regular expressions.

What the Professional Prompt Improved
Defensive Design: Explicitly calling out edge cases forced the AI to build safety checks first, returning an 'invalid' status instead of crashing.

UX Considerations: By defining the context (a registration form), the output used .trim() to evaluate true length and mapped scores to friendly, actionable feedback.

Implementation Support: Demanding "Verification" ensured you received copy-pasteable test cases and DOM listener examples to implement it instantly.






## Bad Prompt

Create a password checker.

AI Output

``` javascript
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

```
AI Thought:
Password checker created at src/passwordStrength.js:65. It exports checkPasswordStrength(password) which returns an object with:
- score — numeric (0-6) based on length, uppercase, lowercase, numbers, special chars, with a penalty for common patterns
- level — one of "strong", "moderate", "weak", "very weak"
- details — breakdown of each criteria check
- feedback — array of human-readable suggestions for improvement
Usage: import { checkPasswordStrength } from './src/passwordStrength.js'



## better Prompt 

Create a JavaScript function that checks password strength using uppercase, lowercase, numbers, symbols and minimum length.

Output:
Already implemented in src/passwordStrength.js. The checkPasswordStrength function covers all those criteria:

AI remarks:

It already exists at src/passwordStrength.js:65. The function checks:
- uppercase /A-Z/  
- lowercase /a-z/  
- numbers /0-9/  
- symbols non-alphanumeric  
- minimum length ≥ 8  
- bonus for ≥ 12 chars  
- penalty for common patterns (password, 12345, qwerty, etc.)
Returns { score, level, details, feedback }.


## professional Prompt 



Role:
Act as a senior JavaScript mentor.

Task:
Create a reusable password strength checker.

Context:
The function will be used inside a registration form.

Constraints:
Plain JavaScript only.
No libraries.
Reusable.
Beginner-friendly.

Output Format:
Return code first.
Then explanation.
Then test cases.

Edge Cases:
Empty string.
Null.
Undefined.
Passwords with spaces.
Very long passwords.

Verification:
Explain how to manually test it. 


OUTPUT:

```
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
  var hasSymbol = /[^A-Za-z0-9]/.test(trimmed);
  var hasSpace = /\s/.test(password);

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
```
AI Remarks:


Scoring model (0–6): Each of these adds +1 — length≥8, length≥12, uppercase, lowercase, number, symbol. Spaces subtract 1. Common patterns subtract 1. The score maps to strong(5+), moderate(3-4), weak(2), or very weak(0-1).
Key design decisions:
- Trimmed input is used for all checks; leading/trailing spaces are ignored (they don't affect strength).
- hasSymbol excludes spaces (\s) so spaces aren't double-counted as both a symbol and a penalty.
- Null/undefined/non-strings return level: 'invalid' instead of throwing, so the form can call this safely on any value.
Test cases
```
Input
'Tr0ub4dor&3'
'Hello123'
'Hello1'
'abc'
''
null
undefined
12345
'hello world 1'
'password'
'   Tr0ub4dor&3   '
'a'.repeat(129)
Manual testing
Open browser DevTools or Node.js. Copy-paste the function, then run:
// Basic check
checkPasswordStrength('MyP@ssw0rd');
```
// Edge cases
```
checkPasswordStrength('');
checkPasswordStrength(null);
checkPasswordStrength('   ');
In a form context, use it on each keystroke or on blur:
input.addEventListener('input', function() {
  var result = checkPasswordStrength(this.value);
  strengthLabel.textContent = result.level;
  feedbackList.innerHTML = result.feedback.map(f => '<li>' + f + '</li>').join('');
});
```

