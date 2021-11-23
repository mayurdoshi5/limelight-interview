import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserModel } from '@lct/models/user.model';
import { LogOut } from '@lct/store/auth.action';
import { AuthState } from '@lct/store/auth.state';
import { FilterTodo } from '@lct/store/filter.action';
import { Todo } from '@lct/store/todo.action';
import { TodoState } from '@lct/store/todo.state';
import { User } from '@lct/store/user.actions';
import { UserState } from '@lct/store/user.state';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { first, tap } from 'rxjs/operators';
@Component({
    templateUrl: './outlet-dashboard.component.html',
    styleUrls: ['./outlet-dashboard.component.scss']
})
export class OutletDashboardComponent implements OnInit {

    @Select(AuthState.getAuthenticated) authenticated$: Observable<boolean>;
    @Select(UserState.getUserData) user$: Observable<UserModel>;
    @Select(TodoState.incompleteTodo)
    incompleteTodo$: Observable<number>;
    constructor(private _snackBar: MatSnackBar,
        private store: Store,
        private router: Router) { }

    ngOnInit(): void {
        // Method called to check user exist if refreshed
        this.authenticated$.pipe(first(), tap(loggedIn => {
            if (loggedIn) {
                this.store.dispatch(new Todo.Initialize([]));
            } else {
                this.logout()
            }
        })).subscribe();


    }


    public redirectLink() {
        this._snackBar.open('This page is not available', '', {
            horizontalPosition: 'center',
            verticalPosition: 'top',
            duration: 3000
        });
    }


    public logout() {
        this.store.dispatch(new User.clearUser());
        this.store.dispatch(new Todo.clearTodo());
        this.store.dispatch(new FilterTodo('All'));
        this.store.dispatch(new LogOut());
        this.router.navigate(['/login']);
    }
}