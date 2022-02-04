import { Container, CartList, CardListHeader, CardListBody, CardListFooter } from "./styles";
import { Header } from "../../components/Header";
import { MdDelete } from "react-icons/md";
import { ProductCart } from "../../components/ProductCart";
import { useCart } from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { formatPrice } from "../../util/format";

export function Cart() {
  const { cart, removeAllProductsFromCart } = useCart();

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amountInCart;
    }, 0)
  );

  return (
    <Container>
      <Header />

      <CartList>
        <Link to="/">Voltar</Link>

        <CardListHeader>
          <h1>Lista de produtos</h1>
          <button onClick={removeAllProductsFromCart}>
            <MdDelete size={18} color="#eb4d4b" />
            Remover todos os produtos
          </button>
        </CardListHeader>

        <CardListBody>
          {cart.map(product => (
            <ProductCart
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              amountInCart={product.amountInCart}
            />
          ))}
        </CardListBody>

        <CardListFooter>
          <h1>Total: {total}</h1>
        </CardListFooter>
      </CartList>

      <ToastContainer />
    </Container>
  );
}