# angular2 flux example

Angular2 Flux + Webpack + Karma example

Includes karma configuration to run with typescript files and angular2/testing

Uses facebook flux.Dispatcher (only)

Uses immutable.js collections for more efficient change detection in stores

Examples of tests for actions/ stores/ components with externally injected dependencies (including Http.get spy example)
             
## Getting started

1. Install dependencies and start compiling:

```
npm install
```

2. Optionally run if you want to watch for changes in the file system - e.g. when editing

```
./node_modules/.bin/webpack --watch
```

3. Optionally start the static resources server (and visit http://localhost:8080

```
     npm start
```

or use a server of your choice and open index.html in any browser

## Karma tests contain spying in:
* example of Component testing: TestComponentBuilder.overrideProviders() and TestComponentBuilder.overrideTemplate() (counter module)
* example of testing Components with FormBuilder (login module)
* example of testing actions (counter module)
* example of testing stores (counter module)

## Typescript tslint options

## Todo
Consider using web api utils to abstract away http calls from the actions (which should be responsible for caching too)

Templates resolution:
* use template property (of @Component) with inline templates (not ideal)
* * use template property with webpack https://www.npmjs.com/package/html-loader e.g. 
* ```
* let templateContent = require("html!./myTemplateHere.html");
* ...
* template: templateContent
* ```

