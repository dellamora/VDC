import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  position: absolute;
  left: 0.4rem;
  bottom: 0;
`;
export const Sep = styled.div`
  padding-bottom: 0.4rem;
`;

export const Span = styled.span<{
  salePrice?: boolean;
  disabled?: boolean;
  bold?: boolean;
}>`
  padding: 0.1rem 0.2rem;
  background-color: white;
  color: ${props =>
    props.disabled ? "var(--text-400)" : props.salePrice ? "red" : "black"};
  text-decoration: ${props => (props.disabled ? "line-through" : "none")};
  font-weight: ${props => (props.bold ? "500" : "300")};
`;
