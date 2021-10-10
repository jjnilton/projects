import styled from "styled-components";
import calculateOccurrences from "../utils/calculateOccurrences";
const StyledForm = styled.form``;

const Form = (props) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const text = formData.get("text");
    const occurrences = calculateOccurrences(text);

    props.handleDataUpdate(occurrences);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="text">Text</label>
      <textarea
        name="text"
        id="text"
        cols="30"
        rows="30"
        defaultValue="Four Four Four Four One Two Two Three Three Three"
      ></textarea>
      <button>Calculate</button>
    </form>
  );
};

export default Form;
