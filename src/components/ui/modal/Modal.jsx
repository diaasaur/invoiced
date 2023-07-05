import * as Dialog from '@radix-ui/react-dialog';
import styles from './modal.module.css';

export function Root({ children, ...rest }) {
  return <Dialog.Root {...rest}>{children}</Dialog.Root>;
}
export function Trigger({ children, ...rest }) {
  return <Dialog.Trigger {...rest}>{children}</Dialog.Trigger>;
}
export function Content({ children, ...rest }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay}>
        <Dialog.Content className={styles.content} {...rest}>
          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

export function Title({ children, ...rest }) {
  return (
    <Dialog.Title {...rest} asChild>
      {children}
    </Dialog.Title>
  );
}
export function Description({ children, ...rest }) {
  return (
    <Dialog.Description {...rest} asChild>
      {children}
    </Dialog.Description>
  );
}
export function Close({ children, ...rest }) {
  return (
    <Dialog.Close {...rest} asChild>
      {children}
    </Dialog.Close>
  );
}
