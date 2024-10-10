import { useEffect, useRef } from 'react';

/**
 *
 * @param callback - действие, которое нужно выполнять через интервал
 * @param delay - интервал в мс
 */
export const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) {
      return () => {};
    }

    const id = setInterval(() => savedCallback.current(), delay);

    return () => clearInterval(id);
  }, [delay]);
};
