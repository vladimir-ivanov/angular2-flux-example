import {provideRouter, RouterConfig} from '@angular/router';
import {HomePageComponent} from "./home/home-page-component.ts";
import {CounterPageComponent} from "./counter/counter-page-component.ts";
import {LoginPage} from "./login/login-page.ts";
import {ItemsListComponent} from "./items-list/items-list-component.ts";


const routes: RouterConfig = [
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: "home", component: HomePageComponent},
    {path: "login", component: LoginPage},
    {path: "counter", component: CounterPageComponent},
    {path: "items-list", component: ItemsListComponent}
];

export const appRouterProviders = [
    provideRouter(routes)
];