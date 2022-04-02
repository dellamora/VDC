/* eslint-disable @typescript-eslint/no-unused-vars */

import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { ProductInterface } from "../../common/interfaces/Products";

/* import { Container } from "./styles"; */

const ByCategory: React.FC = (): JSX.Element => {
  const {
    query: { category },
  } = useRouter();
  const [products, setProducts] = useState<ProductInterface[]>(null);
  useEffect(() => {
    if (typeof category == "undefined") {
      return;
    }
    axios
      .post("http://localhost:3000/api/products", {
        category: { $all: [category] },
      })
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [category]);
  return (
    <div>
      <h1> Hello, {category}!</h1>
      products {products?.length}
    </div>
  );
};

export default ByCategory;
