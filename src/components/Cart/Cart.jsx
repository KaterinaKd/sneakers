import React from "react";
import classes from "./Cart.module.scss";

const Cart = ({
  onPlus,
  imageUrl,
  title,
  price,
  id,
  onAddToCart,
  onRemoveFromCart,
}) => {
  const [isAdded, setIsAdded] = React.useState(false);

  const onClickPlus = () => {
    if (isAdded === false) {
      const newItem = { title, price, imageUrl, id };
      onAddToCart(newItem);
    } else {
      onRemoveFromCart(id);
    }
    setIsAdded(isAdded ? false : true);
  };

  return (
    <div className={classes.cart}>
      <img
        onClick={onPlus}
        className="mb-30"
        width={133}
        height={112}
        src={imageUrl}
        alt="Sneakers"
      />
      <h5 className={classes.cartDescription}>{title}</h5>
      <div className="d-flex justify-between align-center">
        <div>
          <p className={classes.price}>Цена:</p>
          <b>{price} грн.</b>
        </div>
        <button className={classes.button} onClick={onClickPlus}>
          <img src={isAdded ? "img/plus.svg" : "img/unPlus.svg"} alt="Plus" />
        </button>
      </div>
    </div>
  );
};
export default Cart;
