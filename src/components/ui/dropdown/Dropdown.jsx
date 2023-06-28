import classNames from 'classnames';
import { useState } from 'react';
import arrowDown from './../../../assets/images/icon-arrow-down.svg';
import styles from './dropdown.module.css';
import Button from '../button/Button';
import * as Popover from '@radix-ui/react-popover';

export default function Dropdown({ children, label: triggerLabel }) {
  const [open, setOpen] = useState(false);

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal={false}>
      <Popover.Trigger asChild>
        <Button variant="transparent">
          <p>{triggerLabel}</p>
          <img
            className={classNames(styles.icon, { [styles.open]: open })}
            src={arrowDown}
            alt="arrow down"
            aria-hidden
          />
        </Button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content className={styles.content}>{children}</Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
}
