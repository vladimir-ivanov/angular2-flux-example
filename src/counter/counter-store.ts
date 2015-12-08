import {EventEmitter} from "angular2/angular2";
import {Map} from "immutable";
import {UPDATE_COUNTER, RESET_COUNTER} from "./counter-actions";
import dispatcher from "../dispatcher";

declare interface Payload {
    type: string;
    data: any;
}

const INITIAL_VALUE = 20;

export class CounterStore extends EventEmitter<string> {
    private store:any = Map({counter: INITIAL_VALUE});

    constructor() {
        super();

        dispatcher.register((payload:Payload) => {
            let oldStore = this.store;

            switch (payload.type) {
                case UPDATE_COUNTER:
                    this.store = this.store.update("counter", v => v + payload.data);
                    break;

                case RESET_COUNTER:
                    this.store = this.store.update("counter", value => INITIAL_VALUE);
                    break;
                default:
                    break;
            }

            if (!this.store.equals(oldStore)) {
                this.emit("changed");
            }
        });
    }

    getCounter() {
        return this.store.get("counter");
    }
}
