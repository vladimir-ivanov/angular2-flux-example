import dispatcher from '../dispatcher';

export const UPDATE_COUNTER = 'UPDATE_COUNTER';

export class CounterActions {
    counter = 0;

    increment() {
        this.counter += 1;
        this.dispatch();
    }

    decrement() {
        this.counter -= 1;
        this.dispatch();
    }

    incrementIfOdd() {
        if (this.counter % 2 === 1) {
            this.counter += 1;
        }
        this.dispatch();
    }

    //TOOD - use funky zone.js
    incrementAsync(delay) {
        setTimeout(() => {
            this.counter += 1;
            this.dispatch();
        }, delay);
    }

    private dispatch() {
        dispatcher.dispatch({
            type: UPDATE_COUNTER,
            data: this.counter
        });
    }
}