import styled from "styled-components";
import { useRef, useState } from "react";

const Main = styled.main`
  min-width: 300px;
  max-width: 600px;
  padding: 10px;
  margin: auto; 
  & h1 {
    text-align: center;
    color: #333;
  }

  & > form {
    display: grid;
    grid-template-rows: 1fr auto 0.75fr 0.25fr;

    & > section#range {
      display: grid;
      grid-template-columns: 1fr 1fr;
      background-color: #eee;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 10px;
      border-radius: 5px;
      margin: 10px 0;

      & input {
        width: 100%;
        height: 3em;
      }

      &> div#how-to-use {
        grid-column: 1 / -1;
        font-size: 0.8em;
        &> p {
          margin: 0;
        }
      }
    }

    & > section#options {
      display: grid;
      grid-template-columns: 1fr;
    }

    & > div#result {
      background-color: #eee;
      border-radius: 5px;
      margin: 10px 0;
      padding: 10px;
      display: grid;
      & > div:nth-child(2) {
        font-size: 2em;
        overflow: auto;
      }
    }

    & > button {
      color: white;
      background-color: #0050fd;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      transition: transform .2s;
      &:hover {
        transform: scale(1.05);
      }

      &:active {
        background-color: #002d8d;
      }
    }
  }
`;

function App() {
  const [randomNumber, setRandomNumber] = useState();
  const minRef = useRef();
  const maxRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const formObj = {};
    for (const key of formData.keys()) {
      formObj[key] = formData.get(key);
    }

    const { min, max, fraction } = formObj;

    const getRandomNumber = (min, max, fraction) => {
      if (isNaN(min)) {
        min = 0;
        minRef.current.value = 0;
      }

      if (isNaN(max)) {
        max = 10;
        maxRef.current.value = 10;
      }

      const randomNumber = Math.random() * (+max - +min) + +min;
      return !!fraction ? randomNumber : Math.floor(randomNumber);
    };

    setRandomNumber(getRandomNumber(min, max, fraction));
  };

  return (
    <div className="container">
      <Main>
        <h1>Random Number Generator</h1>
        <form onSubmit={handleSubmit}>
          <section id="range">
            <div>
              <label htmlFor="min">Min</label>
              <input
                id="max"
                ref={minRef}
                type="number"
                name="min"
                defaultValue={0}
                step="any"
              />
            </div>
            <div>
              <label htmlFor="max">Max</label>
              <input
                id="max"
                ref={maxRef}
                type="number"
                name="max"
                defaultValue={10}
                step="any"
              />
            </div>
            <div id="how-to-use">
              <p>Minimum Inlusive, Maximum Exclusive.</p>
              <p>Example: 1 Min, 10 Max, possibilitiles include 1, 2...8, 9.</p>
            </div>
          </section>
          <section id="options">
            <div>
              <label htmlFor="fraction">Decimal with fraction</label>
              <input type="checkbox" name="fraction" id="fraction" />
            </div>
          </section>
          <div id="result">
            <div>Result</div>
            <div>{randomNumber || 0}</div>
          </div>
          <button>Get new number</button>
        </form>
      </Main>
      <footer>
        <a href="">Source</a>
      </footer>
    </div>
  );
}

export default App;
