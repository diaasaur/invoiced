import { format } from 'date-fns';
import { Filters } from './constants';

export function getPieChartData(invoices) {
  const colors = {
    [Filters.PENDING]: {
      text: '#fff',
      bg: 'rgba(255, 143, 0, 0.75)',
    },
    [Filters.PAID]: {
      text: '#fff',
      bg: 'rgba(51, 214, 159, 0.75)',
    },
    [Filters.DRAFT]: {
      text: '#fff',
      bg: 'rgba(126, 136, 195, 0.5)',
    },
  };
  const filterCount = invoices.reduce(
    (acc, invoice) => {
      acc[invoice.status] += 1;
      return acc;
    },
    {
      pending: 0,
      paid: 0,
      draft: 0,
    }
  );

  console.log(
    Object.keys(Filters).map(key => {
      const filterValue = Filters[key];
      const filterColors = colors[filterValue];
      return {
        id: filterValue,
        label: filterValue,
        ...filterColors,
        value: filterCount[filterValue],
      };
    })
  );

  return Object.keys(Filters).map(key => {
    const filterValue = Filters[key];
    const filterColors = colors[filterValue];
    return {
      id: filterValue,
      label: filterValue,
      ...filterColors,
      value: filterCount[filterValue],
    };
  });
}

export function getLineChartData(invoices) {
  const months = Array.from({ length: 12 }, (_, index) =>
    format(new Date(0, index), 'MMM')
  );
  const groupedByMonths = invoices.reduce((acc, invoice) => {
    const month = format(new Date(invoice.createdAt), 'MMM');
    acc[month] = (acc[month] || 0) + invoice.total;
    return acc;
  }, {});

  const data = months.map(month => ({
    x: month,
    y: groupedByMonths[month] || 0,
  }));

  return [
    {
      id: 'revenue',
      data,
    },
  ];
}
