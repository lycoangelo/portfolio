import { useGetSwipeDistance } from '@app/lib/hooks/ useGetSwipeDistance';
import { useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'rooks';
import { RangeProps } from './Range.interface';
import styles from './Range.styles';

export default function Range({
  max = 10,
  min = 0,
  setValue,
  value
}: RangeProps) {
  const [rangeGrid, setRangeGrid] = useState<number[]>([]);
  const [thumbWidth, setThumbWidth] = useState(0);
  const [wrapperWidth, setWrapperWidth] = useState(0);

  const firstRangeGrid = rangeGrid[0];

  const sliderRange = wrapperWidth - thumbWidth;
  const gridsGap = firstRangeGrid - rangeGrid[1];
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
            rangeGrid.findIndex(
              (grid) => rangeGrid[value] + swipeDistance >= grid
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
          const nextIndex = rangeGrid.findIndex(
            (grid) => rangeGrid[value] + swipeDistance >= grid
          );

          setValue(nextIndex !== -1 ? nextIndex : rangeGrid.length - 1);
        }
      }
    }
  });

  const updateRangeGrid = useDebounce(() => {
    setRangeGrid(
      Array.from(
        { length: max + 1 },
        (_, index) => sliderRange - (thumbWidth - thumbWidth / max) * index
      )
    );
  }, 500);

  const updateElementsWidth = useCallback(() => {
    const wrapperWidth = wrapperRef.current?.offsetWidth || 0;
    setThumbWidth(wrapperWidth / max);
    setWrapperWidth(wrapperRef.current?.offsetWidth || 0);
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
  }, [updateRangeGrid]);

  const thumbPosition = rangeGrid[value] + (isSwiping ? swipeDistance : 0) || 0;

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
      {
        <div className={styles.background}>
          <span
            aria-hidden
            className={styles.thumb}
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
