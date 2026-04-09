// Holiday data for different countries
export const getHolidays = (year, country = 'US') => {
  const holidays = {
    US: [
      { month: 0, day: 1, name: "New Year's Day" },
      { month: 0, day: 15, name: "Martin Luther King Jr. Day" }, // 3rd Monday
      { month: 1, day: 14, name: "Valentine's Day" },
      { month: 1, day: 20, name: "Presidents' Day" }, // 3rd Monday
      { month: 2, day: 17, name: "St. Patrick's Day" },
      { month: 4, day: 27, name: "Memorial Day" }, // Last Monday
      { month: 5, day: 4, name: "Independence Day" },
      { month: 8, day: 2, name: "Labor Day" }, // 1st Monday
      { month: 9, day: 31, name: "Halloween" },
      { month: 10, day: 11, name: "Veterans Day" },
      { month: 10, day: 28, name: "Thanksgiving" }, // 4th Thursday
      { month: 11, day: 25, name: "Christmas Day" },
      { month: 11, day: 31, name: "New Year's Eve" }
    ],
    UK: [
      { month: 0, day: 1, name: "New Year's Day" },
      { month: 2, day: 17, name: "St. Patrick's Day" },
      { month: 3, day: 1, name: "April Fools' Day" },
      { month: 3, day: 21, name: "Queen's Birthday" }, // Approximate
      { month: 7, day: 31, name: "Halloween" },
      { month: 11, day: 25, name: "Christmas Day" },
      { month: 11, day: 26, name: "Boxing Day" },
      { month: 11, day: 31, name: "New Year's Eve" }
    ]
  };

  return holidays[country] || holidays.US;
};

export const isHoliday = (day, month, year, country = 'US') => {
  const holidays = getHolidays(year, country);
  return holidays.find(holiday => holiday.month === month && holiday.day === day);
};
