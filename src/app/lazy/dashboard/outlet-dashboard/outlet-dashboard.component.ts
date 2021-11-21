import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '@lct/api/api.service';
import { TodoModel } from '@lct/models/todo.model';
import { UserModel } from '@lct/models/user.model';
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

    @Select(UserState.getUserData) user$: Observable<UserModel>;
    @Select(TodoState.incompleteTodo)
    incompleteTodo$: Observable<number>;
    constructor(private _snackBar: MatSnackBar,
        private store: Store,
        private _apiService: ApiService,
        private router: Router) {}

    ngOnInit(): void {
        // Method called to check user exist if refreshed
        this.checkReload();
        
    }
    private checkReload() {
        this.user$.pipe(tap(user => {
            if (user.id === -1) {
                if (localStorage.hasOwnProperty('userLoggedIn')) {
                this.store.dispatch(new User.Initialize(JSON.parse(localStorage.getItem('userLoggedIn'))));
                this.getTodos();
                } else {
                    this.logout();
                }
            } else {
                this.getTodos();
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

    private getTodos() {
        this._apiService.get('/todos').pipe(first(), tap((res: TodoModel[]) => {
            res.forEach(d => d.completed ? d.completedDate = randomDate(new Date(2012, 0, 1), new Date()) : d.completedDate = null)
            this.store.dispatch(new Todo.Initialize(res));
        })).subscribe();
    }

    public logout() {
        localStorage.removeItem('userLoggedIn');
        this.router.navigate(['/login']);
    }
}

function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}