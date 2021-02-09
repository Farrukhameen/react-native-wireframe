/* eslint-disable no-use-before-define */
import findIndex from 'lodash/findIndex';

export const checkIfProductCompleted = (selected, {tiers = []}) => {
  let completable = true;
  tiers.every((tier, index) => {
    if (tier.required === 1) {
      completable = !!selected.tiers[index];
      return completable;
    }
    return true;
  });
  return completable;
};
export const getProductDiscount = (discount, mode) => {
  return discount[mode];
};

export const getAddonIndex = (addon, addons = []) => {
  return findIndex(addons, (a) => a.id === addon.id);
};

export const getAddonQuantity = (addons) => {
  const freeTotal =
    addons.free?.reduce((total, a) => a.quantity + total, 0) || 0;
  const paidTotal =
    addons.paid?.reduce((total, a) => a.quantity + total, 0) || 0;
  return freeTotal + paidTotal;
};
