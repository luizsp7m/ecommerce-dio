import { useCart } from "../../hooks/useCart";
import { Container } from "./styles";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { formatPrice } from "../../util/format";
import { MdDelete } from "react-icons/md";

interface ProductCartProps {
  id: number;
  image: string;
  name: string;
  price: number;
  amountInCart: number;
}

export function ProductCart({ id, image, name, price, amountInCart }: ProductCartProps) {
  const { removeProductFromCart, updateProductAmount } = useCart();

  function handleRemoveProductFromCart() {
    removeProductFromCart(id);
  }

  function decreateProduct() {
    updateProductAmount({
      productId: id,
      amount: amountInCart - 1,
    });
  }

  function increaseProduct() {
    updateProductAmount({
      productId: id,
      amount: amountInCart + 1,
    });
  }

  const priceFormatted = formatPrice(price);
  const subTotal = formatPrice(price * amountInCart);

  return (
    <Container>
      <img src={image} alt={name} />

      <div className="product-information">
        <h3>{name}</h3>
        <span>{priceFormatted}</span>
      </div>

      <div className="amount-controller">
        <button
          disabled={amountInCart <= 1}
          onClick={decreateProduct}
        >
          <AiOutlineMinus size={14} color="#6332F6" />
        </button>

        <span>{amountInCart}</span>

        <button onClick={increaseProduct}>
          <AiOutlinePlus size={14} color="#6332F6" />
        </button>
      </div>

      <span>{subTotal}</span>

      <button onClick={handleRemoveProductFromCart}>
        <MdDelete size={18} color="#eb4d4b" />
      </button>
    </Container>
  );
}