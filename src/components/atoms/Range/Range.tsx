import { useGetSwipeDistance } from '@app/lib/hooks/useGetSwipeDistance';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'rooks';

import { RangeProps } from './Range.interface';
import styles from './Range.styles';

export default function Range({
  className = '',
  max = 10,
  min = 0,
  name,
  setValue,
  value,
  ...props
}: RangeProps) {
  const [rangeGrids, setRangeGrids] = useState<number[]>([]);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const firstRangeGrid = rangeGrids[0];
  const id = name.replaceAll(' ', '-');

  const sliderRange = wrapperWidth - thumbWidth;
  const gridsGap = firstRangeGrid - rangeGrids[1];
  const endCallbackSensitivity = gridsGap / 2;

  const thumbRef = useRef<HTMLSpanElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { isSwiping, swipeDistance } = useGetSwipeDistance({
    allowMouseLeave: true,
    element: thumbRef.current,
    endCallbackSensitivity,
    swipeLeftCallback: () => {
      if (value > 0) {
        if (gridsGap >= swipeDistance) {
          setValue(value - 1);
        } else {
          setValue(
            rangeGrids.findIndex(
              (grid) => rangeGrids[value] + swipeDistance >= grid
            )
          );
        }
      }
    },
    swipeRightCallback: () => {
      if (max > value) {
        if (gridsGap >= Math.abs(swipeDistance)) {
          setValue(value + 1);
        } else {
          const nextIndex = rangeGrids.findIndex(
            (grid) => rangeGrids[value] + swipeDistance >= grid
          );

          setValue(nextIndex !== -1 ? nextIndex : rangeGrids.length - 1);
        }
      }
    }
  });

  const updateRangeGrid = useDebounce(() => {
    setRangeGrids(
      Array.from(
        { length: max + 1 },
        (_, index) => sliderRange - (thumbWidth - thumbWidth / max) * index
      )
    );
  }, 500);

  const updateElementsWidth = useCallback(() => {
    const wrapperWidth = wrapperRef.current?.offsetWidth ?? 0;
    setThumbWidth(wrapperWidth / max);
    setWrapperWidth(wrapperWidth);
  }, [max]);

  const handleResize = useCallback(() => {
    updateElementsWidth();
    updateRangeGrid();
  }, [updateElementsWidth, updateRangeGrid]);

  useEffect(() => {
    updateElementsWidth();
  }, [updateElementsWidth]);

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize, updateRangeGrid]);

  useEffect(() => {
    updateRangeGrid();
  }, [thumbWidth, updateRangeGrid, wrapperWidth]);

  const thumbPosition =
    rangeGrids[value] + (isSwiping ? swipeDistance : 0) || 0;

  return (
    <div className={styles.wrapper(className)} ref={wrapperRef}>
      <input
        className={styles.range}
        id={id}
        max={max}
        min={min}
        onChange={(e) => setValue(parseInt(e.target.value))}
        type="range"
        value={value}
        {...props}
      />
      {
        <div className={styles.background}>
          <span
            aria-hidden
            className={styles.thumb(rangeGrids[0] > 0)}
            ref={thumbRef}
            style={{
              right:
                thumbPosition > firstRangeGrid
                  ? firstRangeGrid
                  : thumbPosition < 0
                  ? 0
                  : thumbPosition,
              transitionDuration: isSwiping ? '0ms' : undefined,
              width: thumbWidth
            }}
          />
        </div>
      }
    </div>
  );
}
