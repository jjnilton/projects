import styled from "styled-components";

const StyledBackToTop = styled.button`
  position: fixed;
  bottom: 3vh;
  right: 3vw;
  width: 72px;
  font-size: 1em;
  background-color: rgb(81, 137, 190, 0.75);
  color: white;
  padding: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 0 10px #aaa;
  transition: opacity .5s;
  &:hover {
    background-color: rgb(81, 137, 190);
    transition: background-color 0.2s;
  }
  opacity: ${props => props.y > 0 ? '1' : '0' };
`;

const BackToTop = (props) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return <StyledBackToTop onClick={handleClick} y={props.y}>Back to Top</StyledBackToTop>;
};

export default BackToTop;
