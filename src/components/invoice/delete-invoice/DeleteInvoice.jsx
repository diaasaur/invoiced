import { useNavigate } from 'react-router-dom';
import { useInvoice } from '../../../stores/useInvoice';
import Button from '../../ui/button/Button';
import * as Modal from './../../ui/modal/Modal';
import styles from './delete.module.css';

export default function DeleteInvoice({ invoiceId }) {
  const navigate = useNavigate();
  const deleteInvoice = useInvoice(state => state.actions.deleteInvoice);

  return (
    <Modal.Root>
      <Modal.Trigger asChild>
        <Button variant="danger">Delete</Button>
      </Modal.Trigger>
      <Modal.Content>
        <Modal.Title>
          <h2 className="text-lg bolder">Confirm Deletion</h2>
        </Modal.Title>
        <Modal.Description>
          <p className="text-md muted ">
            Are you sure you want to delete invoice #XM9141? This action cannot
            be undone.
          </p>
        </Modal.Description>
        <Modal.Close>
          <div className={styles.buttons}>
            <Button>Cancel</Button>

            <Button
              variant="danger"
              onClick={() => {
                deleteInvoice(invoiceId);
                navigate('/');
              }}
            >
              Delete
            </Button>
          </div>
        </Modal.Close>
      </Modal.Content>
    </Modal.Root>
  );
}
