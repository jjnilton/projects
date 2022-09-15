import styled from "styled-components";

const StyledTitle = styled.div`
  position: absolute;
  left: 16.67%;
  right: 72.81%;
  top: 28%;
  bottom: 29%;
  font-family: Rubik;
  font-size: 36px;
  line-height: 43px;

  transition: font-size 1s;
  font-style: normal;
  font-weight: bold;
  cursor: pointer;

  @media (max-width: 960px) {
    position: static;
    font-size: 16px;
  }
  & a {
    text-decoration: none;
    color: unset;
  }
`;

const Title = (props) => {
  return (
    <StyledTitle onClick={props.handleHome}>
      <a href="#">Title</a>
    </StyledTitle>
  );
};

export default Title;
