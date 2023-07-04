import { useApp } from '../../../stores/useApp';
import { useInvoice } from '../../../stores/useInvoice';
import { Filters } from '../../../utils/constants';
import Button from '../../ui/button/Button';
import Checkbox from '../../ui/checkbox/Checkbox';
import * as Dropdown from './../../ui/dropdown/Dropdown';
import arrowDown from './../../../assets/images/icon-arrow-down.svg';
import styles from './invoice-filter.module.css';

export default function InvoiceFilter() {
  const filters = useInvoice(state => state.filters);
  const toggleFilter = useInvoice(state => state.actions.toggleFilter);
  const isSmallScreen = useApp(state => state.isSmallScreen);

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <Button variant="transparent">
          <p>{isSmallScreen ? 'Filter' : 'Filter by status'}</p>
          <img
            className={styles.icon}
            src={arrowDown}
            alt="arrow down"
            aria-hidden
          />
        </Button>
      </Dropdown.Trigger>
      <Dropdown.Content>
        {Object.entries(Filters).map(([key, value]) => (
          <Checkbox
            label={value}
            key={key}
            checked={filters.includes(value)}
            onClick={() => toggleFilter(value)}
          />
        ))}
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
