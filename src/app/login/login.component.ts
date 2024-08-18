import { Component } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    title = 'Login Page';
    isLoading = false;
    loginForm = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)])
    });
    constructor(private authService: AuthService, private router: Router) {
        if (this.authService.isLoggedIn()) {
            this.router.navigate([''])
        }
    }
    handleSubmit () {
        console.log('---> login form submitted', this.loginForm.value)
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
            this.authService.setUser({
                username: this.loginForm.value.email ?? '',
                firstName: 'Jhon',
                lastName: 'Doe',
                isLoggedIn: true,
                id: '123456'
            })
            this.router.navigate([''])
        }, 5000)
    };
}