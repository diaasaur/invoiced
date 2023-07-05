import classNames from 'classnames';
import styles from './input.module.css';
import { forwardRef } from 'react';

export default function Input(
  { type, label, name, error, className, ...rest },
  ref
) {
  const hasError = Boolean(error?.message);
  const errorId = `${name}Hint`;

  return (
    <div
      className={classNames(
        styles.container,
        { [styles.hasError]: hasError },
        className
      )}
    >
      <label
        htmlFor={name}
        className={classNames('text-sm muted highlight', styles.label)}
      >
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        aria-invalid={hasError}
        aria-describedby={errorId}
        className={styles.input}
        ref={ref}
        {...rest}
      />
      <p className={classNames('text-xs', styles.hint)} id={errorId}>
        {error?.message}
      </p>
    </div>
  );
}

// eslint-disable-next-line no-func-assign
Input = forwardRef(Input);
