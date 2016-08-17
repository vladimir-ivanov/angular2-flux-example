import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app-component.ts";
import {routes} from "../router.ts";
import {LoginPageComponent} from "../login/login-page-component.ts";
import {CounterPageComponent} from "../counter/counter-page-component.ts";
import {ItemsListComponent} from "../items-list/items-list-component.ts";
import {HomePageComponent} from "../home/home-page-component.ts";

@NgModule({
    declarations: [AppComponent, HomePageComponent, LoginPageComponent, CounterPageComponent, ItemsListComponent],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(routes, {useHash: true}),
        HttpModule
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}