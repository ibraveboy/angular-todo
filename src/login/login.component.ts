import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    title = 'Login Page'
}