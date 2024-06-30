import { Component, EventEmitter, Input, Output } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent {
  @Input() todos: Todo[] = [];
  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();
}
