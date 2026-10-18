function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  if (quantity <= 0) {
    throw new RangeError;
  }
const ProductInCart = cart.find((item) => item.id === product.id);
const currentQty = ProductInCart ? ProductInCart.quantity : 0;
const totalQty = currentQty + quantity;
if (totalQty > product.stock) {
    throw new RangeError();
  }
  if (ProductInCart) {
   return cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + quantity }
            : item
    );
  }
  return [...cart, { ...product, quantity }];
}

function changeQuantity(cart, productId, newQuantity) {
  if (newQuantity <= 0) {
    throw new RangeError();
  }
  const ProductInCart = cart.find((item) => item.id === productId);
  if (ProductInCart && newQuantity > ProductInCart.stock) {
    throw new RangeError();
  }
if (newQuantity > productId.stock) {
    throw new RangeError();
  }
return cart.map((item) =>
      item.id === productId
        ? { ...item, quantity: newQuantity }
            : item
    );
 }
function removeFromCart(cart, ProductId) {
cart = cart.filter((i) => i.id !== ProductId);
return cart;
 }
function calculateCartSubtotal(cart) {
const totalQuantity = cart.reduce((sum, i), 0);
return totalQuantity;

}
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
