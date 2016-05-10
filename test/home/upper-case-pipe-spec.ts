import {it, describe, expect} from "@angular/core/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

describe("UpperCasePipe", () => {
    it("should convert the string passed to it to uppercase", () => {
        let upperCasePipe = new UpperCasePipe();

        expect(upperCasePipe.transform("angular2 ")).toEqual("ANGULAR2 ");
    });
});

