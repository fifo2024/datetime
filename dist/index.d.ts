interface ITextOption {
    yearText?: string;
    monthText?: string;
    dayText?: string;
    hourText?: string;
    minText?: string;
    secondText?: string;
}

declare class DateTime {
    private _date;
    constructor(year?: number | string | Date, month?: number, day?: number, hours?: number, minutes?: number, seconds?: number, milliseconds?: number);
    readonly instanceOfDate: Date | null;
    getYears(): number;
    getMonths(): number;
    getDays(): number;
    getHours(): number;
    getMinutes(): number;
    getSeconds(): number;
    getMilliseconds(): number;
    dayOfWeek(): number;
    dayOfYear(): number;
    weekOfYear(): number;
    daysOfMonth(): number;
    toString(format?: string): string;
    isLeapYear(): boolean;
    addYears(num: number): DateTime;
    addMonths(num: number): DateTime;
    addDays(num: number): DateTime;
    addHours(num: number): DateTime;
    addMinutes(num: number): DateTime;
    addSeconds(num: number): DateTime;
    addMilliseconds(num: number): DateTime;
    equalTo(equalDate: DateTime): boolean;
    diffDays(compareDate: DateTime): number;
    getTime(): number;
    formatPassTime(): string;
    static today(): DateTime;
    static now(): DateTime;
    static isLeapYear(year: number): boolean;
    static daysOfMonth(year: number, month: number): number;
    static formatPassTime(startTime: DateTime | Date, options?: ITextOption): string;
    static format(date: DateTime | Date, format?: string): string;
}

export { DateTime as default };
