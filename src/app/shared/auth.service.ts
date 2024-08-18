import {Injectable } from '@angular/core'
import { IUser } from './auth.interface'
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user = new BehaviorSubject<IUser | null>(null)
    
    setUser(payload: IUser) {
        this.user.next(payload)
    }

    getUser() {
        return this.user.value
    }

    isLoggedIn() {
        return !!this.user?.value?.isLoggedIn
    }
}