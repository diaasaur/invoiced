import Card from '../../../components/ui/card/Card';
import Buttons from '../Buttons';
import styles from './footer.module.css';

export default function Footer(props) {
  return (
    <Card className={styles.footer}>
      <Buttons {...props} className={styles.buttons} />
    </Card>
  );
}
