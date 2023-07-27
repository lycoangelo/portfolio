import Button from '@app/components/atoms/Button/Button';
import { ArrowDownIcon } from '@app/components/atoms/Icon/Icon';
import Range from '@app/components/atoms/Range/Range';
import { CarouselNavProps } from './CarouselNav.interface';
import styles from './CarouselNav.styles';

export default function CarouselNav({
  activeIndex,
  className = '',
  navNextRef,
  navPrevRef,
  setActiveIndex,
  totalIndexes
}: CarouselNavProps) {
  return navNextRef || navPrevRef ? (
    <div className={styles.container(className)}>
      {navPrevRef && (
        <Button
          className={styles.button(true)}
          color="transparent"
          disabled={activeIndex <= 0}
          ref={navPrevRef}
          size="fit"
        >
          <ArrowDownIcon className={styles.arrow} />
        </Button>
      )}

      {totalIndexes && (
        <div className={styles.range}>
          <Range
            max={totalIndexes}
            setValue={setActiveIndex}
            value={activeIndex}
          />
        </div>
      )}

      {navNextRef && (
        <Button
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
