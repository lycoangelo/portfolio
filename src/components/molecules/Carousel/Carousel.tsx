import { getElementPosition } from '@app/lib/helpers/dom';
import { useGetSwipeDistance } from '@app/lib/hooks/useGetSwipeDistance';
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { CarouselProps } from './Carousel.interface';
import styles from './Carousel.styles';

const Carousel: FC<CarouselProps> = ({
  activeIndex,
  className,
  children,
  childrenRef,
  navNext,
  navPrev,
  setActiveIndex
}) => {
  const [slidesGrid, setSlidesGrid] = useState<number[]>([]);

  const carouselRef = useRef<HTMLDivElement>(null);

  const totalSlides = childrenRef.current.length;

  const handleMoveToNextSlide = useCallback(() => {
    if (totalSlides - 1 > activeIndex) {
      setActiveIndex(activeIndex + 1);
    }
  }, [activeIndex, setActiveIndex, totalSlides]);

  const handleMoveToPrevSlide = useCallback(() => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  }, [activeIndex, setActiveIndex]);

  const { isSwiping, swipeDistance } = useGetSwipeDistance({
    element: carouselRef.current,
    swipeLeftCallback: handleMoveToNextSlide,
    swipeRightCallback: handleMoveToPrevSlide
  });

  const updateSlidesGrid = useCallback(() => {
    const firstSlideLeft = getElementPosition(childrenRef.current[0]).left;

    setSlidesGrid(
      childrenRef.current.map((slide) =>
        slide ? getElementPosition(slide).left - firstSlideLeft : 0
      )
    );
  }, [childrenRef]);

  useEffect(() => {
    window.addEventListener('resize', updateSlidesGrid);

    return () => {
      window.removeEventListener('resize', updateSlidesGrid);
    };
  }, [updateSlidesGrid]);

  useEffect(() => {
    updateSlidesGrid();
  }, [updateSlidesGrid]);

  useEffect(() => {
    if (navNext) {
      navNext.addEventListener('click', handleMoveToNextSlide);

      return () => {
        navNext.removeEventListener('click', handleMoveToNextSlide);
      };
    }
  }, [handleMoveToNextSlide, navNext]);

  useEffect(() => {
    if (navPrev) {
      navPrev.addEventListener('click', handleMoveToPrevSlide);

      return () => {
        navPrev.removeEventListener('click', handleMoveToPrevSlide);
      };
    }
  }, [handleMoveToPrevSlide, navPrev]);

  return (
    <div
      className={styles.container(className)}
      ref={carouselRef}
      style={{ cursor: isSwiping ? 'grabbing' : 'grab' }}
    >
      <div
        className={styles.slider}
        style={{
          right: slidesGrid[activeIndex] + (isSwiping ? swipeDistance : 0) || 0,
          transitionDuration: isSwiping ? '0ms' : undefined
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Carousel;
