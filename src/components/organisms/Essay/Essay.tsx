import RichText from '@app/components/atoms/RichText/RichText';

import { EssayProps } from './Essay.interface';
import styles from './Essay.styles';

export default function Essay({ className = '', essay, ...props }: EssayProps) {
  return (
    <div className={styles.essay(className)} {...props}>
      <RichText contentBody={essay} />
    </div>
  );
}
