import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ITodoItem } from "./todos.interface";

@Injectable({
    providedIn: 'root'
})
export class TodoService {
    private todos = new BehaviorSubject<ITodoItem[]>([
        {
            text: 'Going for a walk',
            isDone: false,
            userId: '1234'
        },
        {
            text: 'Going for a walk',
            isDone: false,
            userId: '1234'
        },
        {
            text: 'Going for a walk',
            isDone: false,
            userId: '1234'
        },
        {
            text: 'Going for a walk',
            isDone: false,
            userId: '1234'
        }
    ])

    getTodos() {
        return this.todos.getValue()
    }
}