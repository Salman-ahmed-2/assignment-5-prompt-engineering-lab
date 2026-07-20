# Responsible AI Usage Policy for Developers

## Purpose

This policy provides guidelines for the safe, ethical, and responsible use of AI tools during software development. AI can improve productivity by assisting with coding, debugging, documentation, and learning, but developers remain fully responsible for the accuracy, security, and quality of their work.

---

# Scope

This policy applies to all developers using AI assistants (such as ChatGPT, GitHub Copilot, Claude, Gemini, or similar tools) while working on personal, academic, or professional software projects.

---

# Privacy and Sensitive Information

Never paste confidential or sensitive information into public or third-party AI tools unless your organization has explicitly approved it.

The following information must **never** be shared:

- API keys
- Access tokens
- Passwords
- Private certificates
- SSH keys
- Database credentials
- `.env` files
- Production configuration files
- Encryption keys
- Session tokens
- Customer personal information (PII)
- Employee personal information
- Payment information
- Authentication secrets

### Example

❌ **Do Not Paste**

```env
DATABASE_URL=postgres://username:password@server/db
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxx
JWT_SECRET=my-secret-key
```

Instead, replace sensitive values with placeholders:

```env
DATABASE_URL=<database-url>
OPENAI_API_KEY=<api-key>
JWT_SECRET=<secret>
```

---

# Company and Confidential Data

Do not upload or paste confidential company information into AI tools.

Examples include:

- Internal documentation
- Client information
- Financial reports
- Business strategies
- Private repositories
- Proprietary algorithms
- Internal architecture diagrams
- Security documentation
- Unreleased product information

Only share information that has been approved for external use.

---

# Verifying AI Output

AI-generated responses can contain mistakes, outdated information, or insecure code.

Always verify:

- Correctness
- Logic
- Security
- Performance
- Readability
- Error handling
- Edge cases
- Dependency compatibility
- Coding standards
- Documentation accuracy

Before merging AI-generated code:

- Read every line.
- Understand how it works.
- Run tests.
- Add new tests if needed.
- Perform manual review.
- Confirm it follows project conventions.

---

# Do Not Blindly Copy AI Output

AI should assist development—not replace engineering judgment.

Never:

- Copy code directly into production without review.
- Assume AI-generated code is correct.
- Skip testing because AI produced the solution.
- Ignore security implications.
- Merge code without understanding it.

Instead:

1. Review the generated code.
2. Understand its behavior.
3. Verify the logic.
4. Test thoroughly.
5. Refactor if necessary.

---

# Honest AI Disclosure

Be transparent about AI assistance when required by your organization, employer, instructor, or project guidelines.

Examples:

- Mention AI-assisted implementation in pull requests if requested.
- Acknowledge AI assistance in documentation when appropriate.
- Do not claim AI-generated work was entirely written manually if disclosure is required.
- Follow workplace or academic integrity policies regarding AI usage.

Transparency builds trust and helps reviewers understand how the work was produced.

---

# Security Best Practices

When using AI:

- Remove secrets before creating prompts.
- Use placeholder values instead of real credentials.
- Review generated code for security vulnerabilities.
- Validate authentication and authorization logic manually.
- Verify SQL queries against injection attacks.
- Review file handling and input validation.
- Check dependency recommendations before installation.
- Follow your organization's secure coding standards.

---

# Best Practices

Developers should:

- Use AI for learning and brainstorming.
- Ask clear, specific questions.
- Verify generated examples.
- Write unit and integration tests.
- Keep dependencies updated.
- Follow project coding standards.
- Document important implementation decisions.
- Use AI as a productivity tool, not as a replacement for engineering judgment.

---

# Good vs Bad Prompt Examples

## Good Prompt

```text
Review this login function for security issues.

Replace any secrets with placeholders.

Suggest improvements to validation and error handling.
```

## Bad Prompt

```text
Here is our production .env file.

OPENAI_API_KEY=sk-xxxxxxxx
DATABASE_PASSWORD=myRealPassword
JWT_SECRET=mySecretKey

Please debug my application.
```

---

# Developer Checklist

Before using AI:

- [ ] Removed API keys
- [ ] Removed passwords
- [ ] Removed `.env` contents
- [ ] Removed customer data
- [ ] Removed confidential company information

Before using AI-generated code:

- [ ] Read every line
- [ ] Understood the implementation
- [ ] Tested locally
- [ ] Reviewed for security
- [ ] Checked edge cases
- [ ] Verified coding standards
- [ ] Added or updated tests
- [ ] Confirmed documentation if needed

---

# Summary

AI is a powerful development assistant, but it does not replace developer responsibility. Protect sensitive information, never share secrets or confidential company data, verify every AI-generated output, avoid blindly copying code, and be honest about AI assistance whenever disclosure is required. Responsible AI usage helps maintain security, privacy, code quality, and professional integrity.