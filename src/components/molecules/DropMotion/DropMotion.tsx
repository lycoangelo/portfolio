'use client';

import styles from './DropMotion.styles';

export default function DropMotion() {
  return (
    <div className={styles.lines}>
      {Array.from({ length: 10 }, (_, index) => (
        <div className={styles.line(index)} key={index} />
      ))}
    </div>
  );
}
