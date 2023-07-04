import classNames from 'classnames';
import InvoiceForm from '../../components/invoice/invoice-form/InvoiceForm';
import Button from '../../components/ui/button/Button';
import styles from './invoice-view.module.css';
import DeleteInvoice from '../../components/invoice/delete-invoice/DeleteInvoice';
import { FormModes } from '../../utils/constants';
import { useInvoice } from '../../stores/useInvoice';

export default function Buttons({ showPaid, invoiceId, className }) {
  const markPaid = useInvoice(state => state.actions.markPaid);

  return (
    <div
      className={classNames(
        styles.buttons,
        { [styles.showPaid]: showPaid },
        className
      )}
    >
      <InvoiceForm mode={FormModes.EDIT} invoiceId={invoiceId} />
      <DeleteInvoice invoiceId={invoiceId} />
      {showPaid && (
        <Button variant="primary" onClick={() => markPaid(invoiceId)}>
          mark as paid
        </Button>
      )}
    </div>
  );
}
