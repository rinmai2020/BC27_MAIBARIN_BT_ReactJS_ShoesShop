import React from "react";
import ProductItem from "./ProductItem";
const ProductList = ({ products, onClick }) => {
  return (
    <div className="row">
      {products.map((product) => {
        return (
          <div key={product.id} className="col-xl-3 col-sm-4 mb-4 ">
            <ProductItem product={product} onClick={onClick} />
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
