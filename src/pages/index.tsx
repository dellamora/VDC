import styled from "styled-components";

import axios from "axios";

const Teste = styled.h1`
  color: red;
`;

export default function Home(): JSX.Element {
  return (
    <>
      <Teste>Hello, ReactJS!</Teste>
    </>
  );
}
