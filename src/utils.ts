export const debounce = (callback: any, wait: any) => {
  let timeoutId: number | null | undefined = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(...args);
    }, wait);
  };
};
