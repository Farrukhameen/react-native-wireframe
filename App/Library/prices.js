/* eslint-disable no-use-before-define */

import findIndex from 'lodash/findIndex';
import {checkIfObjectEmpty} from './object';

export const productPrice = (product) => {
  const pPrice = getItemPrice(product.price, product.booking_tiers[0]);
  const discountedPrice = getDiscountPrice(product.booking_discount, pPrice);
  const extraPrices = getExtrasPrices(product.booking_tiers);
  return discountedPrice * product.quantity + extraPrices;
};

export const getExtrasPrices = (tiers) => {
  return tiers.reduce((total, tier) => getTierPrice(tier, tiers[0]) + total, 0);
};

export const onlyPrice = (product) => {
  return product.price;
};

export const onlyPriceWithDiscount = (product, mode) => {
  return getDiscountPrice(product.discounts[mode.toLowerCase()], product.price);
};

export const productPriceWithoutQuantity = (
  {price, tiers, discounts},
  mode,
) => {
  const pPrice = getItemPrice(price, tiers[0]);
  const discountedPrice = getDiscountPrice(
    discounts[mode.toLowerCase()],
    pPrice,
  );
  return discountedPrice + getExtrasPrices(tiers);
};

export const cartTotal = (products, mode) => {
  return products.reduce(
    (total, product) => productPrice(product, mode) + total,
    0,
  );
};

export const getItemPrice = (price, size) => {
  if (size) {
    if (size.type === 'Size') {
      return size.booking_tier_sizes.price;
    }
    return price;
  }
  return price;
};

export const getTierPrice = (tier, size = {}) => {
  if (!tier) {
    return 0;
  }
  if (tier.type === 'Option') {
    return getOptionPrice(tier.booking_tier_options, size);
  }
  if (tier.type === 'Addon') {
    return getAddonsPrice(tier.booking_tier_addons, size);
  }
  if (tier.type === 'Product') {
    return 0;
  }
  return 0;
};

export const getSizePrice = (tier) => {
  return tier.selected.price;
};

export const getOptionPrice = (option) => {
  return option.price;
};

export const getAddonsPrice = (addons, size) =>
  addons?.reduce((total, addon) => getAddonPrice(addon, size) + total, 0) || 0;

export const getAddonPrice = (addon) => {
  return addon.price * addon.quantity;
};

export const priceBySize = (item, {selected: {id}}) => {
  const index = findIndex(item.price, (price) => id === price.size_id);
  if (index === -1) {
    return 0;
  }
  return item.price[index].price;
};

export const getDeliveryCharges = (operation, mode, total) => {
  if (mode === 'Delivery') {
    if (operation.delivery_type === 'cap') {
      if (total >= operation.delivery_cap) {
        return parseInt(operation.delivery_charges, 10);
      }
      return 0;
    }
    return parseInt(operation.delivery_charges, 10);
  }
  if (mode === 'Takeaway') {
    return 0;
  }
  return 0;
};

export const getVoucherPrice = (voucher, total) => {
  if (checkIfObjectEmpty(voucher)) {
    return 0;
  }
  if (voucher.type === 'fixed') {
    return voucher.amount;
  }
  if (voucher.type === 'percentage') {
    return total * (voucher.amount / 100);
  }
  if (voucher.type === 'cap') {
    if (total >= voucher.total) {
      return voucher.amount;
    }
    return 0;
  }
  return 0;
};

export const getProperPrice = (item, s) => {
  if (s) {
    const size = s.toJS();
    if (size.type === 'Size') {
      return priceBySize(item, size);
    }
    return item?.price[0]?.price || 0;
  }
  return item.price[0].price;
};

export const getDiscountPrice = (discount, price) => {
  if (!discount || checkIfObjectEmpty(discount)) {
    return price;
  }
  if (discount.type === 'fixed') {
    return parseInt(price - discount.amount, 10);
  }
  return parseInt(price - (price * discount.amount) / 100, 10);
};
