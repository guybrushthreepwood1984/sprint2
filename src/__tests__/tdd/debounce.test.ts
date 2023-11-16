import { debounce } from '../../repositories/debounce';

describe(`debounce actually debounces`, () => {
  test(`debounce function delays execution`, () => {
    jest.useFakeTimers();

    const mockFn = jest.fn();
    const debouncedMockFunction = debounce(mockFn, 1000);

    debouncedMockFunction();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(500);
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
  test(`debounce does not execute during waiting period`, () => {
    jest.useFakeTimers();
    const mockFn = jest.fn();
    const debouncedMockFunction = debounce(mockFn, 1000);

    debouncedMockFunction();
    expect(mockFn).not.toHaveBeenCalled();
    debouncedMockFunction();
    expect(mockFn).not.toHaveBeenCalled();
    debouncedMockFunction();
    expect(mockFn).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1500);
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
