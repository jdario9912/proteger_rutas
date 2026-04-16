import { headerTemplate } from "../templates/header";
import { logoTemplate } from "../templates/logo";
import { navBarTemplate } from "../templates/navbar";

export const headerUI = headerTemplate({
  logo: logoTemplate(),
  navbar: navBarTemplate(),
});
