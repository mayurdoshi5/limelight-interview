import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@lct/api/api.service';
import { User } from '@lct/store/user.actions';
import { Store } from '@ngxs/store';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public form: FormGroup;
    public emailNotFound = false;
    public constructor(private _builder: FormBuilder,
        private _apiService: ApiService,
        private router: Router,
        private store: Store) {
        this.form = this._builder.group({
            'username': this._builder.control('')
        })
    }

    public submit(): void {
        if (this.form.invalid) {
            return;
        }

        this._apiService.authenticate(this.form.value.username).pipe(first())
            .subscribe(data => {
                if (data.info !== 'Email not found') {
                    this.store.dispatch(new User.Initialize(data.user));
                    localStorage.setItem('userLoggedIn', JSON.stringify(data.user));
                    this.router.navigate(['dashboard']);
                } else {
                    this.emailNotFound = true;
                }
            },
                error => {

                });

    }

}
