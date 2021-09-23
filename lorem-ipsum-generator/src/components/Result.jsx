import { useRef, useState } from "react";
import styled from "styled-components";
import { css, keyframes } from "styled-components";

const selectAllOnClick = keyframes`
  to {
    -webkit-user-select: text;
    user-select: text;
  }
`;

const animation = (props) => css`
  ${selectAllOnClick} 100ms step-end forwards
`;

const StyledResult = styled.div`
  min-height: 50px;
  background-color: ${(props) => (props.darkTheme ? "#111" : "#eee")};
  color: ${(props) => (props.darkTheme ? "white" : "black")};
  border: 2px solid ${(props) => (props.darkTheme ? "white" : "black")};
  border-radius: 3px;
  padding: 11px 10px;
  display: grid;
  grid-template-columns: max-content 1fr;
  position: relative;
  margin-bottom: 10px;
  & > button {
    justify-self: right;
    margin: 5px;
    font-size: ${(props) =>
      props.clipboardButtonText === "⎘" ? "1.5em" : "1.1em"};
    padding: ${(props) =>
      props.clipboardButtonText === "⎘" ? "0 5px" : "5px 5px"};
    background-color: ${(props) => (props.darkTheme ? "#eee" : "#111")};
    color: ${(props) => (props.darkTheme ? "#111" : "#eee")};
    border: 2px solid ${(props) => (props.darkTheme ? "#eee" : "#111")};
    border-radius: 3px;
    position: absolute;
    opacity: ${(props) => (props.clipboardButtonText === "⎘" ? "0.75" : 1)};
    cursor: pointer;
    pointer-events: ${(props) => props.clipboardButtonText !== "⎘" && "none"};
    transition: color 0.5s, background-color 0.5s, opacity 0.5s;
    white-space: nowrap;
    :hover {
      opacity: 1;
    }
  }
  & > div {
    grid-column: 1 / -1;
    align-self: center;
    -webkit-user-select: ${(props) => props.result.length > 0 && "all"};
    user-select: ${(props) => props.result.length > 0 && "all"};
    :focus {
      animation: ${(props) => props.result.length > 0 && animation};
    }
  }
`;

const Result = (props) => {
  const resultRef = useRef();
  const [clipboardButtonText, setClipboardButtonText] = useState("⎘");
  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(resultRef.current.innerText).then(
      () => {
        setClipboardButtonText("Copied to clipboard");
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          setClipboardButtonText("⎘");
        }, 2000);
      },
      () => {
        setClipboardButtonText("Can't copy");
        const timeout = setTimeout(() => {
          clearTimeout(timeout);
          setClipboardButtonText("⎘");
        }, 2000);
      }
    );
  };

  return (
    <StyledResult
      darkTheme={props.darkTheme}
      clipboardButtonText={clipboardButtonText}
      result={props.result}
    >
      {props.result.length > 0 && (
        <button title="Copy to clipboard" onClick={handleCopyToClipboard}>
          {clipboardButtonText}
        </button>
      )}
      <div ref={resultRef} tabIndex="0">
        {props.result.length > 0
          ? props.result
          : "Type a number above, the result will appear here."}
      </div>
    </StyledResult>
  );
};

export default Result;
