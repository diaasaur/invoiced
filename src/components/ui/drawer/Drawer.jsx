import * as Dialog from '@radix-ui/react-dialog';
import styles from './drawer.module.css';
import classNames from 'classnames';

export default function Drawer({ children }) {
  return <Dialog.Root>{children}</Dialog.Root>;
}

function Trigger({ children }) {
  return <Dialog.Trigger asChild>{children}</Dialog.Trigger>;
}

function Content({ children, className, ...rest }) {
  // const nav = document.getElementById('nav');
  const portal = document.getElementById('portal');

  // function handleInteractionOutside(e) {
  //   // allow nav interaction
  //   if (nav?.contains(e.target)) e.preventDefault();
  // }

  return (
    <Dialog.Portal container={portal}>
      <Dialog.Overlay className={styles.overlay}>
        <Dialog.Content
          className={classNames(styles.drawer, className)}
          {...rest}
        >
          {children}
        </Dialog.Content>
      </Dialog.Overlay>
    </Dialog.Portal>
  );
}

Drawer.Trigger = Trigger;
Drawer.Content = Content;
