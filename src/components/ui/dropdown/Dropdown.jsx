import * as Popover from '@radix-ui/react-popover';
import styles from './dropdown.module.css';
import classNames from 'classnames';

export function Root({ children, ...rest }) {
  return (
    <Popover.Root modal={true} {...rest}>
      {children}
    </Popover.Root>
  );
}

export function Trigger({ children, ...rest }) {
  return (
    <Popover.Trigger asChild {...rest}>
      {children}
    </Popover.Trigger>
  );
}

export function Content({ children, className, ...rest }) {
  return (
    <Popover.Portal>
      <Popover.Content
        className={classNames(styles.content, className)}
        {...rest}
      >
        {children}
      </Popover.Content>
    </Popover.Portal>
  );
}
