import {Component} from "@angular/core";
import {FORM_DIRECTIVES, NgIf, NgModel, CORE_DIRECTIVES} from "@angular/common";

class Login {
    constructor(email:string,
                password:string) {
    }
}

@Component({
    selector: "login-page",
    directives: <Array<any>>[FORM_DIRECTIVES, NgIf, NgModel, CORE_DIRECTIVES],
    templateUrl: "./src/login/login-page.html"
})
export class LoginPageComponent {
    model = new Login("email@yahoo.com", "");
    active = true;

    onSubmit() {
        console.log(this.model);
    }
}
