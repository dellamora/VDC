/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import { Container, Sep, Span } from "./styles";

interface IProps {
  price: number;
  salePrice: number;
  isHover: boolean;
}

const variants = {
  hover: { paddingBottom: "0.4rem" },
  normal: { paddingBottom: "0.0rem" },
};

const PriceTag: React.FC<IProps> = ({
  price,
  salePrice,
  isHover,
}): JSX.Element => {
  const isOnSale = salePrice && salePrice != price;
  const salePercentage = Math.round((salePrice / price) * 100);
  return (
    <Container animate={isHover ? "hover" : "normal"} variants={variants}>
      {isOnSale ? (
        <>
          <Span bold>-{salePercentage}%</Span>
          <Sep />
          <Span disabled>R$ {price}</Span>
          <Span salePrice>R$ {salePrice}</Span>
        </>
      ) : (
        <>
          <Span>R$ {price}</Span>
        </>
      )}
    </Container>
  );
};

export default PriceTag;
