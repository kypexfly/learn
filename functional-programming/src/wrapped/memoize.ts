// unary / simple function
export const memoize = <T extends (x: number) => any>(fn: T): ((x: number) => ReturnType<T>) => {
  const cache = {} as Record<number, ReturnType<T>>;
  return (x) => (x in cache ? cache[x] : (cache[x] = fn(x)));
};

// if not unary, just return the function
export const memoize2 = <T extends (x: number, ...y: any[]) => any>(
  fn: T
): ((x: number, ...y: any[]) => ReturnType<T>) => {
  if (fn.length === 1) {
    const cache = {} as Record<number, ReturnType<T>>;
    return (x) => (x in cache ? cache[x] : (cache[x] = fn(x)));
  } else {
    return fn;
  }
};

// For complex memoization involving multiple parameters
export const memoize3 = <T extends (...x: any[]) => any>(fn: T): ((...x: Parameters<T>) => ReturnType<T>) => {
  const cache = {} as Record<number | string, ReturnType<T>>;
  const PRIMITIVES = ["number", "string"];
  return (...args) => {
    const strX: number | string =
      args.length === 1 && PRIMITIVES.includes(typeof args[0]) ? args[0] : JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  };
};

//  easier-to-understand code, even at the cost of some wasted CPU cycles
export const memoize4 = <T extends (...x: any[]) => any>(fn: T): ((...x: Parameters<T>) => ReturnType<T>) => {
  const cache = {} as Record<string, ReturnType<T>>;
  return (...args) => {
    const strX = JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  };
};

// Caio Gondim's How I wrote the world’s fastest JavaScript memoization library
// https://blog.risingstack.com/the-worlds-fastest-javascript-memoization-library/

// Memoize promises

export const promiseMemoize = <A, T extends (...x: any[]) => Promise<A>>(fn: T): ((...x: Parameters<T>) => Promise<A>) => {
  const cache = {} as Record<string, Promise<A>>;
  return (...args) => {
    const strX = JSON.stringify(args);
    return strX in cache
      ? cache[strX]
      : (cache[strX] = fn(...args).catch((x) => {
          delete cache[strX];
          return x;
        }));
  };
};
