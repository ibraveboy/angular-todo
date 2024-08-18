import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms'
import { confirmPasswordValidator } from './custom-validator'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink, ReactiveFormsModule],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.css',
})
export class SignupComponent {
    title = 'Signup Page'
    isLoading = false
    formData = new FormGroup({
        firstName: new FormControl('', Validators.required),
        lastName: new FormControl(''),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(8)])
    }, { validators: confirmPasswordValidator() })
    handleSubmit() {
        console.log('----> form submitted -->', this.formData.value)
        this.isLoading = true
        setTimeout(() => {
            this.isLoading = false
        }, 5000)
    }
}