import dispatcher from "../dispatcher.ts";
import {Http} from "@angular/http";
import {Inject} from "@angular/core";

export const FETCHED_DATA = "FETCHED_DATA";

export class HomePageActions {
    http:Http;

    constructor(@Inject(Http)http:Http) {
        this.http = http;
    }

    initializeData() {
        this.http.get("api-mock/colors.json").subscribe(data => {
            dispatcher.emit({
                type: FETCHED_DATA,
                data: data.json()
            });

            setTimeout(
                () => {
                    dispatcher.emit({
                        type: FETCHED_DATA,
                        data: data.json()
                    });
                },
                3000
            );
        });
    }
}
