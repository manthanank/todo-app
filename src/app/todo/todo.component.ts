import { Component } from '@angular/core';

interface Todo {
  text: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  newTodo: string = '';
  todos: Todo[] = [];
  currentFilter: string = 'all';
  filteredTodos: Todo[] = [];

  addTodo() {
    if (this.newTodo.trim()) {
      this.todos.push({ text: this.newTodo, completed: false });
      this.newTodo = '';
      this.filterTodos(this.currentFilter);
    }
  }

  toggleTodo(index: number) {
    this.todos[index].completed = !this.todos[index].completed;
    this.filterTodos(this.currentFilter);
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.filterTodos(this.currentFilter);
  }

  filterTodos(filter: string) {
    this.currentFilter = filter;
    if (filter === 'all') {
      this.filteredTodos = this.todos;
    } else if (filter === 'active') {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    }
  }
}