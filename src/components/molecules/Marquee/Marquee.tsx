import { useEffect, useRef, useState } from 'react';
import { MarqueeProps } from './Marquee.interface';
import styles from './Marquee.styles';

export default function Marquee({
  className = '',
  children,
  duration = 1000,
  pauseOnHover = false
}: MarqueeProps) {
  const [loopsCount, setLoopsCount] = useState(1);

  const childrenRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const childElements = Array.from(
      childrenRef.current[0]?.childNodes ?? []
    ) as HTMLElement[];

    const sumOffsetWidth = childElements.reduce((accumulator, child) => {
      const childStyles = getComputedStyle(child);

      return (
        accumulator +
        child.offsetWidth +
        parseInt(childStyles.marginLeft) +
        parseInt(childStyles.marginRight)
      );
    }, 0);

    const loopsCount = Math.ceil(
      (childrenRef.current[0]?.offsetWidth ?? 0) / sumOffsetWidth
    );

    setLoopsCount(loopsCount);
  }, []);

  useEffect(() => {
    if (childrenRef.current?.[1]) {
      childrenRef.current[1].style.left = `${childrenRef.current[0]?.clientWidth}px`;
    }
  }, [loopsCount]);

  return (
    <div className={styles.container(className)} role="presentation">
      <div
        className={styles.children(pauseOnHover)}
        ref={(el) => (childrenRef.current[0] = el)}
        style={{ animationDuration: `${duration}ms` }}
      >
        {Array.from({ length: loopsCount }, () => children)}
      </div>
      <div
        className={styles.children(pauseOnHover)}
        ref={(el) => (childrenRef.current[1] = el)}
        style={{ animationDuration: `${duration}ms` }}
      >
        {Array.from({ length: loopsCount }, () => children)}
      </div>
    </div>
  );
}
