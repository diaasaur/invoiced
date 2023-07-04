import InvoiceFilter from '../../../components/invoice/invoice-filter/InvoiceFilter';
import InvoiceForm from '../../../components/invoice/invoice-form/InvoiceForm';
import { useApp } from '../../../stores/useApp';
import { FormModes } from '../../../utils/constants';
import styles from './header.module.css';

export default function Header({ total }) {
  const isSmallScreen = useApp(state => state.isSmallScreen);

  return (
    <div className={styles.header}>
      <div className={styles.text}>
        <h1 className="text-xl">Invoices</h1>
        <p className="text-md muted">
          {getTotalInvoicesText(isSmallScreen, total)}
        </p>
      </div>
      <div className={styles.buttons}>
        <InvoiceFilter />
        <InvoiceForm mode={FormModes.CREATE} />
      </div>
    </div>
  );
}

function getTotalInvoicesText(isSmallScreen, total) {
  if (total === 0) return 'No invoices';
  if (total === 1) return isSmallScreen ? '1 invoice' : 'There is 1 invoice';
  return isSmallScreen ? `${total} invoices` : `There are ${total} invoices`;
}
