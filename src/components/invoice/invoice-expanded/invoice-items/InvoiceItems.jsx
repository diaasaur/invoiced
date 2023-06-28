import { useApp } from '../../../../stores/useApp';
import { formatMoney } from '../../../../utils/formatters';
import styles from './invoice-items.module.css';

export default function InvoiceItems({ items }) {
  const isSmallScreen = useApp(state => state.isSmallScreen);
  const total = items.reduce((sum, product) => sum + product.total, 0);

  return (
    <section className={styles.container}>
      <h2 className="sr-only">Invoice Products</h2>
      {isSmallScreen && (
        <table className={styles.items}>
          <thead className="sr-only">
            <tr>
              <th>Item Details</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {items.map(({ name, price, quantity, total }, index) => (
              <tr key={index}>
                <td>
                  <p className="text-sm bolder">{name}</p>
                  <p className="text-sm muted bolder">{`${quantity} x ${formatMoney(
                    price
                  )}`}</p>
                </td>
                <td>
                  <p className="text-md bolder">{formatMoney(total)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!isSmallScreen && (
        <table className={styles.items}>
          <thead className={styles.thead}>
            <tr>
              <th>
                <p className="text-sm muted highlight">Item Name</p>
              </th>
              <th>
                <p className="text-sm muted highlight">QTY</p>
              </th>
              <th>
                <p className="text-sm muted highlight">Price</p>
              </th>
              <th>
                <p className="text-sm muted highlight">Total</p>
              </th>
            </tr>
          </thead>
          <tbody className={styles.tbody}>
            {items.map(({ name, price, quantity, total }, index) => (
              <tr key={index} className={styles.product}>
                <td>
                  <p className="text-sm bolder">{name}</p>
                </td>
                <td>
                  <p className="text-sm muted bolder">{quantity}</p>
                </td>
                <td>
                  <p className="text-sm muted bolder">{formatMoney(price)}</p>
                </td>
                <td>
                  <p className="text-sm bolder">{formatMoney(total)}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <div className={styles.band}>
        <p className="text-sm">
          {isSmallScreen ? 'Grand Total' : 'Amount Due'}
        </p>
        <h2 className="text-lg bolder">{formatMoney(total)}</h2>
      </div>
    </section>
  );
}
