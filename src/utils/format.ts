export function formatCurrency(amount: number, currency: string = 'USD', locale: string = 'en-US') {
  try {
    return new Intl.NumberFormat(locale, { style: 'currency', currency }).format(amount);
  } catch {
    return `${amount.toFixed(2)} ${currency}`;
  }
}

