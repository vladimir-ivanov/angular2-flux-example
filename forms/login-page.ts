import {Component,
    FormBuilder, Validators, ControlGroup,
    FORM_DIRECTIVES, CORE_DIRECTIVES,
    NgModel,
    NgIf, Inject,
    ChangeDetectionStrategy} from 'angular2/angular2'

@Component({
    selector: 'login-page',
    directives: <Array<any>>[FORM_DIRECTIVES, NgIf, NgModel, CORE_DIRECTIVES],
    templateUrl: './forms/login-page.html',
    changeDetection:ChangeDetectionStrategy.CheckAlways,
})
export class LoginPage {
    loginForm:ControlGroup;
    model = {email: 'x@yahoo.com', password: ''};

    constructor(@Inject(FormBuilder) private fb:FormBuilder) {// various way to inject here
        this.loginForm = fb.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    doLogin(event) {
        console.log(this.model);
        event.preventDefault();
    }
}