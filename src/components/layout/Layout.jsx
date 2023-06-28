import styles from './layout.module.css';
import Nav from './nav/Nav';

export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Nav />
      </header>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
