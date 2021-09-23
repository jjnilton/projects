import styled from "styled-components";

const StyledWarning = styled.div`
  background-color: ${props => props.darkTheme ? "white" : "black" };
  color: ${props => props.darkTheme ? "black" : "white" };
  margin: 10px 0;
  border-radius: 3px;
  padding: 5px;
  & > span {
    font-weight: bold;
  }
`;

const Warning = (props) => {
  return <StyledWarning darkTheme={props.darkTheme}><span>Warning</span>: a high number can slow your browser.</StyledWarning>
}

export default Warning;