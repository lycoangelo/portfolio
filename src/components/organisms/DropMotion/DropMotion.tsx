'use client';

import { useIsMounted } from '@app/lib/hooks/useIsMounted';
import styles from './DropMotion.styles';

export default function DropMotion() {
  const isMounted = useIsMounted();

  return isMounted ? (
    <div className={styles.lines}>
      {Array.from({ length: 10 }, (_, index) => (
        <div className={styles.line(index)} key={index} />
      ))}
    </div>
  ) : null;
}
