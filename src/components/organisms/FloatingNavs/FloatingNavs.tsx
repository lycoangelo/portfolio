'use client';

import { useIsMounted } from '@app/lib/hooks/useIsMounted';
import { motion } from 'framer-motion';
import { CookiesProvider } from 'react-cookie';
import Share from '../Share/Share';
import ThemePicker from '../ThemePicker/ThemePicker';
import styles from './FloatingNavs.styles';

export default function FloatingNavs() {
  const isMounted = useIsMounted();

  return isMounted ? (
    <CookiesProvider>
      <motion.aside
        className={styles.aside}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Share className={styles.share} isVertical />
        <ThemePicker />
      </motion.aside>
    </CookiesProvider>
  ) : null;
}
