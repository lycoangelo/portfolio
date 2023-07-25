import { useGetSwipeDistance } from '@app/lib/hooks/ useGetSwipeDistance';
import { useCallback, useEffect, useRef, useState } from 'react';
import { RangeProps } from './Range.interface';
import styles from './Range.styles';

export default function Range({
  max = 10,
  min = 0,
  setValue,
  value
}: RangeProps) {
  // TODO: Create an array of position from the max and background width value
  const [thumbLastPos, setThumbLastPos] = useState(0);
  const [thumbLeftPos, setThumbLeftPos] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const sliderRange = wrapperWidth - thumbWidth;

  const thumbRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getSliderRangeNextPos = useCallback(
    (position: number) =>
      Math.round(
        position <= 0 ? 0 : position >= sliderRange ? sliderRange : position
      ),
    [sliderRange]
  );

  const { isSwiping, swipeDistance } = useGetSwipeDistance({
    allowMouseLeave: true,
    element: thumbRef.current,
    swipeMoveCallback: () => {
      setThumbLeftPos(getSliderRangeNextPos(thumbLastPos - swipeDistance));
    },
    swipeEndCallback: (_e: MouseEvent) => {
      setThumbLastPos(thumbLeftPos);
      setValue(getSliderRangeNextPos(thumbLeftPos / thumbWidth));
    }
  });

  const getWrapperWidth = useCallback(() => {
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
    setWrapperWidth(wrapperWidth);

    return wrapperWidth;
  }, []);

  useEffect(() => {
    window.addEventListener('resize', getWrapperWidth);

    return () => window.removeEventListener('resize', getWrapperWidth);
  }, [getWrapperWidth]);

  useEffect(() => {
    const wrapperWidth = getWrapperWidth();
    setThumbWidth(wrapperWidth / max);
  }, [max, getWrapperWidth]);

  useEffect(() => {
    setThumbLeftPos(getSliderRangeNextPos(thumbWidth * value));
    setThumbLastPos(getSliderRangeNextPos(thumbWidth * value));
  }, [getSliderRangeNextPos, thumbWidth, value]);

  return (
    <div className={styles.wrapper} ref={wrapperRef}>
      <input
        className={styles.range}
        max={max}
        min={min}
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="range"
        value={value}
      />
      <div className={styles.background}>
        <span
          aria-hidden
          className={styles.thumb}
          ref={thumbRef}
          style={{
            left: isSwiping
              ? thumbLeftPos
              : getSliderRangeNextPos(thumbWidth * value),
            transitionDuration: isSwiping ? '0ms' : undefined,
            width: thumbWidth
          }}
        />
      </div>
    </div>
  );
}
