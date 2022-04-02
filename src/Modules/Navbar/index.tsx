import Link from "next/link";
import { Container, Icon, LinksNav, LineGray } from "./styles";

const Navbar: React.FC = (): JSX.Element => {
  const routes = [
    {
      href: "/",
      label: "Início",
    },
    {
      href: "/register",
      label: "Inscreva-se",
    },
    {
      href: "/about",
      label: "Sobre nós",
    },
  ];
  return (
    <Container>
      <Icon alt="Valorant Logo" />
      {/* <LineGray /> */}
      <LinksNav>
        {routes.map(route => (
          <Link href={route.href} key={route.href}>
            {route.label}
          </Link>
        ))}
      </LinksNav>
    </Container>
  );
};

export default Navbar;
