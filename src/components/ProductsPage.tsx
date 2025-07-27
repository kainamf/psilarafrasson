import React, { useState } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Produto Genérico",
    description: "Descrição breve do produto.",
    price: 99.99,
  },
  {
    id: 2,
    name: "Produto Extra",
    description: "Outro produto de exemplo.",
    price: 49.99,
  },
];

const ProductList: React.FC<{ onAddToCart: (product: any) => void }> = ({ onAddToCart }) => (
  <div className="flex flex-col gap-6 items-center">
    {PRODUCTS.map((product) => (
      <div key={product.id} className="max-w-sm bg-white rounded-lg shadow-md p-6 text-center">
        <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
        <p className="mb-4 text-gray-700">{product.description}</p>
        <p className="mb-4 text-lg font-semibold">R$ {product.price.toFixed(2)}</p>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          onClick={() => onAddToCart(product)}
        >
          Adicionar ao Carrinho
        </button>
      </div>
    ))}
  </div>
);

const Cart: React.FC<{ cart: any[]; onRemove: (id: number) => void; onCheckout: () => void }> = ({ cart, onRemove, onCheckout }) => (
  <div className="max-w-md mx-auto mt-8 bg-gray-50 rounded-lg shadow p-6">
    <h3 className="text-xl font-bold mb-4">Carrinho</h3>
    {cart.length === 0 ? (
      <p className="text-gray-500">Seu carrinho está vazio.</p>
    ) : (
      <ul className="mb-4">
        {cart.map((item) => (
          <li key={item.id} className="flex justify-between items-center mb-2">
            <span>{item.name} - R$ {item.price.toFixed(2)}</span>
            <button className="text-red-500" onClick={() => onRemove(item.id)}>Remover</button>
          </li>
        ))}
      </ul>
    )}
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition w-full"
      onClick={onCheckout}
      disabled={cart.length === 0}
    >
      Finalizar Compra
    </button>
  </div>
);

const ProductsPage: React.FC = () => {
  const [cart, setCart] = useState<any[]>([]);

  const handleAddToCart = (product: any) => {
    setCart((prev) => [...prev, product]);
  };

  const handleRemove = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const handleCheckout = async () => {
    // Simulação de chamada para backend
    alert("Redirecionando para pagamento...");
    // Aqui você faria um fetch para o backend, que retorna o link do Pagar.me
    // Exemplo:
    // const res = await fetch('/api/checkout', { method: 'POST', body: JSON.stringify(cart) });
    // const { paymentUrl } = await res.json();
    // window.location.href = paymentUrl;
    window.open("https://pagar.me/checkout?code=EXEMPLO", "_blank"); // Simulação
  };

  return (
    <div className="py-8">
      <ProductList onAddToCart={handleAddToCart} />
      <Cart cart={cart} onRemove={handleRemove} onCheckout={handleCheckout} />
    </div>
  );
};

export default ProductsPage;
