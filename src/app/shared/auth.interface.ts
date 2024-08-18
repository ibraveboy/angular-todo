export interface IUser {
    isLoggedIn: boolean;
    id: string;
    firstName: string;
    lastName?: string;
    username: string;
}