/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";

import { Container, ProductTitle, ProductCategory } from "./styles";

interface IDetails {
  name: string;
  category: string[];
}

const ProductDetails: React.FC<IDetails> = ({
  name,
  category,
}): JSX.Element => {
  return (
    <Container>
      <ProductTitle>{name}</ProductTitle>
      <ProductCategory>{category.join(",")}</ProductCategory>
    </Container>
  );
};

export default ProductDetails;
