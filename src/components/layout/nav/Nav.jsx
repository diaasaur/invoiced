import Logo from './logo/Logo';
import styles from './nav.module.css';
import ThemeToggle from './theme-toggle/ThemeToggle';
import avatar from './../../../assets/images/avatar.png';
import dashboard from './../../../assets/images/dashboard.svg';
import { Link } from 'react-router-dom';
import Button from '../../ui/button/Button';

export default function Nav() {
  return (
    <nav className={styles.nav} id="nav">
      <Logo />
      <ul className={styles.ul}>
        <li className={styles.li}>
          <Link to="/dashboard" className={styles.dashboard}>
            <Button variant="transparent" title="Dashboard">
              <img
                src={dashboard}
                alt="Dashboard Logo"
                width={25}
                height={25}
              />
            </Button>
          </Link>
        </li>
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
