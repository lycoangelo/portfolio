import { useCallback, useEffect, useState } from 'react';

interface Props {
  element: HTMLElement | null;
  endCallbackSensitivity?: number;
  swipeEndCallback?: (_e: MouseEvent) => void;
  swipeLeftCallback?: (_e: MouseEvent) => void;
  swipeMoveCallback?: (_e: MouseEvent) => void;
  swipeRightCallback?: (_e: MouseEvent) => void;
  swipeStartCallback?: (_e: MouseEvent) => void;
}

/**
 * Determines whether a URL is an external or internal link.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - true if the URL is an external link, false if it is an internal link.
 */
export const useGetSwipeDistance = ({
  element,
  endCallbackSensitivity = 50,
  swipeEndCallback,
  swipeLeftCallback,
  swipeMoveCallback,
  swipeRightCallback,
  swipeStartCallback
}: Props) => {
  const [swipeDistance, setSwipeDistance] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  const [startSwipePos, setStartSwipePos] = useState(0);

  const swipeStartEvent = useCallback(
    (e: MouseEvent) => {
      setIsSwiping(true);
      setStartSwipePos(e.pageX);
      swipeStartCallback && swipeStartCallback(e);
    },
    [swipeStartCallback]
  );

  const swipeMoveEvent = useCallback(
    (e: MouseEvent) => {
      if (isSwiping) {
        setSwipeDistance(startSwipePos - e.pageX);
        swipeMoveCallback && swipeMoveCallback(e);
      }
    },
    [isSwiping, startSwipePos, swipeMoveCallback]
  );

  const swipeEndEvent = useCallback(
    (e: MouseEvent) => {
      setIsSwiping(false);
      if (swipeDistance > endCallbackSensitivity && swipeLeftCallback)
        swipeLeftCallback(e);
      if (swipeDistance < -endCallbackSensitivity && swipeRightCallback)
        swipeRightCallback(e);
      setSwipeDistance(0);
      swipeEndCallback && swipeEndCallback(e);
    },
    [
      endCallbackSensitivity,
      swipeDistance,
      swipeEndCallback,
      swipeLeftCallback,
      swipeRightCallback
    ]
  );

  useEffect(() => {
    if (!element) return;

    element.addEventListener('mousedown', swipeStartEvent);
    document.addEventListener('mousemove', swipeMoveEvent);
    document.addEventListener('mouseup', swipeEndEvent);

    return () => {
      element.removeEventListener('mousedown', swipeStartEvent);
      document.removeEventListener('mousemove', swipeMoveEvent);
      document.removeEventListener('mouseup', swipeEndEvent);
    };
  }, [element, swipeEndEvent, swipeMoveEvent, swipeStartEvent]);

  return { isSwiping, swipeDistance };
};
