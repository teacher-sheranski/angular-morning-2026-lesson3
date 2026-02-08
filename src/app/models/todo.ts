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
    date: Date;
    completed: boolean;

    constructor(title: string, date: Date | string | number, completed: boolean = false) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.date = new Date(date);
        this.completed = completed;
    }
}
