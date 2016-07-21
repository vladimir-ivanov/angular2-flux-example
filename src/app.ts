import {bootstrap} from "@angular/platform-browser-dynamic";
import {AppComponent} from "./app-component.ts";
import {appRouterProviders} from "./router.ts";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import {Http, HTTP_PROVIDERS} from "@angular/http";

bootstrap(AppComponent, [
    appRouterProviders,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    Http,
    HTTP_PROVIDERS
]).catch(err => console.error(err));