import { HOLIDAYS_DATA } from './holidays';

export const SITE_URL = 'https://www.nzpublicholidays.com';

export interface NationalHolidayPage {
  slug: string;
  name: string;
  history: string;
  celebration: string;
  mondayisation: string;
  closures: string;
}

export const NATIONAL_HOLIDAY_PAGES: NationalHolidayPage[] = [
  {
    slug: 'new-years-day',
    name: "New Year's Day",
    history: "New Year's Day marks the first day of the Gregorian year and has been a statutory holiday in New Zealand for generations.",
    celebration: 'People celebrate with family gatherings, beach trips, summer festivals, and late-night countdown events across the country.',
    mondayisation: 'If 1 January falls on a weekend, the public holiday is observed on the next available weekday for eligible workers.',
    closures: 'Many offices, banks, and government services are closed. Supermarkets may operate reduced hours and public transport often runs special timetables.'
  },
  {
    slug: 'day-after-new-years-day',
    name: "Day after New Year's Day",
    history: 'This holiday extends the New Year break and is one of the first statutory holidays in every New Zealand calendar year.',
    celebration: 'Families continue summer travel, barbecues, and short domestic holidays, especially in coastal regions.',
    mondayisation: 'If 2 January falls on a weekend, observance shifts to the next weekday under NZ public holiday transfer rules.',
    closures: 'Most offices and many professional services remain closed. Retail and hospitality are often open with holiday surcharges in some venues.'
  },
  {
    slug: 'waitangi-day',
    name: 'Waitangi Day',
    history: 'Waitangi Day commemorates the signing of Te Tiriti o Waitangi on 6 February 1840, a foundational document of Aotearoa New Zealand.',
    celebration: 'Commemorations include civic ceremonies, cultural performances, community events, and historical discussions about the Treaty.',
    mondayisation: 'Since 2014, Waitangi Day is mondayised when it falls on a weekend for workers who do not usually work those days.',
    closures: 'Government offices, schools, and many businesses close. Some retail and hospitality outlets remain open depending on local demand.'
  },
  {
    slug: 'good-friday',
    name: 'Good Friday',
    history: 'Good Friday is a Christian observance in the Easter period and is one of the most restricted trading days in New Zealand.',
    celebration: 'Many people attend church services, spend time with family, or travel during the Easter long weekend.',
    mondayisation: 'Good Friday is fixed to the Friday before Easter Sunday and is not mondayised.',
    closures: 'Most retail shops must close, with limited exemptions for essential services such as pharmacies, fuel stations, and some hospitality providers.'
  },
  {
    slug: 'easter-monday',
    name: 'Easter Monday',
    history: 'Easter Monday follows Easter Sunday and is a nationwide statutory holiday linked to the Christian Easter calendar.',
    celebration: 'Families travel, schools schedule term breaks around Easter, and communities hold seasonal events.',
    mondayisation: 'Easter Monday is already a Monday by definition, so mondayisation does not apply.',
    closures: 'Government offices and many businesses are closed. Some retail and hospitality services operate with holiday trading rules.'
  },
  {
    slug: 'anzac-day',
    name: 'Anzac Day',
    history: 'Anzac Day on 25 April honours members of the Australian and New Zealand Army Corps and all who served in conflict.',
    celebration: 'Dawn services, memorial parades, and remembrance ceremonies are held nationwide, led by local communities and veterans groups.',
    mondayisation: 'Since 2014, Anzac Day is mondayised when it falls on a weekend for eligible workers.',
    closures: 'On Anzac Day, most shops must remain closed until 1 pm. Essential services and selected businesses may open under legal exceptions.'
  },
  {
    slug: 'kings-birthday',
    name: "King's Birthday",
    history: "King's Birthday is celebrated on the first Monday in June as a constitutional public holiday in New Zealand.",
    celebration: 'Communities use the long weekend for events, sport, and domestic travel as winter begins.',
    mondayisation: 'The holiday always falls on a Monday, so transfer rules are not needed.',
    closures: 'Most offices and schools are closed. Retail and hospitality are commonly open with public holiday employment rules applying.'
  },
  {
    slug: 'matariki',
    name: 'Matariki',
    history: 'Matariki, introduced as a public holiday in 2022, marks the Maori New Year and the rising of the Matariki star cluster.',
    celebration: 'Observances include remembrance, sharing kai, storytelling, kapa haka, and reflection on the year ahead.',
    mondayisation: 'Matariki dates are set by legislation and always fall on a Friday, so mondayisation does not apply.',
    closures: 'Public services, schools, and many offices close. Tourism and hospitality activity often increases around local celebrations.'
  },
  {
    slug: 'labour-day',
    name: 'Labour Day',
    history: 'Labour Day recognizes the workers movement and the achievement of the eight-hour working day, with roots in 19th-century New Zealand.',
    celebration: 'People mark the long weekend with family activities, sport, and community events across the country.',
    mondayisation: 'Labour Day is set as the fourth Monday in October, so mondayisation is not required.',
    closures: 'Schools and many offices close. Retail, cafes, and attractions may open with public holiday pay and surcharge rules where applicable.'
  },
  {
    slug: 'christmas-day',
    name: 'Christmas Day',
    history: 'Christmas Day on 25 December is one of New Zealands most widely observed public holidays and a major family celebration.',
    celebration: 'Families gather for meals, church services, and summer holiday traditions including beach outings and gift exchange.',
    mondayisation: 'If Christmas Day falls on a weekend, observance can transfer to a weekday depending on employment patterns.',
    closures: 'Most shops must close on Christmas Day, with only limited exemptions for essential services and selected hospitality operators.'
  },
  {
    slug: 'boxing-day',
    name: 'Boxing Day',
    history: 'Boxing Day on 26 December continues the Christmas holiday period and is a statutory public holiday in New Zealand.',
    celebration: 'People travel, visit family, and shop in post-Christmas sales where trading is permitted.',
    mondayisation: 'If Boxing Day falls on a weekend, it is transferred to the next suitable weekday for eligible workers.',
    closures: 'Many offices remain closed while retail often reopens for sales. Public transport may run reduced or holiday schedules.'
  }
];

const holidaySlugMap = Object.fromEntries(
  NATIONAL_HOLIDAY_PAGES.map((holiday) => [holiday.name, holiday.slug])
);

export function getHolidaySlugByName(name: string) {
  return holidaySlugMap[name] || null;
}

export function getHolidayPageBySlug(slug: string) {
  return NATIONAL_HOLIDAY_PAGES.find((holiday) => holiday.slug === slug) || null;
}

export function getHolidayPathByName(name: string) {
  const slug = getHolidaySlugByName(name);
  return slug ? `/${slug}` : null;
}

export function buildNationalHolidayEventSchema(year = 2026) {
  const national = HOLIDAYS_DATA.national[year] || [];

  return national.map((holiday) => {
    const slug = getHolidaySlugByName(holiday.name);
    const eventUrl = slug ? `${SITE_URL}/${slug}` : `${SITE_URL}/holidays/${year}`;
    const eventDescription = HOLIDAYS_DATA.descriptions[holiday.name] || `New Zealand public holiday: ${holiday.name}.`;

    return {
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: holiday.name,
      startDate: holiday.date,
      location: {
        '@type': 'Place',
        name: 'New Zealand'
      },
      description: eventDescription,
      url: eventUrl
    };
  });
}

export function buildHolidayWebPageSchema(pathname: string, title: string, description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: title,
    description,
    url: `${SITE_URL}${pathname}`
  };
}
