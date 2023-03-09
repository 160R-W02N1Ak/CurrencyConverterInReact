


function App() {
  return (
    <>
    <header className="header">
    <h1 className="header__h1">💰Witamy w prostym kalkulatorze walut💰</h1>
    <hr className="header__hr"></hr>

  </header>

  <main className="main">
    <form className="form">
      <fieldset className="main__fieldset">
        <legend className="main__legend">Wpisz dane :</legend>
        <p>
          <label>Wybierz walutę:
            <select className="currency1">
              <option value="4.8606">EUR(4.8606)</option>
              <option value="4.9588">USD(4.9588)</option>
              <option value="5.0065">CHF(5.0065)</option>
              <option value="5.5505">GBP(5.5505)</option>
              <option value="1.0" selected>PLN(1.0)</option>
              <option value="93.872">BTC(93.872)</option>
            </select>
          </label>
        </p>
        <p>
          <label>Wpisz kwotę*:
            <input className="currency2" type="number" min="1" step="any" required />
          </label>
        </p>

      </fieldset>
      <p>*Kurs na podstawie wartości z dnia 19.10.2022r.</p>
      <p>
        <button className="main__button">Przelicz</button>
      </p>
    </form>
    <p>Wynik w Złotych polskich(PLN): <strong className="result">N/A</strong></p>
  </main>
    </>
  );
}

export default App;
