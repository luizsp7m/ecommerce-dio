import { createContext, ReactNode, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { Product, Stock } from "../types";

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProductToCart: (id: number) => Promise<void>;
  removeProductFromCart: (id: number) => void;
  removeAllProductsFromCart: () => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => Promise<void>;
}

const CartContext = createContext({} as CartContextData);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Product[]>(() => {
    const storageCart = localStorage.getItem("@ecommercedio:cart");

    if(storageCart) {
      return JSON.parse(storageCart);
    }

    return [];
  });

  async function addProductToCart(productId: number) {
    const updateCart = [...cart];

    const productExistsInCart = updateCart.find(product => product.id === productId);

    if(productExistsInCart) {
      toast.error("O produto já está no carrinho");
      return;
    }

    const { data: stock } = await api.get(`/stock/${productId}`);

    if (stock.amount <= 0) {
      toast.error("Produto fora de estoque");
      return;
    }

    const { data: product } = await api.get(`/products/${productId}`);
    const newProductInCart = { ...product, amountInCart: 1 };
    updateCart.push(newProductInCart);

    toast.success("Produto adicionado ao carrinho");

    setCart(updateCart);

    localStorage.setItem("@ecommercedio:cart", JSON.stringify(updateCart));
  }

  function removeProductFromCart(productId: number) {
    const updateCart = [...cart];
    const productIndex = updateCart.findIndex(product => product.id === productId);
    updateCart.splice(productIndex, 1);
    setCart(updateCart);

    localStorage.setItem("@ecommercedio:cart", JSON.stringify(updateCart));
  }

  function removeAllProductsFromCart() {
    setCart([]);
    localStorage.removeItem("@ecommercedio:cart");
  }

  async function updateProductAmount({ productId, amount }: UpdateProductAmount) {
    const updateCart = [...cart];

    const { data: stock } = await api.get(`/stock/${productId}`);

    if(stock.amount < amount) {
      toast.error("Produto sem estoque");
      return;
    }

    const productIndex = updateCart.findIndex(product => product.id === productId);
    updateCart[productIndex].amountInCart = amount;
    setCart(updateCart);
    localStorage.setItem("@ecommercedio:cart", JSON.stringify(updateCart));
  }

  return (
    <CartContext.Provider value={{
      cart, addProductToCart, removeProductFromCart, removeAllProductsFromCart, updateProductAmount
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}