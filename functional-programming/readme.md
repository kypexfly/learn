# Book: Mastering JavaScript Functional Programming, Federico Kereki
Small summary of [Mastering JavaScript Functional Programming](https://www.amazon.com/Mastering-JavaScript-Functional-Programming-maintainable-dp-1804610135/dp/1804610135/ref=dp_ob_image_bk) by Federico Kereki.

## Example from closure
[once.ts](src/wrapped/once.ts)
```ts
import { once } from "./wrapped/once";

const shout = (a: string) => console.log("shout1: ", a);

const onceShout = once(shout);

onceShout("This must show in console");
onceShout("I'm hidden from console");

const shout2 = (a: string) => console.log("shout2: ", a);
```

[onceAndAfter.ts](src/wrapped/onceAndAfter.ts)
```ts
import { onceAndAfter } from "./wrapped/onceAndAfter";

const onceAndAfterShout = onceAndAfter(shout, shout2);

onceAndAfterShout("!!!!!");
onceAndAfterShout("!!!!!");
onceAndAfterShout("!!!!!");
onceAndAfterShout("!!!!!");
```

[alternate.ts](src/wrapped/alternate.ts)
```ts
import { alternate } from "./wrapped/alternate";

const alternateShout = alternate(
  () => shout("A"),
  () => shout2("B")
);

alternateShout();
alternateShout();
alternateShout();
alternateShout();
```

## Using functions in FP ways

### 1. Injection
```ts
const colors = ["violet", "indigo", "blue", "green", "yellow", "orange", "red"];

[...colors].sort((a, b) => a.localeCompare(b));
```

### 2. Continuation-passing style
```ts
function doSomething(a, b, c, normalContinuation, errorContinuation) {
  let r = 0;
  // ... do some calculations involving a, b, and c,
  // and store the result in r
  // if an error happens, invoke:
  // errorContinuation("description of the error")
  // otherwise, invoke:
  // normalContinuation(r)
}
```

### 3. Polyfilling

This idea of defining a function on the run also allows us to write polyfills that provide otherwise missing functions.

```js
if (!String.prototype.includes) {
  String.prototype.includes = function (search, start) {
    "use strict";
    if (typeof start !== "number") {
      start = 0;
    }
    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

### 4. Stubbing

Involves replacing a function with another that does a simpler job instead of the actual work.
```ts
const DEVELOPMENT = true;
const myLog = DEVELOPMENT 
  ? (someText: string) => console.log(someText) 
  : (someText: string) => {};
```

### 5. Immediate invocation schemes

## Avoiding impure functions

### 1. Avoiding the usage of state
- Provide whatever is needed of the global state to the function as arguments
- If the function needs to update the state, it shouldn’t do it directly, but instead produce a new version of the state and return it
- It should be the caller’s responsibility to take the returned state, if any, and update the global state

### 2. Using a programming pattern, injection, to control impurities
- If a function becomes impure because it needs to call another function that is itself impure, a way around this problem is to inject the required function in the call.

## Programming declaratively

Higher-order functions (HOFs) —that is, functions that take functions as parameters, such as the following:
* `reduce()` and `reduceRight()` to apply an operation to a whole array, reducing it to a single result
* `map()` to transform one array into another by applying a function to each of its elements
* `flat()` to make a single array out of an array of arrays
* `flatMap()` to mix together mapping and flattening
* `forEach()` to simplify writing loops by abstracting the necessary looping code

We’ll also be able to perform searches and selections with the following:
* `filter()` to pick some elements from an array
* `find()` and `findIndex()` to search for elements that satisfy a condition
* A pair of predicates, `every()` and `some()`, to check an array for a Boolean test

Almost all of these HOFs can be polyfill with `reduce()`.

### Working with async functions
Methods similar to `forEach()` and the like are meant to be used with
standard, sync function calls and behave strangely with async function calls.

## Producing Functions – Higher-Order Functions

### Wrapped functions
Keep their original functionality while adding some kind of new feature.

1. Logging
```ts
export function addLogging<T extends (...args: any[]) => any>(
  fn: T,
  logger = console.log.bind(console)
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    logger(`entering ${fn.name}(${args})`);
    try {
      const valueToReturn = fn(...args);
      logger(`exiting ${fn.name}=>${valueToReturn}`);
      return valueToReturn;
    } catch (thrownError) {
      logger(`exiting ${fn.name}=>threw ${thrownError}`);
      throw thrownError;
    }
  };
}
```

2. Timing functions
* `performance.now()`
* `Date.now()`
* `console.time()` and `console.timeEnd`
```ts
const myGet = (): number => performance.now();

const myPut = (text: string, name: string, tStart: number, tEnd: number): void => console.log(`${name} - ${text} ${tEnd - tStart} ms`);

function addTiming<T extends (...args: any[]) => any>(
  fn: T,
  { getTime, output } = {
    getTime: myGet,
    output: myPut,
  }
): (...args: Parameters<T>) => ReturnType<T> {
  return (...args: Parameters<T>): ReturnType<T> => {
    const tStart = getTime();
    try {
      const valueToReturn = fn(...args);
      output("normal exit", fn.name, tStart, getTime());
      return valueToReturn;
    } catch (thrownError) {
      output("exception!!", fn.name, tStart, getTime());
      throw thrownError;
    }
  };
}
```

3. Memoizing functions

Refer to [memoize.ts](/src/wrapped/memoize.ts)

### Altered functions
Differ in some key points from their original versions, like `once()`, `not()` or `invert()`; arity-related conversions, which produce a new function with a fixed number of parameters; and throttling and debouncing functions for performance.

Refer to [`/altered`](/src/altered/)

### Other productions
Provide new operations, turn functions into promises, allow enhanced search functions, decouple methods from objects, transform them into plain functions, and go the other way around, converting functions into methods.

## Transforming Functions

A sort of factory method that lets you produce new versions of any given function.

### 1. Currying
Currying is transforming an m-ary function (that is, a function of arity m) into a sequence of m unary functions, each receiving one argument of the original function, from left to right

### 2. Partial application
Another time-honored FP transformation, which produces new versions of functions by fixing some of their arguments

### 3. Partial currying
Can be seen as a mixture of the two previous transformations

## Connecting functions

Create sequences of function calls and how to combine them to produce a more complex result out of several simpler components.

### 1. Pipelining
A way to join functions, similar to Unix/Linux pipes

### 2. Chaining
A variant of pipelining, but restricted to objects

### 3. Composing
A classic operation with its origins in basic computer theory

### 4. Transducing
An optimized way to compose map, filter, or reduce operations