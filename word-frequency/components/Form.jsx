import styled from "styled-components";
import calculateOccurrences from "../utils/calculateOccurrences";
const StyledForm = styled.form`
  textarea {
    font-family: sans-serif;
    resize: none;
    /* padding: 10px; */
    border: 2px solid slateblue;
    border-radius: 5px;
    width: 100%;
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
`;

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");
    const occurrences = calculateOccurrences(text);

    props.handleDataUpdate(occurrences);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <label htmlFor="text">Enter the text in the field</label>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="30"
        defaultValue="Four Four Four Four One Two Two Three Three Three Five Five Five Five Five Six Six Six Six Six Six"
      ></textarea>
      <button>Calculate</button>
    </StyledForm>
  );
};

export default Form;
