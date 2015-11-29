import {Component, FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES, Inject} from 'angular2/angular2'

@Component({
    selector: 'login-page',
    directives: [FORM_DIRECTIVES],
    template: `
  <form [ng-form-model]="loginForm" (submit)="doLogin($event)">
    <input ng-control="email" type="email" placeholder="Your email">
    <input ng-control="password" type="password" placeholder="Your password">
  <button type="submit">Log in</button>
</form>
`
})
export class LoginPage {
    private loginForm:ControlGroup;

    constructor(@Inject(FormBuilder)private fb:FormBuilder) {// various way to inject here
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    doLogin(event) {
        console.log(this.loginForm.value);
        event.preventDefault();
    }
}