import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent {

    public form: FormGroup;

    public constructor(private _builder: FormBuilder) {
        this.form = this._builder.group({
            'username': this._builder.control('', Validators.required)
        })
    }

    public submit(): void {

    }

}