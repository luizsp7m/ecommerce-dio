import { Container, ProductImage, ProductBody } from "./styles";
import { BsCartPlusFill } from "react-icons/bs";
import { useCart } from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { Stock } from "../../types";
import { api } from "../../services/api";
import { formatPrice } from "../../util/format";

interface ProductProps {
  id: number;
  image: string;
  name: string;
  price: number;
}

export function Product({ id, image, name, price }: ProductProps) {
  const { addProductToCart, cart } = useCart();

  function handleAddProductToCart() {
    addProductToCart(id);
  }

  const priceFormatted = formatPrice(price);

  return (
    <Container>
      <ProductImage>
        <img src={image} alt={name} />
      </ProductImage>

      <ProductBody>
        <h1>{priceFormatted}</h1>
        <span>{name}</span>
        <button onClick={handleAddProductToCart}>
          <div>
            <BsCartPlusFill size={18} color="#fafafa" />
          </div>

          <span>Adicionar ao carrinho</span>
        </button>
      </ProductBody>
    </Container>
  );
}