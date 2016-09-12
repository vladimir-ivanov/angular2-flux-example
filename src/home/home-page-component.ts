import {Component, Inject, OnInit} from "@angular/core";
import {HomePageActions} from "./home-page-actions.ts";
import {HomePageStore} from "./home-page-store.ts";

@Component({
    selector: "home",
    providers: [HomePageActions, HomePageStore],
    templateUrl: "./src/home/home-page.html",
    styles: [],
})
export class HomePageComponent implements OnInit {
    colors;

    constructor(@Inject(HomePageActions) private actions, @Inject(HomePageStore) private store) {
        actions.initializeData();
    }
    
    ngOnInit() {
        this.store.subscribe(() => this.colors = this.store.getColors());
    }
}
