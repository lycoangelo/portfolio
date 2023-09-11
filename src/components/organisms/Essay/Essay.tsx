import RichText from '@app/components/atoms/RichText/RichText';
import { forwardRef, LegacyRef } from 'react';

import { EssayProps } from './Essay.interface';
import styles from './Essay.styles';

const Essay = forwardRef(
  (
    { className = '', essay, ...props }: EssayProps,
    ref: LegacyRef<HTMLDivElement>
  ) => {
    return (
      <div className={styles.essay(className)} ref={ref} {...props}>
        <RichText contentBody={essay} />
      </div>
    );
  }
);

Essay.displayName = 'Essay';

export default Essay;
