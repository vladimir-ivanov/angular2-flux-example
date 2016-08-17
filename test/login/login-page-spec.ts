/// <reference path="../../typings/browser/definitions/jasmine/jasmine.d.ts"/>
import {BrowserDynamicTestingModule, platformBrowserDynamicTesting} from "@angular/platform-browser-dynamic/testing";
import {TestBed} from "@angular/core/testing/test_bed";
import {LoginPageComponent} from "../../src/login/login-page-component.ts";

let component:LoginPageComponent;

TestBed.initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
);

fdescribe("LoginPageComponent", () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [LoginPageComponent]
        });

        TestBed.overrideComponent(LoginPageComponent, {
            set: {
                template: `<div>Overridden template here</div>`
            }
        });

      //  TestBed.compileComponents().then(() => {});
        let fixture = TestBed.createComponent(LoginPageComponent);
        fixture.detectChanges();

        component = fixture.componentInstance;
    });

    it("should initialize correctly its properties", () => {
         expect(JSON.stringify(component.model)).toEqual('{"email":"email@yahoo.com","password":""}');
    });

    // describe("onSubmit()", () => {
    //     it("pending implementation", () => {
    //     });
    // });
});
