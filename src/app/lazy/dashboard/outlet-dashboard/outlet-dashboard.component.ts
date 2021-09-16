import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './outlet-dashboard.component.html',
    styleUrls: ['./outlet-dashboard.component.scss']
})
export class OutletDashboardComponent {

    constructor(private _router: Router) { }

    public navPosts(): void {
        this._router.navigate(['/dashboard/posts']);
    }

    public navTodos(): void {
        this._router.navigate(['/dashboard/todos']);
    }

    public logout(): void {
        this._router.navigate(['/login']);
    }
}
