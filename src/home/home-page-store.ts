import {EventEmitter} from "angular2/core";
import {List} from "immutable";
import dispatcher from "../dispatcher";
import {FETCHED_DATA} from "./home-page-actions";

declare interface Payload {
    type: string;
    data: any;
}

export class HomePageStore extends EventEmitter<string> {
    private store:any = List([]);

    constructor() {
        super();

        dispatcher.register((payload:Payload) => {
            let oldStore = this.store;

            switch (payload.type) {
                case FETCHED_DATA:
                    this.store = this.store.clear().concat(payload.data);
                    break;
                default:
                    break;
            }

            //todo - this makes no sense - fix it :-)
            if (!this.store.equals(oldStore)) {
                this.emit("changed");
            }
        });
    }

    getColors() {
        console.log(this.store.toArray());
        return this.store.toArray();
    }
}
