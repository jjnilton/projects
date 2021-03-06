import { useState } from "react";
import styled from "styled-components";
import calculateOccurrences from "../utils/calculateOccurrences";
const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(4, max-content);
  textarea {
    padding: 10px;
    font-family: sans-serif;
    resize: vertical;
    border: 2px solid slateblue;
    border-radius: 5px;
    width: 100%;
    height: 50vh;
    margin-bottom: 10px;
  }
  button {
    background: linear-gradient(slateblue, #4f468b);
    color: white;
    border: none;
    padding: 10px;
    box-shadow: 0px 5px 0 #241e47;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1em;
  }
  button:active {
    transform: translateY(5px);
    box-shadow: none;
  }
  button:hover {
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
    filter: brightness(1.1);
  }
  label > h2 {
    color: slateblue;
  }
`;

const ErrorMessage = styled.div`
  background-color: pink;
  padding: 5px;
  margin: 5px 0;
  border-radius: 5px;
  color: darkred;
`;

const Form = (props) => {
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");

    if (text.trim().length > 0) {
      const occurrences = calculateOccurrences(text);
      props.handleDataUpdate(occurrences);
      setShowErrorMessage(false);
    } else {
      setShowErrorMessage(true);
    }
  };

  const handleFocus = () => {
    setShowErrorMessage(false);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <label htmlFor="text">
          <h2>Your Text</h2>
        </label>
        <textarea
          name="text"
          id="text"
          placeholder="Enter a text to calculate the its word frequency"
          onFocus={handleFocus}
        ></textarea>
        {showErrorMessage && (
          <ErrorMessage>Input cannot be empty.</ErrorMessage>
        )}
        <button>Calculate</button>
      </StyledForm>
    </>
  );
};

export default Form;
