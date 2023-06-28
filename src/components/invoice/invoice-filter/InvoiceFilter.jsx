import { useApp } from '../../../stores/useApp';
import { useInvoice } from '../../../stores/useInvoice';
import { Filters } from '../../../utils/constants';
import Checkbox from '../../ui/checkbox/Checkbox';
import Dropdown from '../../ui/dropdown/Dropdown';

export default function InvoiceFilter() {
  const filters = useInvoice(state => state.filters);
  const toggleFilter = useInvoice(state => state.actions.toggleFilter);
  const isSmallScreen = useApp(state => state.isSmallScreen);
  const label = isSmallScreen ? 'Filter' : 'Filter by status';

  return (
    <Dropdown label={label}>
      {Object.entries(Filters).map(([key, value]) => (
        <Checkbox
          label={value}
          key={key}
          checked={filters.includes(value)}
          onClick={() => toggleFilter(value)}
        />
      ))}
    </Dropdown>
  );
}
