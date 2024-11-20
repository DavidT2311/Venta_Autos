import cardincartModule from "./CardInCart.module.css";

const Card = ({ product }) => {
  const { ID, title, price, description, category, image, rating, quantity } =
    product;

  return (
    <div className={cardincartModule.card}>
      <img src={image} alt="" />
      <div className={cardincartModule.card_content}>
        <p className={cardincartModule.card_title}>{title}</p>
        <p className={cardincartModule.card_description}>
          Precio: {price}
          Cantidad: {quantity}
        </p>
      </div>
    </div>
  );
};

export default Card;
