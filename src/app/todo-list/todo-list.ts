import { Component } from '@angular/core';
import { TodoItem } from "../todo-item/todo-item";
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  datalist: Todo[] = [
    new Todo('do hw', new Date()),
    new Todo('clean home', new Date(2026, 1, 2), true),
    new Todo('bake a cake', '01/02/2026'),
    new Todo('red', '01/02/2026'),
  ];
}
