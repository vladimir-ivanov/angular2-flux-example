import {Pipe} from "angular2/core";

@Pipe({ name: "upperCase" })
export class UpperCasePipe {
    transform(value: string) {
        return value.toUpperCase();
    }
}
