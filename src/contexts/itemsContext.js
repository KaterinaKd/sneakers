import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext({});

const ItemsProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get("https://62fbaca8e4bcaf53518ad18e.mockapi.io/items")
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });

    axios
      .get("https://62fbaca8e4bcaf53518ad18e.mockapi.io/cart")
      .then((res) => {
        setItemsCart(res.data);
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    const totalPrice = itemsCart.reduce(
      (acc, value) => (acc += +value.price),
      0
    );
    setTotalPrice(totalPrice);
  }, [itemsCart]);

  const onAddToCart = (obj) => {
    axios.post("https://62fbaca8e4bcaf53518ad18e.mockapi.io/cart", obj);
    setItemsCart([...itemsCart, obj]);
  };

  const onRemoveFromCart = (id) => {
    axios.delete(`https://62fbaca8e4bcaf53518ad18e.mockapi.io/cart/${id}`);
    const newItems = itemsCart.filter((value) => {
      return value.id !== id;
    });

    setItemsCart(newItems);
  };

  const onSearchItem = (searchValue) => {
    const searchedItems = items.filter((obj) =>
      obj.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setItems(searchedItems);
  };

  return (
    <ItemsContext.Provider
      value={{
        itemsCart,
        items,
        onAddToCart,
        onRemoveFromCart,
        onSearchItem,
        isLoading,
        totalPrice,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
};

export default ItemsProvider;
