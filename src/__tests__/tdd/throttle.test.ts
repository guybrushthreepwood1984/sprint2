import { throttle } from '../../repositories/throttle';

describe(`throttle slows down calls`, () => {
  jest.useFakeTimers();

  let mockFn = jest.fn();
  let throttledFn = throttle(mockFn, 100);

  beforeEach(() => {
    mockFn = jest.fn();
    throttledFn = throttle(mockFn, 100);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test(`should call the original function immediately`, () => {
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test(`should not call the original function again within the delay period`, () => {
    throttledFn();
    throttledFn();
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  test(`calls original function again after the delay period`, () => {
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(1);

    jest.advanceTimersByTime(200);
    throttledFn();
    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
