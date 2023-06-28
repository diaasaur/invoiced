import InvoiceFilter from '../../../components/invoice/invoice-filter/InvoiceFilter';
import InvoiceForm from '../../../components/invoice/invoice-form/InvoiceForm';
import Button from '../../../components/ui/button/Button';
import Drawer from '../../../components/ui/drawer/Drawer';
import { useApp } from '../../../stores/useApp';
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
        <Drawer>
          <Drawer.Trigger>
            <Button variant="primary">
              +{' '}
              <p className="text-sm bolder">
                {isSmallScreen ? 'New' : 'New Invoice'}
              </p>
            </Button>
          </Drawer.Trigger>
          <Drawer.Content>
            <InvoiceForm />
          </Drawer.Content>
        </Drawer>
      </div>
    </div>
  );
}

function getTotalInvoicesText(isSmallScreen, total) {
  if (total === 0) return 'No invoices';
  if (total === 1) return isSmallScreen ? '1 invoice' : 'There is 1 invoice';
  return isSmallScreen ? `${total} invoices` : `There are ${total} invoices`;
}
