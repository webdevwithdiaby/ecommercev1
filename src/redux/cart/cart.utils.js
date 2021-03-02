export const addItemToCart = (items, item) => {
  if (item === null) return;

  const existingItem = items.find(itm => itm.id === item.id);

  if (existingItem) {
    return items.map(item =>
      item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  return [...items, { ...item, quantity: 1 }];
};
