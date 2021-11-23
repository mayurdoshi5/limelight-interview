import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '@lct/api/api.service';
import { LogIn } from '@lct/store/auth.action';
import { User } from '@lct/store/user.actions';
import { Store } from '@ngxs/store';
import { first } from 'rxjs/operators';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    public form: FormGroup;
    public emailNotFound = false;
    public submitted = false;
    public constructor(private _builder: FormBuilder,
        private _apiService: ApiService,
        private router: Router,
        private store: Store) {
        this.form = this._builder.group({
            username: ['', [Validators.required, Validators.email]]
        })

    }
    ngOnInit(): void {

    }

    public submit(): void {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }

        this._apiService.authenticate(this.form.value.username).pipe(first())
            .subscribe(data => {
                if (data.info !== 'Email not found') {
                    this.store.dispatch(new LogIn(this.form.value.username));
                    this.store.dispatch(new User.Initialize(data.user));
                    this.router.navigate(['dashboard']);
                } else {
                    this.emailNotFound = true;
                }
            },
                error => {

                });

    }

}
