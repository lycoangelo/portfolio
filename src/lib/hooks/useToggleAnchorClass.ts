import { useInView } from "framer-motion";
import { useEffect, useRef } from "react";

const useToggleClassInView = (id: string, className: string) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: "-50% 0px" });

  useEffect(() => {
    const personalDetailsElement = document.querySelector(
      `[data-target="${id}"]`
    );

    if (personalDetailsElement) {
      personalDetailsElement.classList.toggle(className, isInView);
    }

    return () => {
      if (personalDetailsElement) {
        personalDetailsElement.classList.remove(className);
      }
    };
  }, [isInView, id, className]);

  return ref;
};

export default useToggleClassInView;
