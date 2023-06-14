import { useRef, useCallback } from "react";
import type { MutableRefObject } from "react";

type Timeout = ReturnType<typeof setTimeout>;

export type UseDebounceProps<T> = {
  onChange(value: T): void,
  onApply(value: T): void,
  delay: number,
}

const useDebounce = <V,>({ onChange, onApply, delay }: UseDebounceProps<V>) => {
  const debounce = useRef<Timeout | null>(null);

  const clearDebounce = useCallback(
    (debounceRef: MutableRefObject<Timeout | null>) => {
      if (typeof debounceRef.current === 'number') {
        clearTimeout(debounceRef.current);
      }
      debounce.current = null;
    },
    []
  );

  return (value: V) => {
    onChange(value);

    if (debounce.current) {
      clearDebounce(debounce);
    }

    debounce.current = setTimeout(() => {
      onApply(value);
      clearDebounce(debounce);
    }, delay);
  }
}

export { useDebounce };
