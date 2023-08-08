export const alternate = <T extends (...args: any[]) => any>(fn1: T, fn2: T) => {
  let state = false;
  return ((...args: Parameters<T>) => {
    if (!state) {
      state = !state;
      return fn1(...args);
    } else {
      state = !state;
      return fn2(...args);
    }
  }) as T;
};