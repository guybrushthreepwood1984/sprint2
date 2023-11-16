export function calcFibonacciRecursive(
  n: number,
  prevValues: Array<number> = [0, 1]
): number {
  if (prevValues[n] !== undefined) {
    return prevValues[n];
  }
  let result: number;
  if (n <= 2) {
    result = 1;
  } else {
    result =
      calcFibonacciRecursive(n - 1, prevValues) +
      calcFibonacciRecursive(n - 2, prevValues);
  }
  prevValues[n] = result;
  return result;
}

export function calcFibonacciSlow(n: number) {
  let result: number;
  if (n <= 2) {
    result = 1;
  } else {
    result = calcFibonacciSlow(n - 1) + calcFibonacciSlow(n - 2);
  }
  return result;
}

console.log(calcFibonacciSlow(8));
