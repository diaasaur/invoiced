import classNames from 'classnames';
import empty from './../../../assets/images/illustration-empty.svg';
import styles from './no-invoices.module.css';
import { useApp } from '../../../stores/useApp';

export default function NoInvoices() {
  const isSmallScreen = useApp(state => state.isSmallScreen);

  return (
    <div className={styles.empty}>
      <img src={empty} width={242} height={200} alt="No Invoices" />
      <h2 className={classNames('text-lg', styles.title)}>
        There is nothing here
      </h2>
      <p className={('text-sm', 'muted', styles.subtitle)}>
        Create an invoice by clicking the{' '}
        <span>{isSmallScreen ? 'New' : 'New Invoice'}</span> button and get
        started
      </p>
    </div>
  );
}
