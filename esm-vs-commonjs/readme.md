# Understanding ESM and CommonJS

## CommonJS

CommonJS is a module system specification that is used in Node.js.

### Importing files
```js
// Require() function
const myModule = require("./myModule");

// Destructuring assignment
const { myFunction, myVariable } = require("./myModule");
```

### Exporting files

```js
// Exports object
exports.myFunction = function() {
  console.log("Hello, world!");
};

// Module.exports
module.exports = function() {
  console.log("Hello, world!");
};
```

## ES Modules

ES Modules (ESM) is a module system specification introduced in ECMAScript 6 (ES6) that allows you to organize your code into separate files and import and export modules between them.

### Importing files

File extension i.e. `.js` is required.

```js
// Import statement
import myModule from "./myModule.js";
import { myFunction, myVariable } from "./myModule.js";

// Namespace import
import * as myModule from "./myModule.js";

// Dynamic import
const myModule = await import("./myModule.js");
```

### Exporting files

```js
// Default export
export default function myFunction() {
  console.log("Hello, world!");
}

// Named export
export function myFunction() {
  console.log("Hello, world!");
}

export const myVariable = "Hello, world!";
```

## Package.json

`type` property:

```json 
{
  // ...
  type: "commonjs" | "module"
  }
```

If no type specified, "CommonJS" is by default.

## File extensions

* `.js` -> Depends on `type` property in `package.json`. By default it's CommonJS.
* `.mjs` -> ES Modules
* `.cjs` -> CommonJS

## Notes

* Webpack, Vite, etc. make "magic" tricks to resolve file extensions without specifying.

## ECMAScript Modules in Node.js
* https://www.typescriptlang.org/docs/handbook/esm-node.html
