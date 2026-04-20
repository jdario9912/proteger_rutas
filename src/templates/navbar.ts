import { counterVisor } from "./counter-visor";

export const navBarTemplate = () => {
  const navBar = document.createElement("nav") as HTMLElement;
  const counterElem = counterVisor();

  navBar.innerHTML = `
    <ul>
      <li><a href="/src/pages/catalog/catalog.html">Catalog</a></li>
      <li><a href="/src/pages/cart/cart.html">Cart${counterElem}</a></li>
    </ul>
  `;

  return navBar;
};
