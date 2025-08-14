import { useEffect, useRef } from "react";

const useClickOutside = (
  callback: () => void,
  targetRefs: React.RefObject<HTMLElement | null>[]
) => {
  const callbackRef = useRef(callback);

  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        targetRefs.every((ref) => !ref.current?.contains(event.target as Node))
      ) {
        callbackRef.current();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [targetRefs]);
};

export default useClickOutside;
