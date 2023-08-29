import { useEffect, useRef } from 'react';
import { useInView } from 'framer-motion';

const useToggleClassInView = (id: string) => {
  const ref = useRef<HTMLElement>(null);
  const isInView = useInView(ref, { margin: '-50% 0px' });

  useEffect(() => {
    const personalDetailsElement = document.querySelector(
      `[data-target="${id}"]`
    );

    if (personalDetailsElement) {
      personalDetailsElement.classList.toggle('text-white', isInView);
    }

    return () => {
      if (personalDetailsElement) {
        personalDetailsElement.classList.remove('text-white');
      }
    };
  }, [isInView, id]);

  return ref;
};

export default useToggleClassInView;
