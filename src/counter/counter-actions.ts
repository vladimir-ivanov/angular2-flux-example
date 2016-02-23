import dispatcher from "../dispatcher";

export const UPDATE_COUNTER = "UPDATE_COUNTER";
export const RESET_COUNTER = "RESET_COUNTER";

export class CounterActions {
    increment() {
        this.updateOffsetDispatch(1);
    }

    decrement() {
        this.updateOffsetDispatch(-1);
    }

    reset() {
        dispatcher.emit({
            type: RESET_COUNTER,
            data: null
        });
    }

    private updateOffsetDispatch(offset:number) {
        dispatcher.emit({
            type: UPDATE_COUNTER,
            data: offset
        });
    }
}