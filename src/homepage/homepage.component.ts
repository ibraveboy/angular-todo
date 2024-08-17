import { Component } from '@angular/core';
import { RouterLink } from '@angular/router'

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './homepage.component.html',
    styleUrl: './homepage.component.css',
})
export class HomepageComponent {
    title = 'Welcome To ToDo App';
}