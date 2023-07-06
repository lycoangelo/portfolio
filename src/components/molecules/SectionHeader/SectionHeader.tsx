import { SectionHeaderProps } from './SectionHeader.interface';
import TypingText from '@app/components/molecules/TypingText/TypingText';
import styles from './SectionHeader.styles';

export default function SectionHeader({
  className,
  layout,
  name,
  title
}: SectionHeaderProps) {
  return (
    <div className={styles.container(layout, className)}>
      <TypingText
        className={styles.eyebrow}
        layout={layout}
        duration={300}
        text={name}
      />
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
