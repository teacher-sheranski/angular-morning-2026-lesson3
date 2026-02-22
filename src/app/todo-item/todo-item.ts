import { Component, input, output } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  template: `
    <div [style.background]="bgColor()" class="card">
      <h2>{{ data().title }}</h2>
      <p>date: {{ data().date }}</p>
      <p>completed? {{ data().completed }}</p>
      <button (click)="removeMe()">remove me</button>
    </div>
  `,
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  // input - פונקציה שמורה שמקבלת טיפוס בסוגריים משולשים
  // משמשת כדי שנוכל לקבל משתנים מקומפוננטת אב
  // כמו פרופס של ריאקט
  bgColor = input('lightblue', {
    alias: 'background', // bgColor כך יקראו לערך ששולחים מהאבא במקום
    transform: (val: string) => val.toLowerCase() // שינוי הערך שמתקבל מהאבא לפני שנכנס לאינפוט
  });

  //  input.required - זה פרופ שחובה לשלוח
  data = input.required<Todo>();

  // output - שליחת נתונים מבן לאבא - פלט
  // 1. מגדירים משתנה בבן מסוג אאוטפוט
  //    משתנה מסוג אירוע, שמפעיל פונקציה ושולח אליה פרמטר מסוג מחרוזת
  // onRemoveItem
  removeFromParent = output<string>({ alias: 'onRemoveItem' });

  removeMe() {
    // alert(this.data().id + ' from child');

    // 2. בעת לחיצה על הכפתור
    //    מפעילים את הפונקציה של האירוע ושולחים לה את הפרמטר הרצוי
    this.removeFromParent.emit(this.data().id);
  }
}
