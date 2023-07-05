import classNames from 'classnames';
import styles from './invoice-details.module.css';
import { formatDate } from '../../../../utils/formatters';

export default function InvoiceDetails({ invoice }) {
  const labelClassName = classNames(
    'text-sm muted highlight bold',
    styles.label
  );

  return (
    <section className={styles.details}>
      <h2 className="sr-only">Invoice Overview</h2>
      <div className={styles.info}>
        <h3 className="sr-only">Invoice Info</h3>
        <p className={classNames('text-sm bolder', styles.id)}>
          <span className="highlight muted" aria-hidden>
            #
          </span>
          {invoice.id}
        </p>
        <p className="text-sm muted">{invoice?.description}</p>
      </div>
      <div className={styles.senderAddress}>
        <h3 className="sr-only">Sender Address</h3>
        <address>
          <p className="text-sm muted">{invoice?.senderAddress?.street}</p>
          <p className="text-sm muted">{invoice?.senderAddress?.city}</p>
          <p className="text-sm muted">{invoice?.senderAddress?.country}</p>
          <p className="text-sm muted">{invoice?.senderAddress?.postCode}</p>
        </address>
      </div>
      <div className={styles.dates}>
        <div className={styles.created}>
          <p className={labelClassName}>Invoice Date</p>
          <p className="text-sm bolder">
            <time dateTime={invoice.createdAt}>
              {formatDate(invoice.createdAt)}
            </time>
          </p>
        </div>
        <div className={styles.due}>
          <p className={labelClassName}>Payment Due</p>
          <p className="text-sm bolder">
            <time dateTime={invoice.paymentDue}>
              {formatDate(invoice.paymentDue)}
            </time>
          </p>
        </div>
      </div>
      <div className={styles.clientAddress}>
        <p className={labelClassName}>Bill To</p>
        <address>
          <p className={classNames('text-md bolder', styles.clientName)}>
            {invoice?.clientName}
          </p>
          <p className="text-sm muted">{invoice?.clientAddress?.street}</p>
          <p className="text-sm muted">{invoice?.clientAddress?.city}</p>
          <p className="text-sm muted">{invoice?.clientAddress?.country}</p>
          <p className="text-sm muted">{invoice?.clientAddress?.postCode}</p>
        </address>
      </div>
      <div className={styles.email}>
        <p className={labelClassName}>Sent To</p>
        <p className="text-md bolder">
          {invoice?.clientEmail && (
            <a href={`mailto:${invoice?.clientEmail}`} alt="">
              {invoice?.clientEmail}
            </a>
          )}
        </p>
      </div>
    </section>
  );
}
