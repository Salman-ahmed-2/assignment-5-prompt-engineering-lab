# Assignment 5: Prompt Engineering Lab

A repository demonstrating AI-assisted software development workflows through structured prompt engineering.

![alt text](image.png)

## Exercises

| # | Topic | Prompt | Source Code | Key Learning |
|---|-------|--------|-------------|--------------|
| 1 | Bad vs Good Prompts | `prompts/01-bad-vs-good-prompts.md` | `src/passwordStrength.js` | How prompt quality affects AI output |
| 2 | Code Generation | `prompts/02-code-generation-prompts.md` | `src/validator.js` | Generating reusable modules with constraints |
| 3 | Debugging | `prompts/03-debugging-prompts.md` | `src/discountCalculator.js` | AI-assisted bug fixing with context |
| 4 | Refactoring | `prompts/04-refactoring-prompts.md` | `src/textAnalyzer.js` | AI-driven code cleanup preserving behavior |
| 5 | Code Review | `prompts/05-code-review-prompts.md` | `src/passwordStrength.js` | AI as a strict senior engineer reviewer |

## Repository Structure

```
├── README.md
├── index.html                          # Web UI integrating all modules
├── responsible-ai-policy.md            # Guidelines for responsible AI usage
├── ai-usage-report.md                  # Token usage and AI tool tracking
├── prompts/
│   ├── 01-bad-vs-good-prompts.md       # Prompt quality comparison
│   ├── 02-code-generation-prompts.md   # Modular form validator generation
│   ├── 03-debugging-prompts.md         # Discount calculation bug fix
│   ├── 04-refactoring-prompts.md       # Receipt printer code cleanup
│   └── 05-code-review-prompts.md       # Strict senior engineer code review
├── src/
│   ├── passwordStrength.js             # Password strength checker
│   ├── validator.js                    # Reusable form validation module
│   ├── discountCalculator.js           # Discount calculation logic
│   └── textAnalyzer.js                 # Receipt printer
├── tests/
├── screenshots/
└── .github/
```

## Responsible AI

See [`responsible-ai-policy.md`](responsible-ai-policy.md) for guidelines on privacy, verification, disclosure, and security when using AI tools in development.
