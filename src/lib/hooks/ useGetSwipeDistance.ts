import { useCallback, useEffect, useState } from 'react';
import { getPageX } from '../helpers/dom';

interface Props {
  allowMouseLeave?: boolean;
  element: HTMLElement | null;
  endCallbackSensitivity?: number;
  swipeEndCallback?: (_e: MouseEvent | TouchEvent) => void;
  swipeLeftCallback?: (_e: MouseEvent | TouchEvent) => void;
  swipeMoveCallback?: (_e: MouseEvent | TouchEvent) => void;
  swipeRightCallback?: (_e: MouseEvent | TouchEvent) => void;
  swipeStartCallback?: (_e: MouseEvent | TouchEvent) => void;
}

/**
 * Determines whether a URL is an external or internal link.
 *
 * @param {string} url - The URL to check.
 * @returns {boolean} - true if the URL is an external link, false if it is an internal link.
 */
export const useGetSwipeDistance = ({
  allowMouseLeave,
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
    (e: MouseEvent | TouchEvent) => {
      setIsSwiping(true);
      setStartSwipePos(getPageX(e));
      swipeStartCallback && swipeStartCallback(e);
    },
    [swipeStartCallback]
  );

  const swipeMoveEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isSwiping) {
        setSwipeDistance(startSwipePos - getPageX(e));
        swipeMoveCallback && swipeMoveCallback(e);
      }
    },
    [isSwiping, startSwipePos, swipeMoveCallback]
  );

  const swipeEndEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isSwiping) {
        if (swipeDistance > endCallbackSensitivity && swipeLeftCallback) {
          swipeLeftCallback(e);
        }

        if (swipeDistance < -endCallbackSensitivity && swipeRightCallback) {
          swipeRightCallback(e);
        }

        setSwipeDistance(0);
        swipeEndCallback && swipeEndCallback(e);
        setIsSwiping(false);
      }
    },
    [
      endCallbackSensitivity,
      isSwiping,
      swipeDistance,
      swipeEndCallback,
      swipeLeftCallback,
      swipeRightCallback
    ]
  );

  useEffect(() => {
    if (!element) return;

    element.addEventListener('mousedown', swipeStartEvent);
    element.addEventListener('touchstart', swipeStartEvent);

    if (allowMouseLeave) {
      document.addEventListener('mousemove', swipeMoveEvent);
      document.addEventListener('mouseup', swipeEndEvent);
      document.addEventListener('touchmove', swipeMoveEvent);
      document.addEventListener('touchend', swipeEndEvent);
    } else {
      element.addEventListener('mousemove', swipeMoveEvent);
      element.addEventListener('mouseup', swipeEndEvent);
      element.addEventListener('touchmove', swipeMoveEvent);
      element.addEventListener('touchend', swipeEndEvent);
    }

    return () => {
      element.removeEventListener('mousedown', swipeStartEvent);
      element.removeEventListener('touchstart', swipeStartEvent);

      if (allowMouseLeave) {
        document.removeEventListener('mousemove', swipeMoveEvent);
        document.removeEventListener('mouseup', swipeEndEvent);
        document.removeEventListener('touchmove', swipeMoveEvent);
        document.removeEventListener('touchend', swipeEndEvent);
      } else {
        element.removeEventListener('mousemove', swipeMoveEvent);
        element.removeEventListener('mouseup', swipeEndEvent);
        element.removeEventListener('touchmove', swipeMoveEvent);
        element.removeEventListener('touchend', swipeEndEvent);
      }
    };
  }, [
    allowMouseLeave,
    element,
    swipeEndEvent,
    swipeMoveEvent,
    swipeStartEvent
  ]);

  return { isSwiping, swipeDistance };
};
