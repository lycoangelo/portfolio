import styles from './Essay.styles';
import { EssayProps } from './Essay.interface';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

export default function Essay({ essay }: EssayProps) {
  return <div className={styles.essay}>{documentToReactComponents(essay.json)}</div>;
}
