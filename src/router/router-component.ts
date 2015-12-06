import { Component, bootstrap, provide, Inject, NgFor} from "angular2/angular2";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES,
    LocationStrategy, HashLocationStrategy, Router} from 'angular2/router';
import {LoginPage} from "../login/login-page";
import {CounterPage} from "../counter/counter-page-component";
import {HomePage} from "../home/home-page";
import {ItemsListComponent} from "../items-list/items-list-component";

declare type Routes = Array<{
    path: string;
    component: any,
    as: string;
}>;

const routes:Routes = [
    {path: '/', component: HomePage, as: 'Home'},
    {path: '/login', component: LoginPage, as: 'Login'},
    {path: '/counter', component: CounterPage, as: 'Counter'},
    {path: '/items-list', component: ItemsListComponent, as: 'ItemsList'}
];

@Component({
    selector: 'mainroot',
    templateUrl: './src/router/navigation.html',
    directives: <any>[ROUTER_DIRECTIVES, NgFor]
})
@RouteConfig(<any>routes)
export class RouterComponent {
    header:string = 'Home';

    constructor(@Inject(Router)router:Router) {
        router.subscribe(href => {
            var route = routes.find(route => route.path === '/' + href);
            this.header = !!route ? route.as : 'Home';
        });
    }
}
