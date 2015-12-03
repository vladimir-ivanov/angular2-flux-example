import { Component, bootstrap, View , ChangeDetectionStrategy, FormBuilder, Validators, ControlGroup} from "angular2/angular2";
import {LoginPage} from "./forms/login-page";
import {Counter} from "./counter/counter-component";


@Component({
    selector: 'forms-demo-app',
    directives: <Array<any>>[LoginPage, Counter],
    template: `
  <div>
    <login-page></login-page>
    <counter></counter>
  </div>
  `
})
class FormsDemoApp {
}

bootstrap(<any>FormsDemoApp);
