import classNames from 'classnames';
import styles from './badge.module.css';

export default function Badge({ variant, className, ...rest }) {
  return (
    <div
      className={classNames(styles.badge, styles[variant], className)}
      {...rest}
    >
      <p className="text-sm bolder">
        <span aria-hidden>{'\u2022'}</span> {variant}
      </p>
    </div>
  );
}
