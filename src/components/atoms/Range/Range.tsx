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
  const [thumbLastPos, setThumbLastPos] = useState(0);
  const [thumbLeftPos, setThumbLeftPos] = useState(0);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const sliderRange = wrapperWidth - thumbWidth;

  const thumbRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const getSliderRangeNextPos = useCallback(
    (position: number) =>
      position <= 0 ? 0 : position >= sliderRange ? sliderRange : position,
    [sliderRange]
  );

  const { isSwiping, swipeDistance } = useGetSwipeDistance({
    element: thumbRef.current,
    swipeMoveCallback: () => {
      setThumbLeftPos(getSliderRangeNextPos(thumbLastPos - swipeDistance));
    },
    swipeEndCallback: (_e: MouseEvent) => {
      setThumbLastPos(thumbLeftPos);
      setValue(Math.floor((thumbLeftPos / sliderRange) * max));
    }
  });

  useEffect(() => {
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
    setThumbWidth(wrapperWidth / max);
    setWrapperWidth(wrapperWidth);
  }, [max]);

  useEffect(() => {
    setThumbLeftPos(getSliderRangeNextPos(thumbWidth * value));
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
