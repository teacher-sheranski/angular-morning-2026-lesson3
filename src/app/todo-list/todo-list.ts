import { Component, input } from '@angular/core';
import { TodoItem } from "../todo-item/todo-item";
import { Todo } from '../models/todo';

@Component({
  selector: 'app-todo-list',
  imports: [TodoItem],
  templateUrl: './todo-list.html',
  styleUrl: './todo-list.scss',
})
export class TodoList {
  datalist = input.required<Todo[]>();
}
