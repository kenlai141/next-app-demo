export const toHKDString = (amount: string | number) => {
  return Number(amount).toLocaleString('en-US', { style: 'currency', currency: 'HKD' });
};
