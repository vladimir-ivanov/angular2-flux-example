# angular2 flux example
Angular2 Flux + Webpack + Karma example

Includes karma configuration to run with typescript files and angular2/testing
Uses facebook flux.Dispatcher (only)
Currently added a test of a Component (having a form inside), but more Service/ Pipe tests will follow soon.


## Getting started

1. Install dependencies and start compiling:

```
npm install
```
2. Optionally run if you want to watch for changes in the file system - e.g. when editing

```
     npm webpack
```

3. Optionally start the static resources server (and visit http://localhost:8080

```
     npm start
```

or use a server of your choice and open index.html in any browser

## Todo
* Protractor?
* Figure out clear strategy about css structuring
* add immutables.js
* write more tests - to cover provider overwrites
* add async calls via http - for the sake of testing
* define tslint rules
* find a way to put templates in templateCache (or equivalent in ng2 when packaging for distribution)
* as above but for styles (in Components)
* unify single vs double quotes (in favour of double quotes with ng2 unlike ng1 or other js frameworks).

