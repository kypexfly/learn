export const onceAndAfter = <T extends (...args: any[]) => any>(fn1: T, fn2: T) => {
  let done = false;
  return ((...args: Parameters<T>) => {
    if (!done) {
      done = true;
      return fn1(...args);
    } else {
      return fn2(...args);
    }
  }) as T;
};