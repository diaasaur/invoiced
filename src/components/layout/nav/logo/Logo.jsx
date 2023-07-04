import { Link } from 'react-router-dom';
import logo from './../../../../assets/images/logo.svg';
import styles from './logo.module.css';
import classNames from 'classnames';

export default function Logo({ className }) {
  return (
    <Link to="/" className={classNames(styles.logo, className)} id="logo">
      <img src={logo} alt="Invoiced Logo" width={28} height={26} />
    </Link>
  );
}
