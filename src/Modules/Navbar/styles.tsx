import styled from "styled-components";
import IconSVG from "../../../public/assets/icon.svg";

export const Container = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

export const Icon = styled(IconSVG)`
  height: 30px;
  margin: 20px;
`;

export const LinksNav = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
  color: white;
  word-break: keep-all;
  p{
    
  }

`;

export const LineGray = styled.div`
  height: 1px;
  width: 80%;
  background: #5b646d;
`;
