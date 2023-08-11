type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;
export const compose: Compose = (f, g) => (x) => f(g(x));

export const pipe = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduce((prevFn, nextFn) => (value) => nextFn(prevFn(value)), fn1);

export const compose2 = <T>(fn1: (a: T) => T, ...fns: Array<(a: T) => T>) =>
  fns.reduce((prevFn, nextFn) => (value) => prevFn(nextFn(value)), fn1);

// Example
const toUpperCase = (x: string) => x.toUpperCase();
const splitByDash = (x: string) => x.split("-").join("");
console.log(compose2(toUpperCase, splitByDash)("h-o-l-a"));
