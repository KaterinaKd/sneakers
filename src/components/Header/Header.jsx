import { useContext } from "react";
import { ItemsContext } from "../../contexts/itemsContext";
import classes from "./Header.module.scss";

const Header = ({ onClickCart }) => {
  const { totalPrice } = useContext(ItemsContext);
  return (
    <header className="d-flex justify-between align-center p-40">
      <div className={classes.header}>
        <img height={40} width={40} src="img/logo.png" alt="logo" />
        <div>
          <h3 className="text-uppercase">React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>

      <ul className="d-flex">
        <li className="mr-30" onClick={onClickCart}>
          <img
            className="mr-10"
            height={18}
            width={18}
            src="img/cart.svg"
            alt="cart"
          />
          <span>
            <span>
              <b>{totalPrice}</b>грн.
            </span>
          </span>
        </li>
        <li>
          <img src="img/user.svg" alt="user" />
        </li>
      </ul>
    </header>
  );
};

export default Header;
