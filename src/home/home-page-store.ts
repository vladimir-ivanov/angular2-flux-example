import {EventEmitter} from "@angular/core";
import * as Immutable from "immutable";
import dispatcher from "../dispatcher.ts";
import {FETCHED_DATA} from "./home-page-actions.ts";

declare interface Payload {
    type: string;
    data: any;
}

export class HomePageStore extends EventEmitter<string> {
    private store:any = Immutable.Map({colors: Immutable.List([])});

    constructor() {
        super();

        dispatcher.subscribe((payload:Payload) => {
            let oldStore = this.store;

            switch (payload.type) {
                case FETCHED_DATA:
                    oldStore = this.store;

                    this.store = this.store.set("colors", Immutable.fromJS(payload.data));

                    break;
                default:
                    break;
            }

            if (!oldStore.equals(this.store)) {
                this.emit("changed");
            }

        });
    }

    getColors() {
        return this.store.get("colors").toJSON();
    }
}
