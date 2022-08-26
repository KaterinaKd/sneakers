import { useContext } from "react";
import { ItemsContext } from "../../contexts/itemsContext";
import Info from "../Info/Info";
import classes from "./Drawer.module.scss";

const Drawer = ({ handleOpenDrawer }) => {
  const { itemsCart, onRemoveFromCart } = useContext(ItemsContext);

  return (
    <div className={classes.drawer}>
      <div className={classes.drawerBlock}>
        <div className="mb-30">
          <div className="d-flex align-center justify-between">
            <h3 className="">Корзина</h3>

            <img
              onClick={handleOpenDrawer}
              className="classes.removeBtn"
              src="img/btn-remove.svg"
              alt="Remove"
            />
          </div>

          {itemsCart.length ? (
            itemsCart.map((obj) => (
              <div key={obj.id} className={classes.cartItem}>
                <img
                  className="mr-20"
                  width={70}
                  height={70}
                  src={obj.imageUrl}
                  alt="sneakers"
                />

                <div className="mr-20">
                  <p className="mb-5">{obj.title}</p>
                  <b>{obj.price} грн.</b>
                </div>

                <img
                  className={classes.removeBtn}
                  src="img/btn-remove.svg"
                  onClick={() => {
                    onRemoveFromCart(obj.id);
                  }}
                  alt="Remove"
                />
              </div>
            ))
          ) : (
            <Info />
          )}
        </div>
      </div>
    </div>
  );
};

export default Drawer;
