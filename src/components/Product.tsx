import React from "react";

const PRODUCT = {
  name: "Produto Genérico",
  description: "Descrição breve do produto.",
  price: 99.99,
  paymentLink: "https://pagar.me/checkout?code=EXEMPLO" // Troque pelo link real
};

const Product: React.FC = () => {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-lg shadow-md p-6 text-center">
      <h2 className="text-2xl font-bold mb-2">{PRODUCT.name}</h2>
      <p className="mb-4 text-gray-700">{PRODUCT.description}</p>
      <p className="mb-4 text-lg font-semibold">R$ {PRODUCT.price.toFixed(2)}</p>
      <a
        href={PRODUCT.paymentLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Comprar
      </a>
    </div>
  );
};

export default Product;
