import classNames from 'classnames';
import InvoiceForm from '../../components/invoice/invoice-form/InvoiceForm';
import Button from '../../components/ui/button/Button';
import Drawer from '../../components/ui/drawer/Drawer';
import styles from './invoice-view.module.css';

export default function Buttons({ showPaid, invoiceId, className }) {
  console.log(invoiceId);

  return (
    <div className={classNames(styles.buttons, className)}>
      <Drawer>
        <Drawer.Trigger>
          <Button>edit</Button>
        </Drawer.Trigger>
        <Drawer.Content>
          <InvoiceForm />
        </Drawer.Content>
      </Drawer>
      <Button variant="danger">delete</Button>
      {showPaid && <Button variant="primary">mark as paid</Button>}
    </div>
  );
}
