/**
 * Calendar Date Utilities
 * 
 * Helper functions for calendar date calculations and formatting.
 * These utilities handle the complex date logic needed for our calendar component.
 */

/**
 * Get the number of days in a specific month
 * 
 * Uses a clever JavaScript Date trick: creating a date with day 0 of the next month
 * gives us the last day of the previous month.
 * 
 * @param {number} year - Full year (e.g., 2024)
 * @param {number} month - Month index (0 = January, 11 = December)
 * @returns {number} Number of days in the month (28-31)
 */
export function getDaysInMonth(year, month) {
  // Create date for day 0 of next month (which is last day of current month)
  return new Date(year, month + 1, 0).getDate();
}

/**
 * Get the day of week for the first day of a month
 * 
 * Returns 0-6 where 0 = Monday, 6 = Sunday
 * This matches our calendar grid layout starting with Monday
 * 
 * @param {number} year - Full year
 * @param {number} month - Month index (0-11)
 * @returns {number} Day index (0 = Monday, 6 = Sunday)
 */
export function getFirstDayOfMonth(year, month) {
  const firstDay = new Date(year, month, 1);
  let dayOfWeek = firstDay.getDay();
  
  // JavaScript getDay() returns 0 for Sunday, 6 for Saturday
  // We need to convert to our format where Monday = 0
  return dayOfWeek === 0 ? 6 : dayOfWeek - 1;
}

/**
 * Check if a specific date falls on a weekend
 * 
 * @param {number} day - Day of month (1-31)
 * @param {number} year - Full year
 * @param {number} month - Month index (0-11)
 * @returns {boolean} True if Saturday or Sunday
 */
export function isWeekend(day, year, month) {
  const dateToCheck = new Date(year, month, day);
  const dayOfWeek = dateToCheck.getDay();
  
  // 0 = Sunday, 6 = Saturday in JavaScript's getDay()
  return dayOfWeek === 0 || dayOfWeek === 6;
}

/**
 * Check if a specific date is today
 * 
 * Compares year, month, and day with the current date
 * 
 * @param {number} day - Day of month
 * @param {number} year - Full year
 * @param {number} month - Month index (0-11)
 * @returns {boolean} True if the date is today
 */
export function isToday(day, year, month) {
  const today = new Date();
  
  return (
    day === today.getDate() &&
    month === today.getMonth() &&
    year === today.getFullYear()
  );
}

/**
 * Get the full month name for display
 * 
 * @param {number} month - Month index (0-11)
 * @returns {string} Full month name in uppercase
 */
export function getMonthName(month) {
  const monthNames = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  
  return monthNames[month];
}