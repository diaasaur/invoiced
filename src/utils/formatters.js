export function formatDate(dateString) {
  const _date = new Date(dateString);
  const date = _date.toLocaleString('default', { day: 'numeric' });
  const month = _date.toLocaleString('default', { month: 'short' });
  const year = _date.toLocaleString('default', { year: 'numeric' });
  return `${date} ${month} ${year}`;
}
export function formatMoney(money) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(money);
}
