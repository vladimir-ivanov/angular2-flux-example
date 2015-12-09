import {Component, Inject, NgFor, NgStyle} from "angular2/angular2";
import {HomePageActions} from "./home-page-actions";
import {HomePageStore} from "./home-page-store";
import {OnInit} from "angular2/core";

@Component({
    selector: "home",
    providers: [HomePageActions, HomePageStore],
    directives: <any>[NgFor, NgStyle],
    templateUrl: "./src/home/home-page.html",
    styles: [],
})

export class HomePageComponent implements OnInit {
    store;
    colors;

    constructor(@Inject(HomePageActions)actions, @Inject(HomePageStore)store) {
        this.store = store;
        actions.initializeData();
    }

    ngOnInit() {
        this.store.subscribe(() => this.colors = this.store.getColors());
    }
}
