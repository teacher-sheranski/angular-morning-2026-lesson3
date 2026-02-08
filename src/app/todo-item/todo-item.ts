import { Component, input } from '@angular/core';
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-item',
  imports: [],
  template: `
    <div [style.background]="bgColor()">
      <h2>{{data().title}}</h2>
      <p>date: {{data().date.toLocaleDateString()}}</p>
      <p>completed? {{data().completed}}</p>
    </div>
  `,
  styleUrl: './todo-item.scss',
})
export class TodoItem {
  // input - פונקציה שמורה שמקבלת טיפוס בסוגריים משולשים
  // משמשת כדי שנוכל לקבל משתנים מקומפוננטת אב
  // כמו פרופס של ריאקט

  bgColor = input<string>();

  //  input.required - זה פרופ שחובה לשלוח
  data = input.required<Todo>();
}
