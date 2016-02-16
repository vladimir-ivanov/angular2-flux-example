import {
    TEST_BROWSER_PLATFORM_PROVIDERS,
    TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';

import {
    it,
    describe,
    expect, setBaseTestProviders
} from "angular2/testing";
import {UpperCasePipe} from "../../src/home/upper-case-pipe";

setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS);

describe("UpperCasePipe", () => {
    it("should convert the string passed to it to uppercase", () => {
        let upperCasePipe = new UpperCasePipe();

        expect(upperCasePipe.transform("angular2 ")).toEqual("ANGULAR2 ");
    });
});

