import RichText from '@app/components/atoms/RichText/RichText';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';

import { EssayProps } from './Essay.interface';
import styles from './Essay.styles';

export default function Essay({ className = '', essay, ...props }: EssayProps) {
  return (
    <div
      aria-label={documentToPlainTextString(essay.json)}
      className={styles.essay(className)}
      {...props}
    >
      <RichText aria-hidden contentBody={essay} />
    </div>
  );
}
