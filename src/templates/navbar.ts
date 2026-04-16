export const navBarTemplate = () => {
  const navBar = document.createElement("nav") as HTMLElement;

  navBar.innerHTML = `
    <ul>
      <li><a href="/src/pages/catalog/catalog.html">Catalog</a></li>
      <li><a href="/src/pages/cart/cart.html">Cart</a></li>
    </ul>
  `;

  return navBar;
};
