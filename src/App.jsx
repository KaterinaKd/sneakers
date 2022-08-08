function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40">
        <div className="header d-flex align-center">
          <img height={40} width={40} src="/img/logo.png" alt="logo" />
          <div>
            <h3 className="text-uppercase">React Sneaker</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>

        <ul className="d-flex">
          <li className="mr-30">
            <img
              className="mr-10"
              height={18}
              width={18}
              src="/img/card.svg"
              alt="card"
            />
            <span>
              <span>
                <b>1205</b>грн.
              </span>
            </span>
          </li>
          <li>
            <img src="/img/user.svg" alt="" />
          </li>
        </ul>
      </header>

      <div className="content p-40">
        <h1 className="mb-40">Все кроссовки</h1>

        <div className="sneakersContent">
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/1.jpg"
              alt="Sneakers"
            />
            <h5 className="cardDescription">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="price">Цена:</p>
                <b>7000 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/2.jpg"
              alt="Sneakers"
            />
            <h5 className="cardDescription">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="price">Цена:</p>
                <b>7000 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/4.jpg"
              alt="Sneakers"
            />
            <h5 className="cardDescription">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="price">Цена:</p>
                <b>7000 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>

          <div className="card">
            <img
              width={133}
              height={112}
              src="/img/sneakers/5.jpg"
              alt="Sneakers"
            />
            <h5 className="cardDescription">
              Мужские Кроссовки Nike Blazer Mid Suede
            </h5>
            <div className="d-flex justify-between align-center">
              <div>
                <p className="price">Цена:</p>
                <b>7000 грн.</b>
              </div>
              <button className="button">
                <img width={11} height={11} src="/img/plus.png" alt="Plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
