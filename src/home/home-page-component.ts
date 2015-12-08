import {Component, Inject, NgFor, NgStyle} from "angular2/angular2";
import {Http, HTTP_PROVIDERS} from "angular2/http";

@Component({
    selector: "home",
    providers: [Http],
    directives: <any>[NgFor, NgStyle],
    viewProviders: [HTTP_PROVIDERS],
    templateUrl: "./src/home/home-page.html",
    styles: [],
})

export class HomePage {
    colors;

    constructor(@Inject(Http)http:Http) {
        http.get('api-mock/colors.json').subscribe(data => this.colors = data.json());
    }
}