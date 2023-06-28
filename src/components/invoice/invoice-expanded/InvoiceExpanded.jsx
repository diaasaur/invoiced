import styles from './invoice-expanded.module.css';
import Card from '../../ui/card/Card';
import InvoiceDetails from './invoice-details/InvoiceDetails';
import InvoiceItems from './invoice-items/InvoiceItems';

export default function InvoiceExpanded({ invoice }) {
  return (
    <Card className={styles.invoice}>
      <InvoiceDetails invoice={invoice} />
      <InvoiceItems items={invoice.items} />
    </Card>
  );
}
