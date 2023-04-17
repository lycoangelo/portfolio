import { daysOfWeek, monthsOfYear } from '../constants/dates';

/**
 * Converts a date string to a JavaScript Date object.
 * @param dateString A string representing the date.
 * @returns A JavaScript Date object representing the provided date string.
 */
export const convertToDate = (dateString: string) => new Date(dateString);

/**
 * Gets the day of the week as an integer (0-6) from a date string.
 * @param dateString A string representing the date.
 * @returns An integer representing the day of the week (0-6).
 */
export const getDay = (dateString: string) => convertToDate(dateString).getDay();

/**
 * Gets the month as an integer (0-11) from a date string.
 * @param dateString A string representing the date.
 * @returns An integer representing the month (0-11).
 */
export const getMonth = (dateString: string) => convertToDate(dateString).getMonth();

/**
 * Gets the year as a four-digit integer from a date string.
 * @param dateString A string representing the date.
 * @returns An integer representing the year.
 */
export const getYear = (dateString: string) => convertToDate(dateString).getFullYear();

/**
 * Gets the day of the week as a string from a date string.
 * @param dateString A string representing the date.
 * @returns A string representing the day of the week.
 */
export const getDayName = (dateString: string): string => daysOfWeek[getDay(dateString)];

/**
 * Gets the month name as a string from a date string.
 * @param dateString A string representing the date.
 * @returns A string representing the month name.
 */
export const getMonthName = (dateString: string): string => monthsOfYear[getMonth(dateString)];

/**
 * Formats a date using Intl.DateTimeFormat.
 * @param dateString A string representing the date to format.
 * @param locales Optional string or array of strings specifying the locale(s) to use. Defaults to 'en-US'.
 * @param options Optional object specifying the format options.
 * @returns A formatted string representing the provided date.
 */
export const formatDate = (
  dateString: string,
  locales = 'en-US',
  options?: Intl.DateTimeFormatOptions
) => new Intl.DateTimeFormat(locales, options).format(convertToDate(dateString));
