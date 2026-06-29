/** Returns the next occurrence of `dayOfWeek` (0=Sun) at `hour`:00, strictly after `now`. */
export function getNextCutoff(now: Date, dayOfWeek: number, hour: number): Date {
  const result = new Date(now);
  result.setHours(hour, 0, 0, 0);
  const dayDiff = (dayOfWeek - result.getDay() + 7) % 7;
  result.setDate(result.getDate() + dayDiff);
  if (result.getTime() <= now.getTime()) {
    result.setDate(result.getDate() + 7);
  }
  return result;
}

export interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function diffToCountdown(target: Date, now: Date): Countdown {
  const totalSeconds = Math.max(0, Math.floor((target.getTime() - now.getTime()) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}
