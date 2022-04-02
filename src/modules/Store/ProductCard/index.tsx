/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { ProductInterface } from "../../../common/interfaces/Products";

import { Container, ImageContainer } from "./styles";

import Image from "next/image";
import PriceTag from "../PriceTag";
import useHover from "../../../common/libs/useHover";

import ProductDetails from "../ProductDetails";

const ProductCard: React.FC<ProductInterface> = ({
  name,
  images,
  price,
  salePrice,
  category,
}): JSX.Element => {
  const { ref, isHover } = useHover();
  return (
    <Container ref={ref}>
      <ImageContainer>
        <Image
          src={isHover ? images[1] : images[0]}
          width="1"
          height="1"
          layout="responsive"
          objectFit="cover"
        />
        <PriceTag price={price} salePrice={salePrice} isHover={isHover} />
      </ImageContainer>
      <ProductDetails name={name} category={category} />
    </Container>
  );
};

export default ProductCard;
