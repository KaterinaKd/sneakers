import { useContext } from "react";
import { ItemsContext } from "../../contexts/itemsContext";
import Cart from "../Cart/Cart";
import Skeleton from "../Skeleton";

const Home = () => {
  const { isLoading, items, onRemoveFromCart, onAddToCart } =
    useContext(ItemsContext);

  const renderItems = () => {
    return isLoading
      ? [...Array(4)].map((_, index) => <Skeleton key={index} />)
      : items.map((obj, index) => (
          <Cart
            onRemoveFromCart={onRemoveFromCart}
            id={obj.id}
            key={index}
            onAddToCart={onAddToCart}
            title={obj.title}
            price={obj.price}
            imageUrl={obj.imageUrl}
            {...items}
          />
        ));
  };
  return <div className="sneakersContent">{renderItems()}</div>;
};

export default Home;
