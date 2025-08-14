import {
  daysOfWeek,
  monthsOfYear,
  monthsOfYearShortNames
} from "../constants/dates";

// Get the current date
const today = new Date();

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
export const getDay = (dateString: string) =>
  convertToDate(dateString).getDay();

/**
 * Gets the month as an integer (0-11) from a date string.
 * @param dateString A string representing the date.
 * @returns An integer representing the month (0-11).
 */
export const getMonth = (dateString: string) =>
  convertToDate(dateString).getMonth();

/**
 * Gets the year as a four-digit integer from a date string.
 * @param dateString A string representing the date.
 * @returns An integer representing the year.
 */
export const getYear = (dateString: string) =>
  convertToDate(dateString).getFullYear();

/**
 * Gets the day of the week as a string from a date string.
 * @param dateString A string representing the date.
 * @returns A string representing the day of the week.
 */
export const getDayName = (dateString: string): string =>
  daysOfWeek[getDay(dateString)];

/**
 * Gets the full name of the month as a string from a given date string.
 * @param dateString A string representing the date.
 * @returns A string representing the full name of the month.
 */
export const getMonthName = (dateString: string): string =>
  monthsOfYear[getMonth(dateString)];

/**
 * Gets the abbreviated name of the month as a string from a given date string.
 * @param dateString A string representing the date.
 * @returns A string representing the abbreviated name of the month.
 */
export const getMonthShortName = (dateString: string): string =>
  monthsOfYearShortNames[getMonth(dateString)];

/**
 * Formats a date using Intl.DateTimeFormat.
 * @param dateString A string representing the date to format.
 * @param locales Optional string or array of strings specifying the locale(s) to use. Defaults to 'en-US'.
 * @param options Optional object specifying the format options.
 * @returns A formatted string representing the provided date.
 */
export const formatDate = (
  dateString: string,
  locales = "en-US",
  options?: Intl.DateTimeFormatOptions
) =>
  new Intl.DateTimeFormat(locales, options).format(convertToDate(dateString));

/**
 * Retrieves the current hour of the day.
 * @returns {number} - The current hour.
 */
export const getHoursToday = () => today.getHours();

/**
 * Retrieves the current minute of the hour.
 * @returns {number} - The current minute.
 */
export const getMinutesToday = () => today.getMinutes();

/**
 * Retrieves the current second of the minute.
 * @returns {number} - The current second.
 */
export const getSecondsToday = () => today.getSeconds();

/**
 * Retrieves the current millisecond of the second.
 * @returns {number} - The current millisecond.
 */
export const getMillisecondsToday = () => today.getMilliseconds();

/**
 * Gets the local time string in the Philippines, including the AM/PM indicator.
 * @returns {string} - The formatted local time string in the Philippines.
 */
export const getLocaleTimeString = () =>
  new Date().toLocaleTimeString("en-PH", {
    hour12: true,
    timeZone: "Asia/Manila"
  });

/**
 * Gets the local time in the Philippines without the AM/PM indicator.
 * @returns {string} - The formatted local time string without the AM/PM indicator.
 */
export const getPHTime = () => getLocaleTimeString().replace(/\s[AP]M$/, "");

/**
 * Gets the parsed local time in the Philippines as a numeric value.
 * @returns {number} - The parsed local time without colons.
 */
export const getParsePHTime = () => parseInt(getPHTime().replace(/:/g, ""));

/**
 * Gets the time indicator (AM/PM) of the local time in the Philippines.
 * @returns {string} - The time indicator (AM/PM) of the local time.
 */
export const getTimeIndicator = () => getLocaleTimeString().split(" ")[1];
