import {
  Root,
  Trigger,
  Title,
  Description,
  Close,
} from './../../ui/modal/Modal';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './drawer.module.css';

function Content({ children, ...rest }) {
  const nav = document.getElementById('nav');
  function handleInteractionOutside(e) {
    // allow nav interaction
    if (nav?.contains(e.target)) e.preventDefault();
  }

  return (
    <Dialog.Portal>
      <Dialog.Overlay className={styles.overlay} />
      <Dialog.Content
        className={styles.content}
        onInteractOutside={handleInteractionOutside}
        {...rest}
      >
        {children}
      </Dialog.Content>
    </Dialog.Portal>
  );
}

export { Root, Trigger, Title, Description, Close, Content };
