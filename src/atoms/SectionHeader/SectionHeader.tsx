import { SectionHeaderProps } from './SectionHeader.interface';
import styles from './SectionHeader.styles';

export default function SectionHeader({ className, layout, name, title }: SectionHeaderProps) {
  return (
    <div className={styles.container(layout, className)}>
      <p className={styles.eyebrow}>{name}</p>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
