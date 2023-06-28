import classNames from 'classnames';
import styles from './button.module.css';
import { forwardRef } from 'react';

export default function Button(
  { variant = 'default', className, children, ...rest },
  ref
) {
  const combinedClassName = classNames(
    styles.button,
    styles[variant],
    className
  );

  return (
    <button className={combinedClassName} ref={ref} {...rest}>
      {children}
    </button>
  );
}

// eslint-disable-next-line no-func-assign
Button = forwardRef(Button);
