import parse from 'html-react-parser';

export const stringToKebabCase = (text: string) => {
  return text
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/([a-z])([A-Z])/g, '$1-$2') // Convert camelCase to kebab-case
    .toLowerCase(); // Convert the entire string to lowercase
};

export const removeHtmlTags = (input: string) =>
  input
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');

export const decodeHTMLEntities = (text: string) => parse(text) as string;

export const sanitizeString = (text: string) =>
  decodeHTMLEntities(removeHtmlTags(text));
