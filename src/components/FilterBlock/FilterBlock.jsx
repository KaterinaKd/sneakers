import { useContext, useState } from "react";
import { ItemsContext } from "../../contexts/itemsContext";
import classes from "./FilterBlock.module.scss";

const FilterBlock = () => {
  const [searchValue, setSearchValue] = useState("");

  const { onSearchItem } = useContext(ItemsContext);

  const changeSearchInput = (event) => {
    const inputValue = event.target.value;

    setSearchValue(inputValue);

    onSearchItem(inputValue);
  };
  const clearSearchInput = () => {
    setSearchValue("");
  };
  return (
    <div className="d-flex justify-between align-center mb-40">
      <h1>
        {searchValue ? `Поиск по запросу: "${searchValue}"` : "Все кроссовки"}
      </h1>

      <div className={classes.searchBlock}>
        <img src="/img/search.svg" alt="Search" />

        <input
          onChange={changeSearchInput}
          value={searchValue}
          placeholder="Search..."
        />

        {searchValue.length > 0 && (
          <img
            onClick={clearSearchInput}
            className="remove"
            src="/img/btn-remove.svg"
            alt="remove"
          />
        )}
      </div>
    </div>
  );
};

export default FilterBlock;
