export function isHoliday(date: Date, holidays: string): boolean {
  return holidays.split(/\n/).includes(date.toISOString().split('T')[0])
}
