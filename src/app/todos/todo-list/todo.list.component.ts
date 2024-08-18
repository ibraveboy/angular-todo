import { Component } from '@angular/core';
import { TodoService } from '../todos.service';

@Component({
    selector: 'todo-list',
    standalone: true,
    imports: [],
    templateUrl: './todo.list.component.html',
    styleUrl: './todo.list.component.css',
})
export class TodoListComponent {
    title = 'Todo List';
    constructor(private todoService: TodoService) {}
    getTodos() {
        return this.todoService.getTodos()
    }
}