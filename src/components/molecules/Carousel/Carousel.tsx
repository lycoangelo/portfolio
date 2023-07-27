import { getLeftPosition } from '@app/lib/helpers/dom';
import { useGetSwipeDistance } from '@app/lib/hooks/ useGetSwipeDistance';
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import { useDebounce } from 'rooks';
import { CarouselProps } from './Carousel.interface';
import styles from './Carousel.styles';

const Carousel = forwardRef(
  ({
    activeIndex,
    className,
    children,
    childrenRef,
    navNext,
    navPrev,
    setActiveIndex
  }: CarouselProps) => {
    const [slidesGrid, setSlidesGrid] = useState<number[]>([]);

    const carouselRef = useRef<HTMLDivElement>(null);

    const slides = childrenRef.current;
    const totalSlides = slides.length;

    const handleMoveToNextSlide = useCallback(() => {
      totalSlides - 1 > activeIndex && setActiveIndex(activeIndex + 1);
    }, [activeIndex, setActiveIndex, totalSlides]);

    const handleMoveToPrevSlide = useCallback(() => {
      activeIndex > 0 && setActiveIndex(activeIndex - 1);
    }, [activeIndex, setActiveIndex]);

    const { isSwiping, swipeDistance } = useGetSwipeDistance({
      element: carouselRef.current,
      swipeLeftCallback: handleMoveToNextSlide,
      swipeRightCallback: handleMoveToPrevSlide
    });

    const updateSlidesGrid = useDebounce(() => {
      setSlidesGrid(
        slides.map((slide) => (slide ? getLeftPosition(slide) : 0))
      );
    }, 500);

    useEffect(() => {
      window.addEventListener('resize', updateSlidesGrid);

      return () => window.removeEventListener('resize', updateSlidesGrid);
    }, [updateSlidesGrid]);

    useEffect(() => {
      updateSlidesGrid();
    }, [updateSlidesGrid]);

    useEffect(() => {
      navNext?.addEventListener('click', handleMoveToNextSlide);
      navPrev?.addEventListener('click', handleMoveToPrevSlide);

      return () => {
        navNext?.removeEventListener('click', handleMoveToNextSlide);
        navPrev?.removeEventListener('click', handleMoveToPrevSlide);
      };
    }, [handleMoveToNextSlide, handleMoveToPrevSlide, navNext, navPrev]);

    return (
      <div
        className={styles.container(className)}
        ref={carouselRef}
        style={{ cursor: isSwiping ? 'grabbing' : 'grab' }}
      >
        <div
          className={styles.slider}
          style={{
            right:
              slidesGrid[activeIndex] + (isSwiping ? swipeDistance : 0) || 0,
            transitionDuration: isSwiping ? '0ms' : undefined
          }}
        >
          {children}
        </div>
      </div>
    );
  }
);

Carousel.displayName = 'Carousel';

export default Carousel;
