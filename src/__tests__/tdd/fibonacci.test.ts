import {
  calcFibonacciRecursive,
  calcFibonacciSlow
} from '../../repositories/fibonacci';

describe(`Recursive function works properly`, () => {
  test(`result is a number`, () => {
    expect(typeof calcFibonacciRecursive(8)).toBe('number');
  });

  test(`result is correct`, () => {
    expect(calcFibonacciRecursive(8)).toBe(21);
  });

  test(`result is correct`, () => {
    expect(calcFibonacciRecursive(12)).toBe(144);
  });

  test(`memoization works correctly`, () => {
    const t1: number = performance.now();
    const result1: number = calcFibonacciRecursive(40);
    const t2: number = performance.now();

    const t3: number = performance.now();
    const result2: number = calcFibonacciRecursive(40);
    const t4: number = performance.now();

    expect(result1).toBe(result2);

    expect(t4 - t3).toBeLessThan(t2 - t1);
  });
});

describe(`normal function works properly`, () => {
  test(`result is correct`, () => {
    expect(calcFibonacciSlow(8)).toBe(21);
  });

  test(`result is correct`, () => {
    expect(calcFibonacciSlow(12)).toBe(144);
  });
});

test(`recursive function is quicker than normal function on repeated calls`, () => {
  //  first call, both should be similar, no difference if function is memoized or not
  const result1: number = calcFibonacciRecursive(40);
  const resultSlow1: number = calcFibonacciSlow(40);

  //  second call, recursive function should be faster
  const timerRecursive1: number = performance.now();
  const result2: number = calcFibonacciRecursive(40);
  const timerRecursive2: number = performance.now();

  const timerSlow1: number = performance.now();
  const resultSlow2: number = calcFibonacciSlow(40);
  const timerSlow2: number = performance.now();

  expect(result1).toBe(result2);
  expect(resultSlow1).toBe(resultSlow2);

  expect(timerRecursive2 - timerRecursive1).toBeLessThan(
    timerSlow2 - timerSlow1
  );
});
