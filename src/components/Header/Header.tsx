import Link from 'next/link';
import styles from './Header.styles';

export default async function Header() {
  return (
    <header className={styles.header}>
      <Link className={styles.branding} href="/" title="Go to Homepage">
        <b>L</b>A
      </Link>
    </header>
  );
}
