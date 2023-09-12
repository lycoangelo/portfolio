'use client';

import { useIsMounted } from '@app/lib/hooks/useIsMounted';

import Share from '../Share/Share';
import ThemePicker from '../ThemePicker/ThemePicker';
import styles from './FloatingNavs.styles';

export default function FloatingNavs() {
  const isMounted = useIsMounted();

  return isMounted ? (
    <aside className={styles.aside}>
      <Share className={styles.share} isVertical />
      <ThemePicker />
    </aside>
  ) : null;
}
