import Badge from '../../../components/invoice/badge/Badge';
import Card from '../../../components/ui/card/Card';
import Buttons from '../Buttons';
import styles from './header.module.css';

export default function Header({ status, isSmallScreen, ...rest }) {
  return (
    <Card className={styles.header}>
      <div className={styles.status}>
        <p className="text-sm compact muted">Status</p>
        <Badge variant={status} />
      </div>
      {!isSmallScreen && <Buttons {...rest} />}
    </Card>
  );
}
