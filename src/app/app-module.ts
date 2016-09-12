import {HttpModule} from "@angular/http";
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app-component.ts";
import {routing, appRoutingProviders} from "./routing.ts";
import {CounterModule} from "../counter/counter-module.ts";
import {HomePageModule} from "../home/home-page-module.ts";
import {LoginPageModule} from "../login/login-page-module.ts";
import {ItemsListModule} from "../items-list/items-list-module.ts";

@NgModule({
    declarations: [AppComponent],
    imports: [
        HttpModule,
        BrowserModule,
        HomePageModule,
        CounterModule,
        LoginPageModule,
        ItemsListModule,
        routing
    ],
    providers: [
        appRoutingProviders
    ],
    bootstrap: [AppComponent],
})
export class AppModule {
}