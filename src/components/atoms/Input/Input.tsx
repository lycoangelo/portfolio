import { validateEmail } from '@app/lib/helpers/validation';
import { ChangeEvent, Ref, useEffect, useState } from 'react';

import { InputProps } from './Input.interface';
import styles from './Input.styles';

type ErrorMessageMap = {
  [key: string]: string;
};

const Input = ({
  className,
  label,
  isSubmitted,
  ref,
  type,
  ...props
}: InputProps) => {
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
            ref={ref as Ref<HTMLTextAreaElement>}
          />
        ) : (
          <input
            {...props}
            className={styles.input}
            onChange={handleOnChange}
            ref={ref as Ref<HTMLInputElement>}
            type={type}
          />
        )}
      </label>
      {errorType && (
        <span className={styles.error}>{errorMessageMap[errorType]}</span>
      )}
    </>
  );
};

export default Input;
