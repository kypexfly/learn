export const once = <T extends (...args: any[]) => any>(fn: T) => {
  let done = false;
  return ((...args: Parameters<T>) => {
    if (!done) {
      done = true;
      return fn(...args);
    }
  }) as T;
};