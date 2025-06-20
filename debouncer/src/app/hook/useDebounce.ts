import { useCallback, useEffect } from "react";

const debounce = (func, wait = 2000) => {
  let timeout; // for the setTimeout function and so it can be cleared
  function executedFunction(...args) {
    // the function returned from debounce
    const later = () => {
      // this is the delayed function
      clearTimeout(timeout); // clears the timeout when the function is called
      func(...args); // calls the function
      console.log("----->>>>> executedFunction mit delay ausgeführt");
    };
    clearTimeout(timeout); // this clears the timeout each time the function is run again preventing later from running until we stop calling the function
    timeout = setTimeout(later, wait); // this sets the time out to run after the wait period
  }

  executedFunction.cancel = function () {
    // so can be cancelled
    clearTimeout(timeout); // clears the timeout
  };
  return executedFunction;
};

export default function useDebounce(callback, delay = 1000, deps = []) {
  // debounce the callback
  const debouncedCallback = useCallback(debounce(callback, delay), [
    delay,
    ...deps,
  ]); // with the delay
  // clean up on unmount or dependency change
  useEffect(() => {
    return () => {
      debouncedCallback.cancel(); // cancel any pending calls
    };
  }, [delay, ...deps]);
  // return the debounce function so we can use it
  return debouncedCallback;
}
