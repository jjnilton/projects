import styled from "styled-components";

const StyledButton = styled.button`
  text-decoration: none;
  background-color: #3da73d;
  color: white;
  padding: 5px;
  margin: 20px;
  display: block;
  box-shadow: 0 5px 5px #aaa;
  border-radius: 5px;
  border: 1px solid #689068;
  &:hover {
    background-color: #39c839;
  }
`;

const Button = () => {
  return <StyledButton></StyledButton>
}

export { StyledButton };
export default Button;
