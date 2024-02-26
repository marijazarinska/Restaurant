import React from 'react';

function Product({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
      <img src={product.img} alt={product.title} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h2 className="text-xl font-semibold">{product.title}</h2>
    </div>
  );
}

export default Product;
