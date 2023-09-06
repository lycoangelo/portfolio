import { useCallback, useLayoutEffect, useState } from 'react';

import { getEventPosition } from '../helpers/dom';

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
      setStartSwipePos(getEventPosition(e).x);
      swipeStartCallback?.(e);
    },
    [swipeStartCallback]
  );

  const swipeMoveEvent = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (isSwiping) {
        setSwipeDistance(startSwipePos - getEventPosition(e).x);
        swipeMoveCallback?.(e);
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
        setIsSwiping(false);
        swipeEndCallback?.(e);
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

  useLayoutEffect(() => {
    if (!element) return;

    element.addEventListener('mousedown', swipeStartEvent, { passive: true });
    element.addEventListener('touchstart', swipeStartEvent, { passive: true });

    if (allowMouseLeave) {
      document.addEventListener('mousemove', swipeMoveEvent, { passive: true });
      document.addEventListener('mouseup', swipeEndEvent, { passive: true });
      document.addEventListener('touchmove', swipeMoveEvent, { passive: true });
      document.addEventListener('touchend', swipeEndEvent, { passive: true });
    } else {
      element.addEventListener('mousemove', swipeMoveEvent, { passive: true });
      element.addEventListener('mouseup', swipeEndEvent, { passive: true });
      element.addEventListener('touchmove', swipeMoveEvent, { passive: true });
      element.addEventListener('touchend', swipeEndEvent, { passive: true });
    }

    return () => {
      if (!element) return;

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
