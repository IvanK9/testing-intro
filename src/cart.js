function notImplemented() {
  throw new Error("Корзина ещё не реализована. Сначала прочитайте тесты.");
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество товара должно быть больше нуля");
  }

  const existEl = cart.find((prod) => prod.id === product.id);
  const currentQuantity = existEl ? existEl.quantity : 0;
  const totalQuantity = currentQuantity + quantity;

  if (totalQuantity > product.stock) {
    throw new RangeError(
      `Недостаточно товара на складе, доступно: ${product.stock}`,
    );
  }

  if (existEl) {
    return cart.map((el) =>
      el.id === product.id ? { ...el, quantity: el.quantity + quantity } : el,
    );
  }

  return [...cart, { ...product, quantity: quantity }];
}

function changeQuantity(cart, id, quantity) {
  if (quantity <= 0) {
    throw new RangeError("Количество товара должно быть больше нуля");
  }

  const productCart = cart.find((prod) => prod.id === id);

  if (!productCart) {
    return cart;
  }

  if (quantity > productCart.stock) {
    throw new RangeError(
      `Недостаточно товара на складе, доступно: ${productCart.stock}`,
    );
  }

  return cart.map((el) => (el.id === id ? { ...el, quantity: quantity } : el));
}

function removeFromCart(cart, id) {
  return cart.filter((product) => product.id !== id);
}

function calculateCartSubtotal(cart) {
  return cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  );
}

function calculateOrderTotal() {
  return notImplemented();
}

const cartApi = {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateCartSubtotal,
  calculateOrderTotal,
};

if (typeof module !== "undefined") module.exports = cartApi;
if (typeof window !== "undefined") window.cartApi = cartApi;
