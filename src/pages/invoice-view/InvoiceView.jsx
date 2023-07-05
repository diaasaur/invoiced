import { Link, useParams } from 'react-router-dom';
import { useInvoice } from '../../stores/useInvoice';
import { useEffect } from 'react';
import arrowLeft from './../../assets/images/icon-arrow-left.svg';
import styles from './invoice-view.module.css';
import Header from './header/Header';
import InvoiceExpanded from '../../components/invoice/invoice-expanded/InvoiceExpanded';
import { useApp } from '../../stores/useApp';
import Footer from './footer/Footer';
import { Filters } from '../../utils/constants';

export default function InvoiceView() {
  const isSmallScreen = useApp(state => state.isSmallScreen);
  const { invoiceId } = useParams();
  const invoice = useInvoice(state =>
    state.invoices.filter(invoice => invoice.id === invoiceId)
  )?.[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!invoice)
    return <h2 className="text-lg">Oops! This invoice does not exist</h2>;

  const showPaid = invoice.status === Filters.PENDING;

  return (
    <div className={styles.container}>
      <h1 className="sr-only">Expanded view of {invoice.id}</h1>
      <Link className={styles.backlink} to="/">
        <img
          src={arrowLeft}
          alt="arrow left"
          aria-hidden
          width={7}
          height={10}
        />
        <p className="text-md bolder">Go back</p>
      </Link>
      <Header
        status={invoice.status}
        isSmallScreen={isSmallScreen}
        invoiceId={invoice.id}
        showPaid={showPaid}
      />
      {isSmallScreen && <Footer invoiceId={invoice.id} showPaid={showPaid} />}
      <InvoiceExpanded invoice={invoice} />
    </div>
  );
}
