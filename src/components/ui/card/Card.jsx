import classNames from 'classnames';
import styles from './card.module.css';

export default function Card({ children, className, ...rest }) {
  return (
    <div className={classNames(styles.card, className)} {...rest}>
      {children}
    </div>
  );
}
