import {Component, Inject} from "angular2/core";
import {FORM_DIRECTIVES, NgIf, NgModel, CORE_DIRECTIVES, FormBuilder,
    ControlGroup, Validators} from "angular2/common";

@Component({
    selector: "login-page",
    directives: <Array<any>>[FORM_DIRECTIVES, NgIf, NgModel, CORE_DIRECTIVES],
    templateUrl: "./src/login/login-page.html"
})
export class LoginPage {
    loginForm:ControlGroup;
    model = {email: "x@yahoo.com", password: ""};

    constructor(@Inject(FormBuilder) formBuilder:FormBuilder) {
        this.loginForm = formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    }

    doLogin(event) {
        //   console.log("model is", this.model);
        event.preventDefault();
    }
}
