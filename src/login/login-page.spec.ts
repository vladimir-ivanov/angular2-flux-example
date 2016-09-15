/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {TestBed, async} from "@angular/core/testing";
import {LoginPageComponent} from "./login-page-component.ts";

let component:LoginPageComponent;

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

describe("LoginPageComponent", () => {
    beforeEach(async(()=> {
        TestBed.configureTestingModule({
            declarations: [
                LoginPageComponent
            ]
        });

        TestBed.overrideComponent(LoginPageComponent, {
            set: {
                template: `<div>Overridden template here</div>`
            }
        });

        TestBed.compileComponents().then((ar) => {
            let fixture = TestBed.createComponent(LoginPageComponent);
            fixture.detectChanges();

            component = fixture.componentInstance;
        });

    }));

    it("should initialize correctly its properties", () => {
        expect(JSON.stringify(component.model)).toEqual('{"email":"email@yahoo.com","password":""}');
    });
});
