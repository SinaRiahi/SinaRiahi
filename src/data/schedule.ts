export interface StatusScheduleItem {
  startHour: number; // 24-hour decimal format (e.g. 0 for 00:00, 8 for 08:00)
  endHour: number;   // 24-hour decimal format (e.g. 12 for 12:00, 24 for 00:00)
  status: string;    // Status text (e.g. 'sleeping', 'studying', 'idle', 'busy')
  colorClass: string; // Tailwind color class for colorful display
}

/**
 * Easy-to-edit Tehran timezone (UTC+3:30) schedule:
 *  00:00 - 08:00 : sleeping
 *  08:00 - 12:00 : studying
 *  12:00 - 16:00 : idle
 *  16:00 - 00:00 : busy
 */
export const TEHRAN_SCHEDULE: StatusScheduleItem[] = [
  {
    startHour: 0,
    endHour: 8,
    status: 'sleeping',
    colorClass: 'text-indigo-600 dark:text-indigo-400',
  },
  {
    startHour: 8,
    endHour: 12,
    status: 'studying',
    colorClass: 'text-blue-600 dark:text-cyan-400',
  },
  {
    startHour: 12,
    endHour: 16,
    status: 'idle',
    colorClass: 'text-emerald-600 dark:text-emerald-400',
  },
  {
    startHour: 16,
    endHour: 24,
    status: 'busy',
    colorClass: 'text-amber-600 dark:text-amber-400',
  },
];

/**
 * Calculates current activity status based on Tehran local time (UTC+3:30).
 */
export const getTehranStatus = (): StatusScheduleItem => {
  const now = new Date();
  // Tehran is UTC + 3 hours 30 minutes (210 minutes ahead of UTC)
  const utcMinutes = now.getUTCHours() * 60 + now.getUTCMinutes();
  const tehranMinutes = (utcMinutes + 210) % 1440;
  const currentHour = tehranMinutes / 60;

  const match = TEHRAN_SCHEDULE.find(
    (item) => currentHour >= item.startHour && currentHour < item.endHour
  );

  return match || TEHRAN_SCHEDULE[0];
};
