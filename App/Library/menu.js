export const filterMenu = (m, q) => {
  if (q) {
    return m.filter((submenu) => {
      const sub = {
        ...submenu,
        products: submenu.products.filter((product) => {
          return product.title.toLowerCase().includes(q.toLowerCase());
        }),
      };
      return sub.products.length > 0;
    });
  }
  return m;
};

export const searchMenu = (m, q) => {
  if (q) {
    const menu = [];
    m.forEach((submenu) => {
      const sub = {
        ...submenu,
        products: submenu.products.filter((product) => {
          return product.title.toLowerCase().includes(q.toLowerCase());
        }),
      };
      if (sub.products.length > 0) {
        menu.push(sub);
      }
    });
    return menu;
  }
  return m;
};
