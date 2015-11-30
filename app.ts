import { Component, bootstrap, View , ChangeDetectionStrategy} from "angular2/angular2";
import {FormBuilder, Validators, ControlGroup} from "angular2/angular2";
import {LoginPage} from "./forms/login-page"

@Component({
    selector: 'forms-demo-app',
    changeDetection:ChangeDetectionStrategy.CheckAlways,
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
