// 1. INTRODUCTION

// type Increment = (a: number) => number;
// const increment: Increment = (a: number) => a + 1;

// type ToString = (a: number) => string;
// const _toString: ToString = (a: number) => `${a}`;

// // Not FP way
// const a = 1;
// const b = increment(a);
// const c = _toString(b);

// // FP way
// type IncrementThenToString = (a: number) => string;
// const increment_then_toString_V1: IncrementThenToString = (x: number) => _toString(increment(x));

// increment • _toString = string
type Compose = <A, B, C>(f: (x: B) => C, g: (x: A) => B) => (x: A) => C;
const compose: Compose = (f, g) => (x) => f(g(x));
// const increment_then_toString_V2: IncrementThenToString = (a) => compose(_toString, increment)(a);

// const test_1 = increment_then_toString_V1(1);
// const test_2 = increment_then_toString_V2(1);

// 2. HANDLE ERRORS... A | None

// type A =
//   | {
//       a: string;
//     }
//   | {
//       b: string;
//     };

// const test3: A = {
//   a: "",
//   b: "",
// };

// if ("a" in test3) {
//   test3.b;
// }

type Option<A> = Some<A> | None;
type Some<A> = {
  readonly _tag: "Some";
  readonly value: A;
};
type None = {
  readonly _tag: "None";
};

const some = <A>(a: A): Option<A> => ({
  _tag: "Some",
  value: a,
});

const none: Option<never> = {
  _tag: "None",
};

const isNone = <A>(x: Option<A>): x is None => x._tag === "None";

const divideByTwo = (x: number) => (x === 0 ? none : some(x / 2));
const increment = (x: number) => x + 1;

const composedWithNone = compose((x) => (isNone(x) ? none : some(increment(x.value))), divideByTwo);

const result1 = composedWithNone(0);
const result2 = composedWithNone(1);

// 3. A | B

type Either<E, A> = Left<E> | Right<A>;

interface Left<E> {
  readonly _tag: "Left";
  readonly left: E;
}

interface Right<A> {
  readonly _tag: "Right";
  readonly right: A;
}

const isLeft = <E, A = never>(x: Either<E, A>): x is Left<E> => x._tag === "Left";

const left = <E, A = never>(e: E): Either<E, A> => ({
  _tag: "Left",
  left: e,
});

const right = <A, E = never>(a: A): Either<E, A> => ({
  _tag: "Right",
  right: a,
});

const divideByTwoIfEven = (x: number): Either<string, number> => {
  if (x === 0) {
    return left("Cannot divide by Zero");
  } else if (x % 2 !== 0) {
    return left("Number is not EVEN");
  } else {
    return right(2 / x);
  }
};

const composeWithEither = compose((x) => (isLeft(x) ? x : right(increment(x.right))), divideByTwoIfEven);

const composeWithEitherResult = composeWithEither(0);
const composeWithEitherResult2 = composeWithEither(2);
