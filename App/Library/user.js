import findIndex from 'lodash/findIndex';

export const getSelectedAddress = (addresses, addressid) => {
  const index = findIndex(addresses, addresses.id === addressid);
  return addresses[index] || {};
};

export const isUserEnabled = (user) => user.status === 1;
