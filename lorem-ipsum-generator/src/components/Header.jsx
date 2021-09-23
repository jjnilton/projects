import styled from "styled-components";

const StyledHeader = styled.header`
  display: grid;
  justify-items: center;
  & h1 {
    display: grid;
    grid-template-columns: max-content max-content;
    gap: 3px;
    color: ${props => props.darkTheme ? "white" : "black" }
  }
  & h1 > div > div:first-child {
    background-color: ${props => props.darkTheme ? "white" : "black" };
    color: ${props => props.darkTheme ? "black" : "white" };
    display: grid;
    border-radius: 3px;
    padding: 0 6px;
  }
  & h1 > div > div:last-child {
      font-size: 0.4em;
      text-align: center;
      letter-spacing: 3px;
      margin-left: 3px;
      color: ${props => props.darkTheme ? "white" : "black" }
    }
`;

const Header = (props) => {
  return (
    <StyledHeader darkTheme={props.darkTheme}>
      <h1>
        Lorem{" "}
        <div>
          <div>Ipsum</div>
          <div>GENERATOR</div>
        </div>
      </h1>
    </StyledHeader>
  );
};

export default Header;
