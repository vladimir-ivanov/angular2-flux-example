import {Component, Inject, OnInit} from "angular2/core";
import {HomePageActions} from "./home-page-actions";
import {HomePageStore} from "./home-page-store";
import {NgFor, NgStyle} from "angular2/common";
import {UpperCasePipe} from "./upper-case-pipe";

@Component({
    selector: "home",
    providers: [HomePageActions, HomePageStore],
    directives: <any>[NgFor, NgStyle],
    pipes: <any>[UpperCasePipe],
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
