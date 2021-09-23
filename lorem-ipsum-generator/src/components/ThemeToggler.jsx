import styled from "styled-components";

const StyledThemeToggler = styled.div`
  text-align: right;
  font-size: 2em;
  font-weight: bold;
  user-select: none;
  & input {
    display: none;
  }
  & label {
    cursor: pointer;
    color: ${(props) => (props.darkTheme ? "black" : "white")};
    background: ${(props) => (props.darkTheme ? "white" : "black")};
    border-radius: 3px;
    padding: 0 5px;
  }
`;

const ThemeToggler = (props) => {
  return (
    <StyledThemeToggler darkTheme={props.darkTheme}>
      <input
        type="checkbox"
        name="theme"
        id="theme"
        onChange={props.handleDarkTheme}
      />
      <label htmlFor="theme">☼</label>
    </StyledThemeToggler>
  );
};

export default ThemeToggler;
