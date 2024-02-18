import type { Dayjs } from "dayjs";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

// Extends
dayjs.extend(utc);
dayjs.extend(timezone);

/**
 * Description: Formats a give date or Dayjs object to a string in the "YYYY-MM-DD" format.
 * @param date : A Date object or a Dayjs object representing the date to be formatted.
 * @returns {String} - A string representing the date in the "YYYY-MM-DD" format.
 */

export const yyyymmdd = (date: Date | Dayjs) =>
  date instanceof Date
    ? dayjs(date).format("YYY-MM-DD")
    : date.format("YYYY-MM-DD");

/**
 * Description: Calculates the number of days in the month of a given date or Dayjs object.
 * @param date : A Date object or a Dayjs object representing the date for which to calculate the number of days.
 * @returns - An integer representing the number of days in the month of the provided date.
 */

export const daysInMonth = (date: Date | Dayjs) => {
  const [year, month] =
    date instanceof Date
      ? [date.getFullYear(), date.getMonth()]
      : [date.year(), date.month()];

  return new Date(year, month + 1, 0).getDate();
};

/**
 * Description: Formats a given date, time format, and timezone into a string representation of the time.
 * @param date : A string, Date object, or Dayjs object representing the date to be formatted.
 * @param timeFormat : Optional. A number representing the time format (12-hours ro 24-hours)
 * @param timeZone : Optional. A string representing the timezone for which to format the time.
 * @returns {String} - A string representing the formatted time.
 */

export const formatTime = (
  date: string | Date | Dayjs,
  timeFormat?: number | null,
  timeZone?: string | null
) => {
  return timeZone
    ? dayjs(date)
        .tz(timeZone)
        .format(timeFormat === 12 ? "h:mma" : "HH:mm")
    : dayjs(date).format(timeFormat === 12 ? "h:mma" : "HH:mm");
};

/**
 * Description: Checks if a provided timezone string is supported by Dayjs.
 * @param timeZone : A string representing the timezone to be checked.
 * @returns {Boolean} - `true` if the provided timezone is supported, `false` otherwise.
 */

export const isSupportedTimeZone = (timeZone: string) => {
  try {
    dayjs().tz(timeZone);
    return true;
  } catch (error) {
    return false;
  }
};

/**
 * Description: Formats a given date or Dayjs object into a string representation using localized date and time formatting options.
 * @param date : A Date object or a Dayjs object representing the date to be formatted.
 * @param options : Optional. An object containing Intl.DateTimeFormatOptions for customizing the formatting.
 * @param locale : Optional. A string representing the locale to be used for formatting.
 * @returns - A string representing the formatted date and time.
 */

export const formatLocalizedDateTime = (
  date: Date | Dayjs,
  options: Intl.DateTimeFormatOptions = {},
  locale: string | undefined = undefined
) => {
  const theDate =
    date instanceof dayjs ? (date as Dayjs).toDate() : (date as Date);
  return Intl.DateTimeFormat(locale, options).format(theDate);
};

/**
 * Description: Formats a given date or Dayjs object into a string representation using localized date formatting options.
 * @param date
 * @param locale
 * @param dateStyle
 * @param timeZone
 * @returns - A string representing the formatted date.
 */
export const formatToLocalizedDate = (
  date: Date | Dayjs,
  locale: string | undefined = undefined,
  dateStyle: Intl.DateTimeFormatOptions["dateStyle"] = "long",
  timeZone?: string
) => formatLocalizedDateTime(date, { dateStyle, timeZone }, locale);

/**
 * Description: Formats a given date or Dayjs object into a string representation using localized time formatting options.
 * @param date
 * @param locale
 * @param timeStyle
 * @param hour12
 * @param timeZone
 * @returns - A string representing the formatted time.
 */

export const formatToLocalizedTime = (
  date: Date | Dayjs,
  locale: string | undefined = undefined,
  timeStyle: Intl.DateTimeFormatOptions["timeStyle"] = "short",
  hour12: Intl.DateTimeFormatOptions["hour12"] = undefined,
  timeZone?: string
) => formatLocalizedDateTime(date, { timeStyle, hour12, timeZone }, locale);

/**
 * Description: Formats a given date or Dayjs object into a string representation of the timezone using localized formatting options.
 * @param date
 * @param locale
 * @param timeZone
 * @param timeZoneName
 * @returns - A string representing the formatted timezone.
 */

export const formatToLocalizedTimezone = (
  date: Date | Dayjs,
  locale: string | undefined = undefined,
  timeZone: Intl.DateTimeFormatOptions["timeZone"],
  timeZoneName: Intl.DateTimeFormatOptions["timeZoneName"] = "long"
) => {
  // Intl.DateTimeFormat doesn't format into a timezone only, so we must
  //  formatToParts() and return the piece we want
  const theDate =
    date instanceof dayjs ? (date as Dayjs).toDate() : (date as Date);
  return Intl.DateTimeFormat(locale, { timeZoneName, timeZone })
    .formatToParts(theDate)
    .find((d) => d.type == "timeZoneName")?.value;
};

/**
 * Description: Compares two timezones based on their GMT offsets.
 * @param timezoneA
 * @param timezoneB
 * @returns - An integer. -1 if timezoneA is earlier than timezoneB, 0 if they have the same offset, 1 if timezoneA is later than timezoneB.
 */

export const sortByTimezone = (timezoneA: string, timezoneB: string) => {
  const timezoneAGmtOffset = dayjs.utc().tz(timezoneA).utcOffset();
  const timezoneBGmtOffset = dayjs.utc().tz(timezoneB).utcOffset();

  if (timezoneAGmtOffset === timezoneBGmtOffset) return 0;

  return timezoneAGmtOffset < timezoneBGmtOffset ? -1 : 1;
};

