import styles from './Essay.styles';
import { EssayProps } from './Essay.interface';
import RichText from '@app/components/atoms/RichText/RichText';

export default function Essay({ className = '', essay, ...props }: EssayProps) {
  return (
    <div className={styles.essay(className)} {...props}>
      <RichText contentBody={essay} />
    </div>
  );
}
