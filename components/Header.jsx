import styled from "styled-components";
import Navigation from "./Navigation";
import Title from "./Title";

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  background-color: black;
  color: white;
`;

const Header = (props) => {
  return (
    <StyledHeader>
      <Title></Title>
      <Navigation
        handlePostVisibility={props.handlePostVisibility}
        postVisibility={props.postVisibility}
        featuredPostVisibility={props.featuredPostVisibility}
        handleFeaturedPostVisibility={props.handleFeaturedPostVisibility}
        toggleContact={props.toggleContact}
        handleHomeVisibility={props.handleHomeVisibility}
      ></Navigation>
    </StyledHeader>
  );
};

export default Header;
