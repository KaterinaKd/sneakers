import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import { useState } from "react";
import FilterBlock from "./components/FilterBlock/FilterBlock";
import Home from "./components/Pages/Home";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setIsOpenDrawer(isOpenDrawer === true ? false : true);
  };

  return (
    <div className="wrapper clear">
      {isOpenDrawer && <Drawer handleOpenDrawer={handleOpenDrawer} />}

      <Header onClickCart={handleOpenDrawer} />

      <div className="content p-40">
        <FilterBlock />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
