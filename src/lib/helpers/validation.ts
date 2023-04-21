/**
 * This function validates an email address using a regular expression.
 * @param {string} email - The email address to be validated.
 * @returns {boolean} - Returns true if the email is valid, false otherwise.
 */
export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
