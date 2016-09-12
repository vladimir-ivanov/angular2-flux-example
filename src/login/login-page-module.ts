import {NgModule} from "@angular/core";
import {CommonModule}   from '@angular/common';
import {FormsModule}   from '@angular/forms';
import {LoginPageComponent} from "./login-page-component.ts";

@NgModule({
    imports: [
        CommonModule, FormsModule
    ],
    declarations: [
        LoginPageComponent
    ],
    providers: [
    ]
})
export class LoginPageModule {}