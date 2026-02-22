import { Component, input, OnInit } from '@angular/core';
import { TodoItem } from '../todo-item/todo-item';
import { Todo } from '../models/todo';
import { TodoForm } from "../todo-form/todo-form";

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem, TodoForm],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList implements OnInit {
  datalist = input.required<Todo[]>();
  realList: Todo[] = [];

  // שגיאה - הבנאי לא מכיר משתני אינפוט
  // constructor() {
  // console.log(this.datalist());
  // this.realList = this.datalist();
  // }

  // פונקציה שקורית לאחר טעינת הקומפוננטה
  // react useEffect(fn, []) כמו
  // כאן ניתן לגשת למשתני אינפוט
  ngOnInit(): void {
    this.realList = this.datalist();
  }

  // 3. אאוטפוט - באבא מגדירים פונקציה שתקבל את מה שנשלח מהבן
  removeOneTodo(id: string) {
    // שגיאה - לא ניתן לבצע השמה לתוך פונקציה
    // this.datalist() = this.datalist().filter((t) => t.id !== id);
    // בנוסף משתנה מסוג אינפוט הוא לקריאה בלבד

    // לכן ניצור משתנה אחר בקומפוננטה - כמו סטייט של ריאקט
    // שעליו נגדיר את כל השינויים
    this.realList = this.realList.filter((t) => t.id !== id);
  }

  addOneTodo(todo: Todo) {
    this.realList.unshift(todo);
  }
}
