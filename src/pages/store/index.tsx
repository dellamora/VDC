/* eslint-disable @typescript-eslint/no-unused-vars */

import { useState, useEffect } from "react";
import React from "react";

/* import { Container } from "./styles"; */

import ProductCard from "../../modules/Store/ProductCard";
import { ProductInterface } from "../../common/interfaces/Products";
import axios from "axios";

const store: React.FC = (): JSX.Element => {
  const [products, setProducts] = useState<ProductInterface[]>(null);
  useEffect(() => {
    axios
      .post("http://localhost:3000/api/products", {
        category: { $all: ["Jaqueta"] },
      })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "1px",
        }}
      >
        {products &&
          products.map(prod => {
            return <ProductCard key={prod.id} {...prod}></ProductCard>;
          })}
      </div>
    </div>
  );
};

export default store;
