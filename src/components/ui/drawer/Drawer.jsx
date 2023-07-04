// import * as Dialog from '@radix-ui/react-dialog';
// import styles from './drawer.module.css';
// import classNames from 'classnames';

// export default function Drawer({ children, ...rest }) {
//   return <Dialog.Root {...rest}>{children}</Dialog.Root>;
// }

// function Trigger({ children, ...rest }) {
//   return (
//     <Dialog.Trigger asChild {...rest}>
//       {children}
//     </Dialog.Trigger>
//   );
// }

// function Content({ children, className, ...rest }) {
//   // const nav = document.getElementById('nav');
//   const portal = document.getElementById('portal');

//   // function handleInteractionOutside(e) {
//   //   // allow nav interaction
//   //   if (nav?.contains(e.target)) e.preventDefault();
//   // }

//   return (
//     <Dialog.Portal container={portal}>
//       <Dialog.Overlay className={styles.overlay}>
//         <Dialog.Content
//           className={classNames(styles.drawer, className)}
//           {...rest}
//         >
//           {children}
//         </Dialog.Content>
//       </Dialog.Overlay>
//     </Dialog.Portal>
//   );
// }

// Drawer.Trigger = Trigger;
// Drawer.Content = Content;
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
