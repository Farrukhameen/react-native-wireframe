export const checkIfObjectEmpty = (obj = {}) =>
  Object.keys(obj).length === 0 && obj.constructor === Object;

export const applySentenceCase = (str) =>
  str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase(),
  );

export const trimSlashes = (s) => s.replace(/\/$/, '');

export const getResponseRoute = (r) => {
  const route = trimSlashes(r.trim()).split('/');
  if (route.length === 4) {
    route.pop();
    return `${route.join('/')}/checkout/response`;
  }
  if (route.length === 5) {
    route.splice(-2, 2);
    return `${route.join('/')}/checkout/response`;
  }
  return '/';
};
