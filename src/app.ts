import {provide} from "angular2/core";
import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from "angular2/router";
import {RouterComponent} from "./router/router-component";
import {Http, HTTP_PROVIDERS} from "angular2/http";
import {bootstrap} from "angular2/platform/browser";

bootstrap(<any>RouterComponent, [
    ROUTER_PROVIDERS,
    provide(LocationStrategy, {useClass: HashLocationStrategy}),
    Http,
    HTTP_PROVIDERS
]);

