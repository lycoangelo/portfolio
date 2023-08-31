import Button from '@app/components/atoms/Button/Button';
import { ArrowDownIcon } from '@app/components/atoms/Icon/Icon';
import Range from '@app/components/atoms/Range/Range';
import { CarouselNavProps } from './CarouselNav.interface';
import styles from './CarouselNav.styles';

export default function CarouselNav({
  activeIndex,
  className = '',
  name,
  navNextRef,
  navPrevRef,
  setActiveIndex,
  totalIndexes
}: CarouselNavProps) {
  return navNextRef || navPrevRef ? (
    <div className={styles.container(className)}>
      {navPrevRef && (
        <Button
          aria-label="Go to Previous Slide"
          className={styles.button(true)}
          color="transparent"
          disabled={activeIndex <= 0}
          ref={navPrevRef}
          size="fit"
        >
          <ArrowDownIcon className={styles.arrow} />
        </Button>
      )}

      {totalIndexes > 0 && (
        <div className={styles.range}>
          <Range
            aria-label="test"
            name={name}
            max={totalIndexes}
            setValue={setActiveIndex}
            value={activeIndex}
          />
        </div>
      )}

      {navNextRef && (
        <Button
          aria-label="Go to Next Slide"
          className={styles.button(false)}
          color="transparent"
          disabled={activeIndex >= totalIndexes}
          ref={navNextRef}
          size="fit"
        >
          <ArrowDownIcon className={styles.arrow} />
        </Button>
      )}
    </div>
  ) : null;
}
