export interface Holiday {
  name: string;
  date: string;
  day: string;
  type: 'national' | 'regional' | 'observance';
  region?: string;
  mondayised?: string;
}

export const HOLIDAYS_DATA: {
  national: Record<number, Holiday[]>;
  regional: Record<number, Holiday[]>;
  other: Record<number, Holiday[]>;
  descriptions: Record<string, string>;
} = {
  national: {
    2026: [
      { name: "New Year's Day", date: "2026-01-01", day: "Thursday", type: "national" },
      { name: "Day after New Year's Day", date: "2026-01-02", day: "Friday", type: "national" },
      { name: "Waitangi Day", date: "2026-02-06", day: "Friday", type: "national" },
      { name: "Good Friday", date: "2026-04-03", day: "Friday", type: "national" },
      { name: "Easter Monday", date: "2026-04-06", day: "Monday", type: "national" },
      { name: "Anzac Day", date: "2026-04-25", day: "Saturday", type: "national", mondayised: "2026-04-27" },
      { name: "King's Birthday", date: "2026-06-01", day: "Monday", type: "national" },
      { name: "Matariki", date: "2026-07-10", day: "Friday", type: "national" },
      { name: "Labour Day", date: "2026-10-26", day: "Monday", type: "national" },
      { name: "Christmas Day", date: "2026-12-25", day: "Friday", type: "national" },
      { name: "Boxing Day", date: "2026-12-26", day: "Saturday", type: "national", mondayised: "2026-12-28" },
    ],
    2027: [
      { name: "New Year's Day", date: "2027-01-01", day: "Friday", type: "national" },
      { name: "Day after New Year's Day", date: "2027-01-02", day: "Saturday", type: "national", mondayised: "2027-01-04" },
      { name: "Waitangi Day", date: "2027-02-06", day: "Saturday", type: "national", mondayised: "2027-02-08" },
      { name: "Good Friday", date: "2027-03-26", day: "Friday", type: "national" },
      { name: "Easter Monday", date: "2027-03-29", day: "Monday", type: "national" },
      { name: "Anzac Day", date: "2027-04-25", day: "Sunday", type: "national", mondayised: "2027-04-26" },
      { name: "King's Birthday", date: "2027-06-07", day: "Monday", type: "national" },
      { name: "Matariki", date: "2027-06-25", day: "Friday", type: "national" },
      { name: "Labour Day", date: "2027-10-25", day: "Monday", type: "national" },
      { name: "Christmas Day", date: "2027-12-25", day: "Saturday", type: "national", mondayised: "2027-12-27" },
      { name: "Boxing Day", date: "2027-12-26", day: "Sunday", type: "national", mondayised: "2027-12-28" },
    ],
  },
  regional: {
    2026: [
      { name: "Wellington Anniversary", date: "2026-01-19", day: "Monday", type: "regional", region: "Wellington" },
      { name: "Auckland Anniversary", date: "2026-01-26", day: "Monday", type: "regional", region: "Auckland" },
      { name: "Nelson Anniversary", date: "2026-02-02", day: "Monday", type: "regional", region: "Nelson" },
      { name: "Taranaki Anniversary", date: "2026-03-09", day: "Monday", type: "regional", region: "Taranaki" },
      { name: "Otago Anniversary", date: "2026-03-23", day: "Monday", type: "regional", region: "Otago" },
      { name: "Southland Anniversary", date: "2026-04-07", day: "Tuesday", type: "regional", region: "Southland" },
      { name: "South Canterbury Anniversary", date: "2026-09-28", day: "Monday", type: "regional", region: "South Canterbury" },
      { name: "Hawke's Bay Anniversary", date: "2026-10-23", day: "Friday", type: "regional", region: "Hawke's Bay" },
      { name: "Marlborough Anniversary", date: "2026-11-02", day: "Monday", type: "regional", region: "Marlborough" },
      { name: "Canterbury Anniversary", date: "2026-11-13", day: "Friday", type: "regional", region: "Canterbury" },
      { name: "Chatham Islands Anniversary", date: "2026-11-30", day: "Monday", type: "regional", region: "Chatham Islands" },
      { name: "Westland Anniversary", date: "2026-11-30", day: "Monday", type: "regional", region: "Westland" },
    ],
    2027: [
      { name: "Wellington Anniversary", date: "2027-01-25", day: "Monday", type: "regional", region: "Wellington" },
      { name: "Auckland Anniversary", date: "2027-02-01", day: "Monday", type: "regional", region: "Auckland" },
      { name: "Nelson Anniversary", date: "2027-02-01", day: "Monday", type: "regional", region: "Nelson" },
      { name: "Taranaki Anniversary", date: "2027-03-08", day: "Monday", type: "regional", region: "Taranaki" },
      { name: "Otago Anniversary", date: "2027-03-22", day: "Monday", type: "regional", region: "Otago" },
      { name: "Southland Anniversary", date: "2027-03-30", day: "Tuesday", type: "regional", region: "Southland" },
      { name: "South Canterbury Anniversary", date: "2027-09-27", day: "Monday", type: "regional", region: "South Canterbury" },
      { name: "Hawke's Bay Anniversary", date: "2027-10-22", day: "Friday", type: "regional", region: "Hawke's Bay" },
      { name: "Marlborough Anniversary", date: "2027-11-01", day: "Monday", type: "regional", region: "Marlborough" },
      { name: "Canterbury Anniversary", date: "2027-11-12", day: "Friday", type: "regional", region: "Canterbury" },
      { name: "Chatham Islands Anniversary", date: "2027-11-29", day: "Monday", type: "regional", region: "Chatham Islands" },
      { name: "Westland Anniversary", date: "2027-11-29", day: "Monday", type: "regional", region: "Westland" },
    ],
  },
  other: {
    2026: [
      { name: "Daylight Saving ends", date: "2026-04-05", day: "Sunday", type: "observance" },
      { name: "Easter Tuesday (Education sector)", date: "2026-04-07", day: "Tuesday", type: "observance" },
      { name: "Daylight Saving starts", date: "2026-09-27", day: "Sunday", type: "observance" },
    ],
    2027: [
      { name: "Daylight Saving ends", date: "2027-04-04", day: "Sunday", type: "observance" },
      { name: "Easter Tuesday (Education sector)", date: "2027-03-30", day: "Tuesday", type: "observance" },
      { name: "Daylight Saving starts", date: "2027-09-26", day: "Sunday", type: "observance" },
    ],
  },
  descriptions: {
    "New Year's Day": "The first day of the year. If it falls on a weekend, the holiday is observed on the next available working weekday.",
    "Day after New Year's Day": "The second day of the new year. Same Mondayisation rules as New Year's Day apply.",
    "Waitangi Day": "Commemorates the signing of the Treaty of Waitangi (Tiriti o Waitangi) on 6 February 1840. Mondayised since 2014.",
    "Good Friday": "The Friday before Easter Sunday. Most shops are required to be closed.",
    "Easter Monday": "The Monday following Easter Sunday. A statutory public holiday for all workers.",
    "Easter Tuesday (Education sector)": "Not an official public holiday, but the education sector (including universities) gets the day off.",
    "Anzac Day": "25 April — commemorates members of the Australian and New Zealand Army Corps (ANZAC). Mondayised since 2014. Shops closed until 1pm.",
    "King's Birthday": "The first Monday in June. Not the actual King's birthday, but a day off regardless!",
    "Matariki": "Māori New Year — Matariki (Ngā Mata o te Ariki Tāwhirimātea) marks the rising of the Pleiades star cluster. Always falls on a Friday in June or July.",
    "Labour Day": "The fourth Monday in October. Celebrates the achievements of workers and the 8-hour working day movement.",
    "Christmas Day": "25 December. Most shops are required to be closed. Same Mondayisation rules as New Year's Day.",
    "Boxing Day": "26 December. Follows the same observance rules as the Day after New Year's Day.",
  },
};

