

export class LogIn {
    static readonly type = '[Auth] Log in';

    constructor(public userName: string) { }
}

export class LogOut {
    static readonly type = '[Auth] Logout';
}