import dispatcher from "../dispatcher";
import {Http} from "angular2/http";
import {Inject} from "angular2/core";

export const FETCHED_DATA = "FETCHED_DATA";

export class HomePageActions {
    http:Http;

    constructor(@Inject(Http)http:Http) {
        this.http = http;
    }

    initializeData() {
        this.http.get("api-mock/colors.json").subscribe(data => {
            dispatcher.dispatch({
                type: FETCHED_DATA,
                data: data.json()
            });
        });
    }
}
