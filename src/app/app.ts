import { Component, signal } from '@angular/core';
import { TodoList } from "./todo-list/todo-list";
import { Todo } from './models/todo';
import { SpecialInput } from "./special-input/special-input";

@Component({
  selector: 'app-root',
  imports: [/*TodoList,*/ SpecialInput],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  x = 'my input';
  pass = "1234";

  allTodo = [
    new Todo('do hw', new Date()),
    new Todo('clean home', new Date(2026, 1, 2), true),
    new Todo('bake a cake', '01/02/2026'),
    new Todo('red', '01/02/2026'),
  ]

  getCompleted() {
    return this.allTodo.filter(todo => todo.completed);
  }
}
