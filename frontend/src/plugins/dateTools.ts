export default class DateTools {
    convertDateToString(date: Date) {
      return [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join("-");
    }
  
    convertStringToDate(dateString: string) {
      return new Date(dateString);
    }
  
    getDaysBetweenTwoDates(dateStart: Date, dateEnd: Date): number {
      return (dateEnd.getTime() - dateStart.getTime()) / (1000 * 3600 * 24);
    }
  
    getDatesBetweenTwoDates(
      dateStart: Date,
      dateEnd: Date,
      includeDateStart = true,
      includeDateEnd = true
    ): Array<Date> {
      const differenceInDays = this.getDaysBetweenTwoDates(dateStart, dateEnd);
      const dates = [];
      if (includeDateStart) {
        dates.push(dateStart);
      }
      for (let i = 1; i < differenceInDays; i++) {
        dates.push(this.addDaysToDate(dateStart, i));
      }
      if (includeDateEnd) {
        dates.push(dateEnd);
      }
      return dates;
    }
  
    addDaysToDate(date: Date, daysToAdd: number): Date {
      const newDate = new Date(date.getTime());
      newDate.setDate(date.getDate() + daysToAdd);
      return newDate;
    }
  
    getToday(): Date {
      const date = new Date();
      return date;
    }
  
    getDateToday(): string {
      const date = new Date();
      return [
        date.getFullYear(),
        this.padTo2Digits(date.getMonth() + 1),
        this.padTo2Digits(date.getDate()),
      ].join("-");
    }
  
    getDateTodayLastYear(): string {
      const date = new Date(),
        y = date.getFullYear();
      const newDate = new Date(y - 1, date.getMonth(), date.getDate());
  
      return [
        newDate.getFullYear(),
        this.padTo2Digits(newDate.getMonth() + 1),
        this.padTo2Digits(newDate.getDate()),
      ].join("-");
    }
  
    getDateFirstDayOfMonth(): string {
      const date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth();
      const newDate = new Date(y, m, 1);
  
      return [
        newDate.getFullYear(),
        this.padTo2Digits(newDate.getMonth() + 1),
        this.padTo2Digits(1),
      ].join("-");
    }
  
    getDateLastDayOfMonthNextYear() {
      const date = new Date(),
        y = date.getFullYear(),
        m = date.getMonth();
      const newDate = new Date(y + 1, m + 1, 0);
  
      return [
        newDate.getFullYear(),
        this.padTo2Digits(newDate.getMonth() + 1),
        this.padTo2Digits(newDate.getDate()),
      ].join("-");
    }
  
    padTo2Digits(num: number) {
      return num.toString().padStart(2, "0");
    }
  
    dateLocale = {
      days: [
        "Montag",
        "Dienstag",
        "Mittwoch",
        "Donnerstag",
        "Freitag",
        "Samstag",
        "Sonntag",
      ],
      daysShort: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],
      months: [
        "Januar",
        "Februar",
        "März",
        "April",
        "Mai",
        "Juni",
        "Juli",
        "August",
        "September",
        "Oktober",
        "November",
        "Dezember",
      ],
      monthsShort: [
        "Jan",
        "Feb",
        "Mär",
        "Apr",
        "Mai",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Okt",
        "Nov",
        "Dez",
      ],
      firstDayOfWeek: 1,
      format24h: true,
      pluralDay: "Tage",
    };
  }