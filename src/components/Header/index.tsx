import { Container, HeaderWrapper, Logo, HeaderBody, SearchInput } from "./styles";
import { FaShoppingCart, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../../hooks/useCart";
import { formatPrice } from "../../util/format";

export function Header() {
  const { cart } = useCart();

  const productsInCart = cart.length;

  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amountInCart;
    }, 0)
  );

  return (
    <Container>
      <HeaderWrapper>
        <Logo>
          <h1>DIO Shop</h1>
        </Logo>

        <HeaderBody>
          {/* <SearchInput>
            <input type="text" placeholder="Digite o nome do produto aqui" />
            <button>
              <FaSearch size={18} color="#ccc" />
            </button>
          </SearchInput> */}

          <Link to="/cart">
            <FaShoppingCart size={18} color="#ccc" />
          </Link>

          <span>{productsInCart} {productsInCart === 1 ? "item" : "itens"} - {total}</span>
        </HeaderBody>
      </HeaderWrapper>
    </Container>
  );
}