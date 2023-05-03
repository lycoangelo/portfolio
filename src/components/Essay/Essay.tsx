import styles from './Essay.styles';
import { EssayProps } from './Essay.interface';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Essay({ className, essay }: EssayProps) {
  return (
    <div className={styles.essay(className)}>
      {documentToReactComponents(essay.json)}
    </div>
  );
}
