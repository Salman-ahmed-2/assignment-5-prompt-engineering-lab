
prompt:

Generate a reusable and modular JavaScript/TypeScript form validation utility that can be used across multiple projects.

Requirements:
Create a single validation module that exports reusable validation functions.
The validator should support the following fields:
Name
Required
Minimum 2 characters
Maximum 50 characters
Only letters and spaces allowed
Email
Required
Must be a valid email format
Phone
Required
Accept only digits
Length between 10–15 digits
Optionally allow a leading +
Password
Required
Minimum 8 characters
At least one uppercase letter
At least one lowercase letter
At least one number
At least one special character
Confirm Password
Required
Must exactly match the password
Empty Fields
Detect and return an error if any required field is empty or contains only whitespace.
Output Requirements:
Return validation errors as an object, for example:
{
  name: "Name is required",
  email: "Invalid email address",
  password: "Password must contain at least one uppercase letter"
}
Return an empty object if all fields are valid.
Use regular expressions where appropriate.
Keep the code clean, reusable, and well-documented.
Avoid code duplication by creating helper functions where possible.
Write the code using ES6 modules.
Bonus:
Create a generic validateField(fieldName, value, formData) function.
Create a validateForm(formData) function that validates the entire form.
Make it easy to add new validation rules in the future.
Include example usage demonstrating validation for a registration form.
Ensure the code follows clean code principles and best practices.



| Requirement                   | Status |
| ----------------------------- | ------ |
| Return structured errors      |  Yes   |
| No DOM manipulation           |  Yes   |
| Reusable validation functions |  Yes  |
| Separated validation from UI  |  Yes    |


