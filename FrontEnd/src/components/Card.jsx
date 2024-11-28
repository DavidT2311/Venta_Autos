import React, { useState } from "react";
//Styles
import cardModule from "./Card.module.css";
//Font-Awesome
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartHover } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//Components
import Button from "./Button";
//Redux - cartSlice
import { addProductToCart } from "../redux/slices/cartSlice";

const Card = ({ product, action, setShow }) => {
  //Product
  const { ID, title, price, description, category, image, rating } = product;
  //State
  const [isBought, setIsBought] = useState(false);
  const [isInFavorite, setIsInFavorite] = useState(false);

  const handleChangeBought = () => {
    setIsBought(true);
    action(addProductToCart(product));
  };

  return (
    <article className={cardModule.card}>
      <div className={cardModule.header}>
        <img src={image} alt={title} />
        {!isInFavorite ? (
          <FontAwesomeIcon
            icon={faHeart}
            size="2x"
            color="mediumpurple"
            beatFade
            className={cardModule.heart_icon}
            onClick={() => setIsInFavorite(!isInFavorite)}
          />
        ) : (
          <FontAwesomeIcon
            icon={faHeartHover}
            size="2x"
            color="mediumpurple"
            className={cardModule.heart_icon}
            onClick={() => setIsInFavorite(!isInFavorite)}
          />
        )}
      </div>
      <div className={cardModule.card_head}>
        <h5 className={cardModule.card_title}>{title}</h5>
      </div>
      <div className={cardModule.card_content}>
        <div className={cardModule.card_category}>
          <strong className={cardModule.card_info_title}>Category</strong>
          <span className={cardModule.card_info}>{category}</span>
        </div>
        <div>
          <strong className={cardModule.card_info_title}>Calificacion: </strong>
          <span className={cardModule.card_info}>{rating.rate}</span>
        </div>
        <div>
          <strong className={cardModule.card_info_title}>Comprados: </strong>
          <span className={cardModule.card_info}>{rating.count}</span>
        </div>
      </div>
      <div className={cardModule.card_action}>
        {isBought ? (
          <Button
            text="Ver carrito"
            classes="green"
            handleEvent={() => setShow(true)}
          />
        ) : (
          <Button
            handleEvent={handleChangeBought}
            text={isBought ? "" : "Comprar"}
            classes={isBought ? "" : "blue"}
          />
        )}
        {!isBought ? (
          <span className={cardModule.card_price}>
            <strong>${price}</strong>
          </span>
        ) : (
          <Button
            handleEvent={handleChangeBought}
            text={isBought ? "Añadir otro" : ""}
            classes={isBought ? "blue" : ""}
          />
        )}
      </div>
    </article>
  );
};

export default Card;
