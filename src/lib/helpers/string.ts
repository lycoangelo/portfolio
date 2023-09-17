import parse from 'html-react-parser';

/**
 * Converts a string to kebab-case.
 *
 * @param {string} text - The input text to convert.
 * @returns {string} The kebab-cased string.
 */
export const stringToKebabCase = (text: string) => {
  return text
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
    .toLowerCase(); // Convert the entire string to lowercase
};

/**
 * Removes HTML tags from a string.
 *
 * @param {string} input - The input string containing HTML.
 * @returns {string} The string with HTML tags removed.
 */
export const removeHtmlTags = (input: string) =>
  input
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');

/**
 * Decodes HTML entities in a string.
 *
 * @param {string} text - The input text containing HTML entities.
 * @returns {string} The string with HTML entities decoded.
 */
export const decodeHTMLEntities = (text: string) => parse(text) as string;

/**
 * Sanitizes a string by removing HTML tags and decoding HTML entities.
 *
 * @param {string} text - The input text containing HTML.
 * @returns {string} The sanitized string with HTML tags removed and entities decoded.
 */
export const sanitizeString = (text: string) =>
  decodeHTMLEntities(removeHtmlTags(text));

/**
 * Capitalizes the first letter of a string.
 *
 * @param {string} input - The input string.
 * @returns {string} The string with the first letter capitalized.
 */
export const capitalizeString = (input: string) => {
  if (input.length === 0) return input; // Return an empty string if the input is empty.

  return input.charAt(0).toUpperCase() + input.slice(1);
};
