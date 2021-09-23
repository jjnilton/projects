import styled from "styled-components";
import { loremIpsum } from "lorem-ipsum";
import { useRef } from "react";

const StyledForm = styled.div`
  display: grid;
  margin: 10px 0;
  & > form {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(236px, 1fr));
    gap: 10px;

    & div:first-child {
      align-self: center;
    }
    & label[for="quantity"] {
      display: block;
      margin-bottom: 5px;
      color: ${(props) => (props.darkTheme ? "white" : "black")};
      white-space: nowrap;
    }
    & input[type="number"] {
      width: 100%;
      padding: 10px;
      border: 2px solid ${(props) => (props.darkTheme ? "white" : "black")};
      border-radius: 3px;
      background-color: ${(props) => (props.darkTheme ? "black" : "white")};
      color: ${(props) => (props.darkTheme ? "white" : "black")};
      caret-color: ${(props) => (props.darkTheme ? "white" : "black")};
      &::placeholder {
        color: ${(props) => (props.darkTheme ? "white" : "black")};
      }
    }

    & span {
      background-color: ${(props) => (props.darkTheme ? "white" : "black")};
      color: ${(props) => (props.darkTheme ? "black" : "white")};
      border-radius: 3px;
      padding: 0 3px;
    }
  }

  & > form div:nth-child(2) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-top: 26px;
    border: 2px solid ${(props) => (props.darkTheme ? "white" : "black")};
    border-radius: 3px;
    @media (max-width: 500px) {
      margin-top: 0;
    }
  }

  & input[type="radio"] {
    display: none;
  }

  & input[type="radio"] + label {
    background-color: ${(props) => (props.darkTheme ? "black" : "white")};
    color: ${(props) => (props.darkTheme ? "white" : "black")};
    height: 100%;
    display: block;
    cursor: pointer;
    text-align: center;
    display: grid;
    align-items: center;
    transition: background-color 0.2s, color 0.2s;
    @media (max-width: 500px) {
      padding: 8px 0;
    }
  }

  & input[type="radio"]:not(:checked) + label:first-of-type,
  input[type="radio"]:not(:checked) + label:last-of-type {
    border-radius: 3px;
  }

  & input[type="radio"]:checked + label {
    background: ${(props) => (props.darkTheme ? "white" : "black")};
    color: ${(props) => (props.darkTheme ? "black" : "white")};
  }
`;
const Form = (props) => {
  const formRef = useRef();

  const handleChange = () => {
    const form = new FormData(formRef.current);
    const quantity = +form.get("quantity");
    const setting = form.get("setting");
    if (quantity > 0) {
      try {
        const result = loremIpsum({
          count: quantity,
          units: setting,
          format: "plain",
        });
        if (quantity > 999) {
          props.warning(true);
        } else {
          props.warning(false);
        }
        props.result(result);
      } catch (error) {
        props.result(["Can't generate that many."]);
      }
    } else {
      props.result([]);
      props.warning(false);
    }
  };

  return (
    <StyledForm darkTheme={props.darkTheme}>
      <form action="" ref={formRef}>
        <div>
          <label htmlFor="quantity">
            Enter the number of the{" "}
            <span>
              {formRef.current ? formRef.current.setting.value : "words"}
            </span>
          </label>
          <input
            type="number"
            name="quantity"
            min="0"
            max="100000"
            autoComplete="off"
            onChange={handleChange}
            placeholder="Enter a number"
            autoFocus={true}
          />
        </div>
        <div>
          <input
            id="words"
            type="radio"
            name="setting"
            value="words"
            onChange={handleChange}
            defaultChecked
          />
          <label htmlFor="words">Words</label>
          <input
            id="sentences"
            type="radio"
            name="setting"
            value="sentences"
            onChange={handleChange}
          />
          <label htmlFor="sentences">Sentences</label>
          <input
            id="paragraphs"
            type="radio"
            name="setting"
            value="paragraphs"
            onChange={handleChange}
          />
          <label htmlFor="paragraphs">Paragraphs</label>
        </div>
      </form>
    </StyledForm>
  );
};

export default Form;
