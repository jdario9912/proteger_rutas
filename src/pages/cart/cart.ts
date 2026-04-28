import { cartCounter } from "../../ui/common/cart-counter";
import { header } from "../../ui/common/header";
import {
  cleanCart,
  removeItem,
  renderCart,
  updateItemQuantity,
  updateSubtotal,
  updateTotal,
} from "./utils";

document.addEventListener("DOMContentLoaded", () => {
  header();
  cartCounter();
});

renderCart();
removeItem();
updateItemQuantity();
cleanCart();
updateSubtotal();
updateTotal();
