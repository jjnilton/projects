import styled from "styled-components";

const StyledNavigation = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  gap: 10px;
  & > li {
    list-style-type: none;
    cursor: pointer;
    font-size: 16px;
    transition: font-size 1s;
  }
  & > li:nth-child(1) {
    @media (min-width: 960px) {
      position: absolute;
      left: 65.89%;
      right: 29.48%;
      top: 31%;
      bottom: 38%;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    }
  }

  & > li:nth-child(2) {
    @media (min-width: 960px) {
      position: absolute;
      left: 76.67%;
      right: 16.61%;
      top: 31%;
      bottom: 38%;
      font-family: Rubik;
      font-style: normal;
      font-weight: 500;
      font-size: 32px;
      line-height: 38px;
    }
  }
`;

const Navigation = (props) => {
  const handleContact = () => {
    props.toggleContact();
  };

  return (
    <StyledNavigation>
      <li onClick={props.handleHome}>Posts</li>
      <li onClick={handleContact}>Contact</li>
    </StyledNavigation>
  );
};

export default Navigation;
