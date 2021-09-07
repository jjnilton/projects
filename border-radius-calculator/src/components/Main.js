import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
    from {
      transform: rotate(-45deg);
      opacity: 0;
    }
    to {
      transform: rotate(0deg);
      opacity: 1;
    }
`;

const Main = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  height: 100vh;
  max-width: 600px;
  margin: auto;
  min-width: 320px;

  & label,
  input {
    margin: 10px;
  }

  .left,
  .right {
    display: grid;
    grid-auto-rows: auto;
    margin-bottom: 5px;
  }

  .left {
    margin-left: 5px;
  }

  .right {
    margin-right: 5px;
  }

  .option {
    grid-template-columns: minmax(0, 1fr);
    text-align: center;
    color: white;
    margin: 5px;
    border-radius: 5px;
  }

  .top-left {
    display: grid;
    background: linear-gradient(90deg, #bd5220, orange);
  }

  .bottom-left {
    display: grid;
    background: linear-gradient(90deg, teal, #00f8f8);
  }

  .top-right {
    display: grid;
    background: linear-gradient(90deg, green, #00ff00);
  }

  .bottom-right {
    display: grid;
    background: linear-gradient(90deg, #685500, #f0f016);
  }

  .container {
    display: grid;
    grid-column: 1 / -1;
    padding: 10px;
  }

  .bordered {
    background: linear-gradient(45deg, brown, orange);
    width: 150px;
    height: 150px;
    border-radius: ${(props) => props.radius};
    justify-self: center;
    align-self: center;
    animation: ${rotate} 1s;
  }

  .css-code {
    grid-column: 1 / -1;
    display: grid;
    grid-template-columns: 1fr 0.5fr;
    gap: 10px;
    margin-bottom: 5px;
    & > code {
      background: lightgray;
      padding: 10px;
      border-radius: 5px;
      margin-left: 10px;
      &.active {
        font-weight: bold;
      }
    }
    & > button {
      background-color: black;
      color: white;
      border: none;
      padding: 10px;
      border-radius: 5px;
      margin-right: 10px;
      cursor: pointer;
      &:active {
        transform: scale(1.05);
        background-color: #222;
      }
    }
  }
`;

export default Main;
