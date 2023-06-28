import { Indicator, Root } from '@radix-ui/react-checkbox';
import { useState } from 'react';
import icon from './../../../assets/images/icon-check.svg';
import styles from './checkbox.module.css';
import classNames from 'classnames';

export default function Checkbox({ checked = false, label, ...rest }) {
  const [state, setState] = useState(checked);
  const id = label.replaceAll(/\s/g, '');

  return (
    <div className={styles.container}>
      <Root
        id={id}
        checked={state}
        onCheckedChange={setState}
        className={styles.root}
        {...rest}
      >
        <Indicator className={styles.indicator}>
          <img src={icon} alt="check" />
        </Indicator>
      </Root>
      <label
        htmlFor={id}
        className={classNames(styles.label, 'text-sm', 'bolder')}
      >
        {label}
      </label>
    </div>
  );
}
