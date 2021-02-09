export const checkoutAble = (shop, total, mode) => {
  if (mode === 'Delivery') {
    return total >= shop.min_delivery_order;
  }
  if (mode === 'Takeaway') {
    return total >= shop.min_delivery_order;
  }
  return false;
};

export const shouldPurgeCheckout = (response) => {
  return response === 'approved';
};
