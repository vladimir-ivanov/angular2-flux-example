import { Component, bootstrap, provide, Inject} from "angular2/angular2";
import {RouteConfig, ROUTER_PROVIDERS, ROUTER_DIRECTIVES,
    LocationStrategy, HashLocationStrategy, Router, Location} from 'angular2/router';
import {LoginPage} from "../login/login-page";
import {CounterPage} from "../counter/counter-page-component";
import {HomePage} from "../home/home-page";
import {ItemsListComponent} from "../items-list/items-list-component";

const routes = [
    {path: '/', component: HomePage, as: 'Home'},
    {path: '/login', component: LoginPage, as: 'Login'},
    {path: '/counter', component: CounterPage, as: 'Counter'},
    {path: '/items-list', component: ItemsListComponent, as: 'ItemsList'}
];

@Component({
    selector: 'mainroot',
    templateUrl: './src/router/navigation.html',
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig(<any>routes)
export class RouterComponent {
    header:string = 'Home';

    constructor(@Inject(Router)router:Router, @Inject(Location)location:Location) {
        router.subscribe(href => {
            var route = routes.find(route => route.path === '/' + href);
            this.header = !!route ? route.as : 'Home';
        });
    }
}
