import { createHeader } from "../../ui/header";

document.addEventListener("DOMContentLoaded", () => {
  const app = document.getElementById("app") as HTMLDivElement;
  app.appendChild(createHeader());
});
