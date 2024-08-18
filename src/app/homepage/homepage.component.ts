import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service'
import { WelcomeComponent } from '../welcome/welcome.component';
import { TodoListComponent } from '../todos/todo-list/todo.list.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [WelcomeComponent, TodoListComponent],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
})
export class HomepageComponent {
    constructor(private authService: AuthService){}
    isLoggedIn() {
        return this.authService.isLoggedIn()
    }
}