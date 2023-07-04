import { format } from 'date-fns';

export function formatDate(dateString) {
  return format(new Date(dateString), 'd MMM yyy');
}
export function formatMoney(money) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money);
}
