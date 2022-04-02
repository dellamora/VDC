import styled from "styled-components";

export const Container = styled.nav<{ elevation: number; bColor: string }>`
  min-height: 4rem;
  width: 100%;
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  box-shadow: ${props => `0px ${props.elevation}px ${props.elevation}px black`};
  border: ${props => `5px solid ${props.bColor}`};
  h1 {
    color: green;
  }
`;
export const Lista = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    list-style: none;
    display: grid;
    grid-gap: 1.5rem;
  }
`;
