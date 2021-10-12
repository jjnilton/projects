import styled from "styled-components";
import calculateOccurrences from "../utils/calculateOccurrences";
const StyledForm = styled.form`
  display: grid;
  grid-template-rows: repeat(3, max-content);
  textarea {
    padding: 10px;
    font-family: sans-serif;
    resize: vertical;
    border: 2px solid slateblue;
    border-radius: 5px;
    width: 100%;
    height: 50vh;
  }
  button {
    margin-top: 10px;
    background-color: slateblue;
    color: white;
    border: none;
    padding: 10px;
    box-shadow: 0px 5px 0 #241e47;
    border-radius: 5px;
    cursor: pointer;
  }
  button:active {
    transform: translateY(5px);
    box-shadow: none;
  }
  label > h2 {
    color: slateblue;
  }
`;

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");

    if (text.trim().length > 0) {
      const occurrences = calculateOccurrences(text);
      props.handleDataUpdate(occurrences);
    }
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
        ></textarea>
        <button>Calculate</button>
      </StyledForm>
    </>
  );
};

export default Form;
