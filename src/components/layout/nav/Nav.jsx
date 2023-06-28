import Logo from './logo/Logo';
import styles from './nav.module.css';
import ThemeToggle from './theme-toggle/ThemeToggle';
import avatar from './../../../assets/images/avatar.png';

export default function Nav() {
  return (
    <nav className={styles.nav} id="nav">
      <Logo />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <ThemeToggle />
        </li>
        <li>
          <img
            src={avatar}
            alt="current user avatar"
            width={50}
            height={50}
            className={styles.avatar}
          />
        </li>
      </ul>
    </nav>
  );
}
