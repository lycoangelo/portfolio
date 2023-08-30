import parse from 'html-react-parser';

export const removeHtmlTags = (input: string) =>
  input
    .replace(/<\/?[^>]+(>|$)/g, ' ')
    .trim()
    .replace(/\s+/g, ' ');

export const decodeHTMLEntities = (text: string) => parse(text) as string;

export const sanitizeString = (text: string) =>
  decodeHTMLEntities(removeHtmlTags(text));
