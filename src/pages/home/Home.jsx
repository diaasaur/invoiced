import InvoicePreview from '../../components/invoice/invoice-preview/InvoicePreview';
import NoInvoices from '../../components/invoice/no-invoices/NoInvoices';
import { useInvoice } from '../../stores/useInvoice';
import Header from './header/Header';
import styles from './home.module.css';

export default function Home() {
  const filters = useInvoice(state => state.filters);
  const invoices = useInvoice(state =>
    state.invoices.filter(invoice => filters.includes(invoice.status))
  );

  return (
    <div className={styles.home}>
      <Header total={invoices.length} />
      {invoices.length ? (
        <ul className={styles.invoices}>
          {invoices.map(invoice => {
            return (
              <li key={invoice.id}>
                <InvoicePreview {...invoice} />
              </li>
            );
          })}
        </ul>
      ) : (
        <NoInvoices />
      )}
    </div>
  );
}
