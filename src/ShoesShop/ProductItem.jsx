import React from "react";
const ProductItem = ({ product, onClick }) => {
  const { image, alias, name, price } = product;
  return (
    <div
      className="card border-white "
      style={{ boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px" }}
    >
      <img src={image} alt={alias} height="300px" width="100%" />
      <div className="card-body bg-warning">
        <h5 className="card-title">{name}</h5>
        <p className="cart-text">$ {price}</p>
        <button className="btn btn-light" onClick={() => onClick(product)}>
          Details
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
