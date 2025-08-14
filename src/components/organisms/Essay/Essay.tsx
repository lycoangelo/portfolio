import RichText from "@app/components/atoms/RichText/RichText";

import { EssayProps } from "./Essay.interface";
import styles from "./Essay.styles";

const Essay = ({ className = "", essay, ref, ...props }: EssayProps) => {
  return (
    <div className={styles.essay(className)} ref={ref} {...props}>
      <RichText contentBody={essay} />
    </div>
  );
};

Essay.displayName = "Essay";

export default Essay;
