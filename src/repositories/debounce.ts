export function debounce(cb: (...args: unknown[]) => void, delay: number) {
  let timer: number | NodeJS.Timeout;

  return function (...args: unknown[]) {
    clearTimeout(timer);
    timer = setTimeout(() => cb(...args), delay);
  };
}
