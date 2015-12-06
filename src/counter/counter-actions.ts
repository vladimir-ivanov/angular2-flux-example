import dispatcher from '../dispatcher';

export const UPDATE_COUNTER = 'UPDATE_COUNTER';

export class CounterActions {
    private counter = 0;

    increment() {
        this.counter += 1;
        this.dispatch();
    }

    decrement() {
        this.counter -= 1;
        this.dispatch();
    }

    reset() {
        this.counter = 0;
        this.dispatch();
    }

    private dispatch() {
        dispatcher.dispatch({
            type: UPDATE_COUNTER,
            data: this.counter
        });
    }
}