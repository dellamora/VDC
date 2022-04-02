import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  background-color: var(--primary-color);
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const SelectionContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 40px;
  div {
    margin: 8px 0;
  }
`;
