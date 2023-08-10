// .apply(), .call() and .bind() change the context of `this` object
// .apply(arg0, args): array of args
// .call(arg0, ...args): positional args
// .bind(arg0): returns a function with the defined context

const demethodize1 =
  <T extends (arg0: any, ...args: any[]) => any>(fn: T) =>
  (arg0: any, ...args: Parameters<T>) =>
    fn.apply(arg0, args);

const demethodize2 =
  <T extends (arg0: any, ...args: any[]) => any>(fn: T) =>
  (arg0: any, ...args: Parameters<T>): ReturnType<T> =>
    fn.call(arg0, ...args);

const demethodize3 =
  <T extends (this: any, ...args: any[]) => any>(fn: T) =>
  (thisArg: any, ...args: Parameters<T>): ReturnType<T> =>
    fn.bind(thisArg)(...args);

// Example

const string = "FUNCTIONAL";
const map = demethodize1(Array.prototype.map);
const toUpperCase = demethodize2(String.prototype.toUpperCase);
const result = map(string, toUpperCase);

const map2 = demethodize3(Array.prototype.map);
const result2 = map2(string, toUpperCase);
console.log(result2);
