export const addPrices = (a, b) => {
  const sum = parseFloat(a) + parseFloat(b);
  return sum.toFixed(2);
};

export const subtractPrices = (a, b) => {
  const sub = parseFloat(a) - parseFloat(b);
  return sub.toFixed(2);
};
