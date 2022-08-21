import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { id, num } = useParams();

  return (
    <div>
      <h1>
        Show Product Detail{id} {num}
      </h1>
    </div>
  );
};

export default ProductDetailPage;
