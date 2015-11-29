import { Component, bootstrap, View } from "angular2/angular2";
import {FormBuilder, Validators, ControlGroup} from "angular2/angular2";
import {LoginPage} from "./forms/login-form"

@Component({
    selector: 'forms-demo-app'
})
@View({
    directives: <Array<any>>[LoginPage],
    template: `
  <div>
    <login-page></login-page>
  </div>
  `
})
class FormsDemoApp {
}

bootstrap(FormsDemoApp);
