export const once = <T extends (...args: any[]) => any>(fn: T) => {
  let done = false;
  return ((...args: Parameters<T>) => {
    if (!done) {
      done = true;
      return fn(...args);
    }
  }) as T;
};

//  functions are first-order objects
export function once2<T extends (...args: any[]) => any>(f: T): (...args: Parameters<T>) => ReturnType<T> {
  let done = false;
  let result: ReturnType<T>;
  return ((...args: Parameters<T>): ReturnType<T> => {
    if (!done) {
      done = true;
      result = f(...args);
    }
    return result;
  }) as T;
}
