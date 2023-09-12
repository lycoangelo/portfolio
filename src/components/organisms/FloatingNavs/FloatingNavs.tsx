import Share from '../Share/Share';
import ThemePicker from '../ThemePicker/ThemePicker';
import styles from './FloatingNavs.styles';

export default function FloatingNavs() {
  return (
    <aside className={styles.aside}>
      <Share />
      <ThemePicker />
    </aside>
  );
}
