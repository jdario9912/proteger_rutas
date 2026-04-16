type Props = {
  navbar: HTMLElement;
  logo: HTMLElement;
};

export const headerTemplate = ({ navbar, logo }: Props) => {
  const header = document.createElement("header") as HTMLElement;
  header.innerHTML = `
    ${logo.outerHTML}
    ${navbar.outerHTML}
  `;

  return header;
};
