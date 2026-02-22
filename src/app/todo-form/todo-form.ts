import { Component, output } from '@angular/core';
import { Todo } from '../models/todo';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-form',
  imports: [FormsModule],
  templateUrl: './todo-form.html',
  styleUrl: './todo-form.scss',
})
export class TodoForm {
  newTodo: Todo = new Todo('hello', new Date());

  // 1.
  onSave = output<Todo>();

  // 2.
  addTodo() {
    this.onSave.emit(this.newTodo);
    this.newTodo = new Todo('', new Date());
  }
}
