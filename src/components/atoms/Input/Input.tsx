import { validateEmail } from '@app/lib/helpers/validation';
import {
  ChangeEvent,
  ForwardedRef,
  forwardRef,
  RefObject,
  useEffect,
  useState
} from 'react';

import { InputProps } from './Input.interface';
import styles from './Input.styles';

type InputElement = HTMLInputElement | HTMLTextAreaElement;

type ErrorMessageMap = {
  [key: string]: string;
};

const Input = forwardRef<InputElement, InputProps>(
  (
    { className, label, isSubmitted, type, ...props }: InputProps,
    ref: ForwardedRef<InputElement>
  ) => {
    const [errorType, setErrorType] = useState('');

    const errorMessageMap: ErrorMessageMap = {
      required: `Please enter your ${label}`,
      'invalid-email': 'Please enter a valid email address'
    };

    const handleOnChange = (
      e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
      if (!isSubmitted) return;
      const { value } = e.target;

      if (value) {
        if (type === 'email' && !validateEmail(value)) {
          setErrorType('invalid-email');
        } else {
          setErrorType('');
        }
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
              type={type}
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