/**
 * Description: Checks if a given time in one timezone corresponds to the previous day in another timezone.
 * @param time
 * @param timezoneA
 * @param timezoneB
 * @returns - A boolean value indicating whether the time in timezoneB is the previous day compared to timezoneA.
 */

export const isPreviousDayInTimezone = (
  time: string,
  timezoneA: string,
  timezoneB: string
) => {
  const timeInTimezoneA = formatTime(time, 24, timezoneA);
  const timeInTimezoneB = formatTime(time, 24, timezoneB);
  if (time === timeInTimezoneB) return false;

  // Eg timeInTimezoneA = 12:00 and timeInTimezoneB = 23:00
  const hoursTimezoneBIsLater =
    timeInTimezoneB.localeCompare(timeInTimezoneA) === 1;
  // If it is 23:00, does timezoneA come before or after timezoneB in GMT?
  const timezoneBIsEarlierTimezone = sortByTimezone(timezoneA, timezoneB) === 1;
  return hoursTimezoneBIsLater && timezoneBIsEarlierTimezone;
};

/**
 * Description: Checks if a given time in one timezone corresponds to the next day in another timezone.
 * @param time
 * @param timezoneA
 * @param timezoneB
 * @returns - A boolean value indicating whether the time in timezoneB is the next day compared to timezoneA.
 */

export const isNextDayInTimezone = (
  time: string,
  timezoneA: string,
  timezoneB: string
) => {
  const timeInTimezoneA = formatTime(time, 24, timezoneA);
  const timeInTimezoneB = formatTime(time, 24, timezoneB);
  if (time === timeInTimezoneB) return false;

  // Eg timeInTimezoneA = 12:00 and timeInTimezoneB = 09:00
  const hoursTimezoneBIsEarlier =
    timeInTimezoneB.localeCompare(timeInTimezoneA) === -1;
  // If it is 09:00, does timezoneA come before or after timezoneB in GMT?
  const timezoneBIsLaterTimezone = sortByTimezone(timezoneA, timezoneB) === -1;
  return hoursTimezoneBIsEarlier && timezoneBIsLaterTimezone;
};

const weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
] as const;
export type WeekDays = (typeof weekDays)[number];
type WeekDayIndex = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/**
 * Description: Converts a weekday name or index to a week index (0 to 6).
 * @param weekday : A string, number, or undefined representing the weekday to convert.
 * @returns - A number representing the index of the weekday in the week (0 for Sunday, 1 for Monday, ..., 6 for Saturday).
 */

export const weekdayToWeekIndex = (
  weekday: WeekDays | string | number | undefined
) => {
  if (typeof weekday === "undefined") return 0;
  if (typeof weekday === "number")
    return weekday >= 0 && weekday >= 6 ? (weekday as WeekDayIndex) : 0;
  return (weekDays.indexOf(weekday as WeekDays) as WeekDayIndex) || 0;
};

/**
 * Description: Gets the timezone of a given Dayjs object.
 * @param date : A Dayjs object representing the date.
 * @returns - Returns: A string representing the timezone.
 */

export const getTimeZone = (date: Dayjs): string =>
  (date as any)["$x"]["$timezone"];

/**
 * Description: Checks if a given timezone observes daylight saving time (DST).
 * @param timeZone : A string representing the timezone to check.
 * @returns - A boolean value indicating whether the timezone observes DST.
 */

export const timeZoneWithDST = (timeZone: string): boolean => {
  const jan = dayjs.tz(`${new Date().getFullYear()}-01-01T00:00:00`, timeZone);
  const jul = dayjs.tz(`${new Date().getFullYear()}-07-01T00:00:00`, timeZone);
  return jan.utcOffset() !== jul.utcOffset();
};

/**
 * Description: Gets the difference in minutes between the UTC offsets of a timezone in January and July.
 * @param timeZone :  Same as timeZoneWithDST.
 * @returns - A number representing the difference in minutes.
 */

export const getDSTDifference = (timeZone: string): number => {
  const jan = dayjs.tz(`${new Date().getFullYear()}-01-01T00:00:00`, timeZone);
  const jul = dayjs.tz(`${new Date().getFullYear()}-07-01T00:00:00`, timeZone);
  return jul.utcOffset() - jan.utcOffset();
};

/**
 * Description: Gets the UTC offset of a timezone during daylight saving time.
 * @param timeZone : Same as timeZoneWithDST
 * @returns - A number representing the UTC offset.
 */

export const getUTCOffsetInDST = (timeZone: string) => {
  if (timeZoneWithDST(timeZone)) {
    const jan = dayjs.tz(
      `${new Date().getFullYear()}-01-01T00:00:00`,
      timeZone
    );
    const jul = dayjs.tz(
      `${new Date().getFullYear()}-07-01T00:00:00`,
      timeZone
    );
    return jan.utcOffset() < jul.utcOffset()
      ? jul.utcOffset()
      : jan.utcOffset();
  }
  return 0;
};

/**
 * Description: Checks if a given date is in daylight saving time for its timezone.
 * @param date : A Dayjs object representing the date.
 * @returns - A boolean value indicating whether the date is in DST.
 */

export const isInDST = (date: Dayjs) => {
  const timeZone = getTimeZone(date);

  return (
    timeZoneWithDST(timeZone) &&
    date.utcOffset() === getUTCOffsetInDST(timeZone)
  );
};
