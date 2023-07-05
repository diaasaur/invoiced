import * as Select from '@radix-ui/react-select';
import styles from './select.module.css';
import arrowDown from './../../../assets/images/icon-arrow-down.svg';
import { forwardRef } from 'react';
import classNames from 'classnames';

export default function _Select(
  { placeholder, value, onValueChange, options, label, ...rest },
  ref
) {
  return (
    <Select.Root value={value} onValueChange={onValueChange} {...rest}>
      <div className={styles.container}>
        <label
          htmlFor={styles.trigger}
          className={classNames(styles.label, 'text-sm muted highlight')}
        >
          {label}
        </label>
        <Select.Trigger
          id={styles.trigger}
          className={styles.trigger}
          aria-label={placeholder}
          ref={ref}
        >
          <Select.Value placeholder={placeholder}>
            {options[value]}
          </Select.Value>
          <Select.Icon className={styles.arrow}>
            <img
              src={arrowDown}
              alt="arrow down"
              aria-hidden
              width={11}
              height={7}
            />
          </Select.Icon>
        </Select.Trigger>
      </div>
      <Select.Portal className="portal">
        <Select.Content position="popper" className={styles.content}>
          <Select.Viewport className={styles.viewport}>
            {Object.entries(options).map(([id, option]) => {
              return (
                <Select.Item key={id} className={styles.option} value={id}>
                  <Select.ItemText>{option}</Select.ItemText>
                </Select.Item>
              );
            })}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
}
// eslint-disable-next-line no-func-assign
_Select = forwardRef(_Select);
