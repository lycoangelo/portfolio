import { useEffect, useRef, useState } from 'react';
import { MarqueeProps } from './Marquee.interface';
import styles from './Marquee.styles';

export default function Marquee({
  className = '',
  children,
  duration = 1000
}: MarqueeProps) {
  const [loopsCount, setLoopsCount] = useState(1);

  const childrenRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const childElements = Array.from(
      childrenRef.current?.childNodes || []
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
      (childrenRef.current?.offsetWidth || 0) / sumOffsetWidth
    );

    setLoopsCount(loopsCount);
  }, []);

  return (
    <div className={styles.container(className)} role="presentation">
      <div
        className={styles.children}
        ref={childrenRef}
        style={{ animationDuration: `${duration}ms` }}
      >
        {Array.from({ length: loopsCount }, () => children)}
      </div>
      <div
        className={styles.children}
        ref={childrenRef}
        style={{ animationDuration: `${duration}ms` }}
      >
        {Array.from({ length: loopsCount }, () => children)}
      </div>
    </div>
  );
}
