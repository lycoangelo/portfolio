import React, {
  ForwardedRef,
  forwardRef,
  RefObject,
  useEffect,
  useState
} from 'react';
import styles from './Input.styles';
import { InputProps } from './Input.interface';

type InputElement = HTMLInputElement | HTMLTextAreaElement;

type ErrorMessageMap = {
  [key: string]: string;
};

const Input = forwardRef<InputElement, InputProps>(
  (
    { className, label, isSubmitted, ...props }: InputProps,
    ref: ForwardedRef<InputElement>
  ) => {
    const { type } = props;
    const [errorType, setErrorType] = useState('');

    const errorMessageMap: ErrorMessageMap = {
      required: `Please enter your ${label}`
    };

    const handleOnChange = (e: any) => {
      if (!isSubmitted) return;

      if (e.target.value) {
        setErrorType('');
      } else {
        setErrorType('required');
      }
    };

    useEffect(() => {
      if (
        isSubmitted &&
        !!(ref && 'current' in ref && ref.current && !ref.current.value)
      ) {
        setErrorType('required');
      }
    }, [isSubmitted, ref]);

    return (
      <>
        <label className={styles.label(className, type)}>
          <span className={styles.labelText}>{label}:</span>
          {type === 'textarea' ? (
            <textarea
              {...props}
              className={styles.input}
              onChange={handleOnChange}
              ref={ref as RefObject<HTMLTextAreaElement>}
            />
          ) : (
            <input
              {...props}
              className={styles.input}
              onChange={handleOnChange}
              ref={ref as RefObject<HTMLInputElement>}
            />
          )}
        </label>
        {errorType && (
          <span className={styles.error}>{errorMessageMap[errorType]}</span>
        )}
      </>
    );
  }
);

Input.displayName = 'Input';

export default Input;
