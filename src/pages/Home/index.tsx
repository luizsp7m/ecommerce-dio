import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Product as ProductCard } from "../../components/Product";
import { api } from "../../services/api";
import { Container, ProductList } from "./styles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Product } from "../../types";

export function Home() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    api.get("/products").then(response => {
      setProducts(response.data);
    });
  }, []);

  return (
    <Container>
      <Header />

      <ProductList>
        {products.map(product => <ProductCard
          key={product.id}
          id={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />)}
      </ProductList>

      <ToastContainer />
    </Container>
  );
}