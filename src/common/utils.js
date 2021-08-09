export function throttle(func, delay) {
  let status = true;
  return function(...args) {
    if (!status) return false;
    status = false;
    setTimeout(() => {
      func.apply(this, args);
      status = true;
    }, delay);
  };
}
