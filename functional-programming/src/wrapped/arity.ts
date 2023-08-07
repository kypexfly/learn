export const unary =
  <T extends (...x: any[]) => any>(fn: T): ((arg: Parameters<T>[0]) => ReturnType<T>) =>
  (x) =>
    fn(x);

export const binary =
  <T extends (...x: any[]) => any>(fn: T): ((arg1: Parameters<T>[0], arg2: Parameters<T>[1]) => ReturnType<T>) =>
  (...a: any[]) =>
    fn(a[0], a[1]);

export const ternary =
  <T extends (...x: any[]) => any>(
    fn: T
  ): ((arg1: Parameters<T>[0], arg2: Parameters<T>[1], arg3: Parameters<T>[2]) => ReturnType<T>) =>
  (...a: any[]) =>
    fn(a[0], a[1], a[2]);

export const arity =
  <T extends (...args: any[]) => any>(n: number, fn: T): ((...args: Parameters<T>) => ReturnType<T>) =>
  (...args: any[]) =>
    fn(...args.slice(0, n));

// export const unary = (fn) => arity(1, fn);
// export const binary = (fn) => arity(2, fn);
// export const ternary = (fn) => arity(3, fn);
