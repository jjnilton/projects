import { useState } from "react";
import "./App.css";

const DICT = [
  { QUARTER: 0.25 },
  { DIME: 0.1 },
  { NICKEL: 0.05 },
  { PENNY: 0.01 },
];

const dollarToCents = (value) => {
  let result = {};

  for (let unit of DICT) {
    let unitKey = Object.keys(unit).toString();
    let unitValue = parseFloat(Object.values(unit));

    while (value >= unitValue) {
      result[unitKey] = Math.floor(value / unitValue);
      value = +(value % unitValue).toFixed(2);
    }
  }
  return result;
};

function App() {
  const [cents, setCents] = useState({
    QUARTER: 4,
    DIME: 0,
    NICKEL: 0,
    PENNY: 0,
  });
  const [error, setError] = useState(false);
  const handleInputChange = (event) => {
    let longFractional = false;
    if (event.target.value.includes(".")) {
      if (event.target.value.split(".")[1].length > 2) {
        longFractional = true;
      }
    }

    const value = +event.target.value;
    if (value <= 0 || longFractional) {
      console.log("error");
      setError(true);
    } else {
      setError(false);
      const result = dollarToCents(event.target.value);
      setCents(result);
    }
  };

  return (
    <div className="App">
      <div className="result-container">
        <div className="result">
          <div>
            Quarter (0.25)<div>{cents["QUARTER"] || 0}</div>
          </div>
          <div>
            Dime (0.10)<div>{cents["DIME"] || 0}</div>
          </div>
          <div>
            Nickel (0.05)<div>{cents["NICKEL"] || 0}</div>
          </div>
          <div>
            Penny (0.01)<div>{cents["PENNY"] || 0}</div>
          </div>
        </div>
      </div>
      <div className="input">
        <label htmlFor="value">Value in Dollar</label>
        <div className="input-container">
          <div className="dollar-sign">$</div>
          <input
            id="value"
            type="number"
            step="any"
            min="1"
            onChange={handleInputChange}
            defaultValue="1"
          />
        </div>

        <div className="error">
          {error ? (
            <span className="warning">
              Only positive decimal values allowed.
            </span>
          ) : (
            <span>
              Enter a value above. Example <code>1.67</code>.
            </span>
          )}
        </div>
      </div>

      <footer>
        <a href="">Source</a>
      </footer>
    </div>
  );
}

export default App;
