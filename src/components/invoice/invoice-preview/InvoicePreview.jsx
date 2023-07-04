import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { formatDate, formatMoney } from '../../../utils/formatters';
import Card from '../../ui/card/Card';
import Badge from '../badge/Badge';
import arrowRight from './../../../assets/images/icon-arrow-right.svg';
import styles from './invoice-preview.module.css';

export default function InvoicePreview({
  id,
  paymentDue,
  status,
  total,
  clientName,
}) {
  return (
    <Link className={styles.link} to={`/invoice/${id}`}>
      <Card className={styles.invoice}>
        <div className={styles.id}>
          <p className="text-sm bolder">
            <span className="muted highlight">#</span>
            {id}
          </p>
        </div>
        <div className={styles.date}>
          {paymentDue && (
            <>
              <p className="text-sm muted highlight">Due</p>
              <p className="text-sm muted">{formatDate(paymentDue)}</p>
            </>
          )}
        </div>
        <p className={classNames('text-sm muted ', styles.name)}>
          {clientName}
        </p>
        <p className={classNames('text-md bolder', styles.money)}>
          {`${formatMoney(total || 0)}`}
        </p>
        <Badge variant={status} className={styles.status} />
        <img
          className={styles.arrow}
          src={arrowRight}
          alt="icon-right"
          aria-hidden
        />
      </Card>
    </Link>
  );
}
