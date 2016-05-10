import {Pipe} from "@angular/core";

@Pipe({ name: "upperCase" })
export class UpperCasePipe {
    transform(value: string) {
        return value.toUpperCase();
    }
}
