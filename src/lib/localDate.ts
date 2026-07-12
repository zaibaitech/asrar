/**
 * Local-date helpers.
 *
 * `Date#toISOString()` always renders in UTC, so `new Date().toISOString().slice(0, 10)`
 * silently shifts "today" by a day for any user not on UTC — e.g. it becomes tomorrow's
 * date in the evening for timezones west of UTC, and yesterday's date late at night for
 * timezones east of UTC. These helpers use local getters instead, so "today" always means
 * the user's own wall-clock date.
 */

/**
 * Get a date as a "YYYY-MM-DD" string in the local timezone.
 */
export function toLocalDateString(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Get today's date as a "YYYY-MM-DD" string in the local timezone.
 */
export function getLocalToday(): string {
  return toLocalDateString(new Date());
}
