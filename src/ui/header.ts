export const createHeader = () => {
  const header = document.createElement("header") as HTMLElement;
  header.innerHTML = `
    <h1>Food Store</h1>
    <nav>
        <ul>
            <li>
                <a href="/pages/catalogo/catalogo.html">Catalogo</a>
            </li>
            <li>
                <a href="/pages/carrito/carrito.html">Carrito</a>
            </li>
        </ul>
    </nav>
  `;

  return header;
};
// header.style.display = "flex";
// header.style.justifyContent = "space-between";
// header.style.alignItems = "center";
// header.style.padding = "1rem";
// header.style.borderBottom = "1px solid var(--separator-color)";
