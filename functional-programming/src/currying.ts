type Curry<P, R> = P extends [infer H]
  ? (arg: H) => R // only 1 arg
  : P extends [infer H, ...infer T] // 2 or more args
  ? (arg: H) => Curry<[...T], R>
  : never;

export function curry<A extends any[], R>(fn: (...args: A) => R): Curry<A, R>;

export function curry(fn: (...args: any) => any) {
  return fn.length === 0 ? fn() : (x: any) => curry(fn.bind(null, x));
}

const make3 = (a: string, b: number, c: string): string => `${a}:${b}:${c}`;

const make3curried = (a: string) => (b: number) => (c: string) => `${a}:${b}:${c}`;

const make3curried2 = function (a: string) {
  return function (b: number) {
    return function (c: string) {
      return `${a}:${b}:${c}`;
    };
  };
};
