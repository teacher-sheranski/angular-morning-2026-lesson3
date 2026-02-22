/*
 class can decalre:
 - private/public/protected
 - constructors
 - get & set
 - functions
*/

export class Todo {
  id: string;
  title: string;
  completed: boolean;

  private _date: Date = new Date();
  public get date(): string {
    return this.formatDateToYYYYMMDD_UTC(this._date);
  }
  public set date(val: Date | string) {
    this._date = new Date(val);
  }

  constructor(title: string, date: Date | string, completed: boolean = false) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.date = date; // set date
    this.completed = completed;
  }

  private formatDateToYYYYMMDD_UTC(date: Date) {
    return date.toISOString().split('T')[0];
  }
}
