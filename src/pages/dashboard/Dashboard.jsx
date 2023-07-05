import Card from '../../components/ui/card/Card';
import { useInvoice } from '../../stores/useInvoice';
import { Filters, Theme } from '../../utils/constants';
import { formatMoney } from '../../utils/formatters';
import { useApp } from '../../stores/useApp';
import { getLineChartData, getPieChartData } from '../../utils/chartingHelpers';
import styles from './dashboard.module.css';
import classNames from 'classnames';
import PieChart from '../../components/charts/PieChart';
import LineChart from '../../components/charts/LineChart';

export default function Dashboard() {
  const theme = useApp(state => state.theme);
  const invoices = useInvoice(state =>
    state.invoices.filter(
      invoice =>
        invoice.createdAt &&
        new Date(invoice.createdAt).getFullYear() === new Date().getFullYear()
    )
  );
  const invoicesCount = invoices.length;

  const total = invoices.reduce((sum, invoice) => sum + invoice.total, 0);
  const pending = invoices
    .filter(invoice => invoice.status === Filters.PENDING)
    .reduce((sum, invoice) => sum + invoice.total, 0);
  const average = total / invoicesCount;

  const pieChartData = getPieChartData(invoices);
  const lineChartData = getLineChartData(invoices);

  return (
    <section className={styles.container}>
      <h1 className="text-xl">{new Date().getFullYear()} Reports</h1>
      <div className={styles.dashboard}>
        <div className={styles.textInfo}>
          <article>
            <Card className={styles.textInfoCard}>
              <h2 className={classNames('text-xs muted', styles.title)}>
                total amount
              </h2>
              <p className="text-lg">{formatMoney(total)}</p>
            </Card>
          </article>
          <article>
            <Card className={styles.textInfoCard}>
              <h2 className={classNames('text-xs muted', styles.title)}>
                avg. invoice
              </h2>
              <p className="text-lg">{formatMoney(average)}</p>
            </Card>
          </article>
          <article>
            <Card className={styles.textInfoCard}>
              <h2 className={classNames('text-xs muted', styles.title)}>
                outstanding amount
              </h2>
              <p className="text-lg">{formatMoney(pending)}</p>
            </Card>
          </article>
        </div>
        <Card className={styles.pieChartContainer}>
          <h2 className={classNames('text-sm muted', styles.chartTitle)}>
            Invoice Status Breakdown
          </h2>
          <div className={styles.pieChart}>
            <PieChart
              data={pieChartData}
              textColor={theme === Theme.DARK ? '#fff' : '#0c0e16'}
            />
          </div>
        </Card>
        <Card className={styles.lineChartContainer}>
          <h2 className={classNames('text-sm muted', styles.chartTitle)}>
            Invoice UwU
          </h2>
          <div className={styles.lineChart}>
            <LineChart
              data={lineChartData}
              colors={{
                crossHair: theme === Theme.DARK ? '#fff' : '#0c0e16',
                text: '#888eb0',
                grid: theme === Theme.DARK ? '#4b5171' : '#dfe3fa',
              }}
            />
          </div>
        </Card>
      </div>
    </section>
  );
}
