import { useGetSwipeDistance } from '@app/lib/hooks/useGetSwipeDistance';
import va from '@vercel/analytics';
import {
  ChangeEventHandler,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react';
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
        let newValue = value;

        if (gridsGap >= swipeDistance) {
          newValue = value - 1;
        } else {
          newValue = rangeGrids.findIndex(
            (grid) => rangeGrids[value] + swipeDistance >= grid
          );
        }

        setValue(newValue);
        va.track(`Clicked "${name}" range to slide ${newValue + 1}`);
      }
    },
    swipeRightCallback: () => {
      if (max > value) {
        let newValue = value;

        if (gridsGap >= Math.abs(swipeDistance)) {
          newValue = value + 1;
        } else {
          const nextIndex = rangeGrids.findIndex(
            (grid) => rangeGrids[value] + swipeDistance >= grid
          );

          newValue = nextIndex !== -1 ? nextIndex : rangeGrids.length - 1;
        }

        setValue(newValue);
        va.track(`Clicked "${name}" range to slide ${newValue + 1}`);
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

  const handleValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setValue(parseInt(e.target.value));
    va.track(`Clicked "${name}" range to slide ${value}`);
  };

  const thumbPosition =
    rangeGrids[value] + (isSwiping ? swipeDistance : 0) || 0;

  return (
    <div className={styles.wrapper(className)} ref={wrapperRef}>
      <input
        className={styles.range}
        id={id}
        max={max}
        min={min}
        onChange={handleValueChange}
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
