// Partial application with arrow functions
const nonsense = (a: number, b: number, c: number, d: number, e: number) => `${a}/${b}/${c}/${d}/${e}`;
const fix2and5 = (a: number, c: number, d: number) => nonsense(a, 22, c, d, 1960);
const fixLast = (a: number, c: number) => fix2and5(a, c, 9);

// Partial application with closures
function partial(fn) {
  const partialize =
    (...args1) =>
    (...args2) => {
      for (let i = 0; i < args1.length && args2.length; i++) {
        if (args1[i] === undefined) {
          args1[i] = args2.shift();
        }
      }
      const allParams = [...args1, ...args2];
      return allParams.includes(undefined) || allParams.length < fn.length
        ? partialize(...allParams)
        : fn(...allParams);
    };
  return partialize();
}
