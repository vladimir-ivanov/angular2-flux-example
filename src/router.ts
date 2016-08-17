import {provideRouter, RouterConfig} from '@angular/router';
import {HomePageComponent} from "./home/home-page-component.ts";
import {CounterPageComponent} from "./counter/counter-page-component.ts";
import {LoginPageComponent} from "./login/login-page-component.ts";
import {ItemsListComponent} from "./items-list/items-list-component.ts";

export const routes: RouterConfig = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: "home", component: HomePageComponent},
    {path: "login", component: LoginPageComponent},
    {path: "counter", component: CounterPageComponent},
    {path: "items-list", component: ItemsListComponent}
];