export const HOLIDAY_ICONS: Record<string, string> = {
  "New Year's Day": "🎆",
  "Day after New Year's Day": "🎊",
  "Waitangi Day": "🇳🇿",
  "Good Friday": "✝️",
  "Easter Monday": "🐣",
  "Easter Tuesday (Education sector)": "🐰",
  "Anzac Day": "🌺",
  "King's Birthday": "👑",
  "Matariki": "✨",
  "Labour Day": "💪",
  "Christmas Day": "🎄",
  "Boxing Day": "🎁",
  "Daylight Saving ends": "🕐",
  "Daylight Saving starts": "🕐",
};

export function getHolidayIcon(name: string) {
  if (HOLIDAY_ICONS[name]) return HOLIDAY_ICONS[name];
  if (name.includes("Anniversary")) return "🏛️";
  return "📅";
}

export function formatDate(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${months[date.getMonth()]} ${date.getDate()}`;
}

export function formatDateFull(dateStr: string) {
  const date = new Date(dateStr + "T00:00:00");
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export function daysUntil(dateStr: string) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const holiday = new Date(dateStr + "T00:00:00");
  const diff = Math.ceil((holiday.getTime() - today.getTime()) / (1000 * 60 * 60 * 24));
  return diff;
}

export function getNextHoliday(year: number) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const allNational = HOLIDAYS_DATA.national[year] || [];
  for (const h of allNational) {
    const effectiveDate = h.mondayised || h.date;
    if (new Date(effectiveDate + "T00:00:00") >= today) {
      return { ...h, effectiveDate };
    }
  }
  return null;
}
