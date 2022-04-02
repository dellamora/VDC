import { Container, Lista } from "./styles";

import Link from "next/link";

const Header: React.FC = (): JSX.Element => {
  return (
    <Container elevation={0} bColor="blue">
      <Link href="/">Duo haters</Link>
      <Lista>
        <ul>
          <li>
            <Link href="">Homem</Link>
          </li>
          <li>
            <Link href="">Mulher</Link>
          </li>
          <li>
            <Link href="">Kids</Link>{" "}
          </li>
          <li>
            <Link href="">Esportes</Link>{" "}
          </li>
          <li>
            <Link href="">Marcas</Link>{" "}
          </li>
          <li>
            <Link href="">Coleções</Link>{" "}
          </li>
        </ul>
        <input type="search" placeholder="Procurar" />
      </Lista>
      <div>
        <button>fav</button>
        <button>carrinho</button>
      </div>
    </Container>
  );
};

export default Header;
