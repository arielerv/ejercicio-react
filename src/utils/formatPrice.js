const formatPrice = (number, milesSeparator = '.') => String(number).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, `$1${milesSeparator}`);

export default formatPrice;
