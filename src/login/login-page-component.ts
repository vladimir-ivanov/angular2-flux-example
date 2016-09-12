import {Component} from "@angular/core";

class Login {
    constructor(private email:string,
                private password:string) {
    }
}

@Component({
    selector: "login-page",
    templateUrl: "./src/login/login-page.html"
})
export class LoginPageComponent {
    model = new Login("email@yahoo.com", "");
    active = true;

    onSubmit() {
        console.log(this.model);
    }
}
