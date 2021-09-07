import "./App.css";
import { useState } from "react";

// handle binary to decimal (integral part)
const integralPartToDecimal = (integralBinaryNumber) => {
  const binaryInput = integralBinaryNumber.toString();
  let integralDecimalResult = "";

  let power = binaryInput.length - 1;
  for (let i = 0; i < binaryInput.length; i++) {
    integralDecimalResult = +integralDecimalResult +binaryInput[i] * Math.pow(2, power);
    power--;
  }
  return integralDecimalResult;
};

// handle binary to decimal (fractional part)
const fractionalPartToDecimal = (fractionalBinaryNumber) => {
  let fractionalPart = fractionalBinaryNumber;
  let fractionalDecimalResult = 0;
  for (let i = 0; i < fractionalPart.length; i++) {
    fractionalDecimalResult += (fractionalPart[i] * 1) / Math.pow(2, i + 1);
  }
  return fractionalDecimalResult;
};

// handle decimal to binary (integral part)
const integralPartToBinary = (integralNumber) => {
  let quotient = integralNumber;
  const remainder = [];
  if (+quotient === 0) {
    return 0;
  }
  while (+quotient > 0) {
    remainder.push(+quotient % 2);
    quotient = Math.floor(+quotient / 2);
  }
  return remainder.reverse().join("");
};

// handle decimal to binary (fractional part)
const fractionalPartToBinary = (fractionalNumber) => {
  let product = fractionalNumber;
  let productArray = product.split(".");
  product = productArray[1] / Math.pow(10, productArray[1].length);
  let remainder = [];
  let count = 0;
  if (product === 0) {
    return "";
  } else {
    while (product !== 1 && count < 13) {
      product = product * 2;
      remainder.push(Math.floor(product % 2));
      if (product > 1) {
        product = product.toString().split(".");
        product = +product[1] / Math.pow(10, product[1].length);
      }
      count++;
    }
  }

  return `.${remainder.join("")}`;
};

function App() {
  const [binary, setBinary] = useState("");
  const [binaryError, setBinaryError] = useState(false);
  const [decimal, setDecimal] = useState("");
  const [decimalError, setDecimalError] = useState(false);

  const handleBinaryToDecimal = (event) => {
    let binaryInput = event.target.value;
    setBinary(event.target.value);
    
    if (!binaryInput.match(/^(-)?[0-1]*(\.[0-1]*)?$/g)) {
      setBinaryError(true);
    } else {
      setBinaryError(false);
      setDecimalError(false);
      let result = event.target.value;
      let negative = false;

      if (result.match(/^-/g)) {
        result = result.split("-")[1];
        negative = true;
      }

      if (result === "") {
        setDecimal("");
      } else {
        let fractionalResult = "";

        if (result.includes(".")) {
          let fractionalPart = result.split(".")[1];
          result = result.split(".")[0];
          fractionalResult = fractionalPartToDecimal(fractionalPart);
        }

        const decimalResult = fractionalResult
          ? integralPartToDecimal(result) + fractionalResult
          : integralPartToDecimal(result);
        setDecimal(negative ? "-" + decimalResult : decimalResult);
      }
    }
  };

  const handleDecimalChange = (event) => {
    let decimalInput = event.target.value;
    setDecimal(event.target.value);

    if (decimalInput.match(/^-?[0-9]*(\.[0-9]*)?$/g)) {
      setDecimalError(false);
      setBinaryError(false);
      let negative = false;

      if (decimalInput.match(/^-/g)) {
        decimalInput = decimalInput.split("-")[1];
        negative = true;
      }

      if (decimalInput === "") {
        setBinary("");
      } else {
        let fractionalPartResult = "";

        if (decimalInput.includes(".")) {
          fractionalPartResult = fractionalPartToBinary(decimalInput);
          decimalInput = decimalInput.split(".")[0];
        }

        const integralPartResult = negative
          ? "-" + integralPartToBinary(decimalInput)
          : integralPartToBinary(decimalInput);
        setBinary(integralPartResult + fractionalPartResult);
      }
    } else {
      setDecimalError(true);
    }
  };

  return (
    <>
      <div className="main">
        <div className="title">
          <h1></h1>
        </div>
        <div className="converter">
          <div className="description">Enter a binary number</div>
          <input
            id="binaryInput"
            name="binary"
            type="text"
            value={binary}
            autoComplete="off"
            placeholder="1011"
            onChange={handleBinaryToDecimal}
          />
          <label htmlFor="binaryInput">Binary</label>
          {binaryError ? (
            <div className="error">
              <span>Invalid binary number. Try: '1101' or '11.01'.</span>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
        <div className="equals">=</div>
        <div className="converter">
          <div className="description">Enter a decimal number</div>
          <input
            id="decimalInput"
            type="text"
            name="decimal"
            value={decimal}
            autoComplete="off"
            placeholder="1234"
            onChange={handleDecimalChange}
          />
          <label htmlFor="decimalInput">Decimal</label>
          {decimalError ? (
            <div className="error">
              <span>Invalid decimal number. Try: '123' or '1.23'.</span>
            </div>
          ) : (
            <div className="hidden"></div>
          )}
        </div>
      </div>
      <div className="footer">
        <a href="">Source</a>
      </div>
    </>
  );
}

export default App;
