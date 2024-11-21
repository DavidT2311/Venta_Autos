//Styles
import cardincartModule from "./CardInCart.module.css";
//Components
import Button from "./Button";
//Redux - cartSlice
import {
  addProductToCart,
  deleteProductFromCart,
} from "../redux/slices/cartSlice";

const CardInCart = ({ product, action }) => {
  const { ID, title, price, description, category, image, rating, quantity } =
    product;

  return (
    <article className={cardincartModule.card}>
      <div className={cardincartModule.header}>
        <img src={image} alt={title} />
      </div>
      <div className={cardincartModule.card_head}>
        <h5 className={cardincartModule.card_title}>{title}</h5>
      </div>
      <div className={cardincartModule.card_content}>
        <div className={cardincartModule.card_category}>
          <strong className={cardincartModule.card_info_title}>
            Categoria
          </strong>
          <span className={cardincartModule.card_info}>{category}</span>
        </div>
        <div>
          <strong className={cardincartModule.card_info_title}>
            Cantidad:
          </strong>
          <span className={cardincartModule.card_info}>{quantity}</span>
        </div>
        <div>
          <strong className={cardincartModule.card_info_title}>
            Calificacion:
          </strong>
          <span className={cardincartModule.card_info}>{rating.rate}</span>
        </div>
      </div>
      <div className={cardincartModule.card_action}>
        <Button
          text="Agregar"
          classes="green"
          handleEvent={() => action(addProductToCart(product))}
        />
        <Button
          text="Disminuir"
          classes="red"
          handleEvent={() => action(deleteProductFromCart(product))}
        />
        <span className={cardincartModule.card_price}>
          <strong>${price}</strong>
        </span>
      </div>
    </article>
  );
};

export default CardInCart;
