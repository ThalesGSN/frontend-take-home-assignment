export const ZeroPad = (num: number, places: number) => {
  return String(num).padStart(places, '0');
};

const currencyFormatFactory = new Intl.NumberFormat('en', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0,
  minimumFractionDigits: 0
});
export const CurrencyFormat = (monetaryValue: number) => {
  return currencyFormatFactory.format(monetaryValue);
};

export const GetNumberFromString = (numericString?: string) => {
  if (!numericString) {
    return null;
  }

  return Number(numericString.replace(/\D/g, ''));
};
