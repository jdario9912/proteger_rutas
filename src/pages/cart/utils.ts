const CART_KEY = "cart";

const cartString = (cart: number[]) => JSON.stringify(cart);

const saveCartInLocalStorage = (cart: number[]): void => {
  localStorage.setItem(CART_KEY, cartString(cart));
};

const getCart = async (): Promise<number[]> => {
  return await JSON.parse(localStorage.getItem(CART_KEY) || "[]");
};

export const addProductToCart = async (productId: number): Promise<void> => {
  const cart = await getCart();
  if (cart.includes(productId)) return;
  cart.push(productId);
  saveCartInLocalStorage(cart);
};

export const removeProductFromCart = async (
  productId: number,
): Promise<void> => {
  const cart = await getCart();
  const index = cart.indexOf(productId);
  if (index !== -1) {
    cart.splice(index, 1);
    saveCartInLocalStorage(cart);
  }
};

export const clearCart = (): void => {
  localStorage.removeItem(CART_KEY);
};

export const updateCartQuantity = async (
  productId: number,
  quantity: number,
): Promise<void> => {
  const cart = await getCart();
  const index = cart.indexOf(productId);
  if (index !== -1) {
    cart[index] = quantity;
    saveCartInLocalStorage(cart);
  }
};
